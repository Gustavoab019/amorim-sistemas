"use client";

import { useState } from "react";
import { BOOK } from "./_content/book";
import { TRUSTVERIFY_URL } from "../lib/trustverify";

/**
 * Botão de compra.
 *
 * O pagamento corre na infraestrutura do TrustVerify, como tudo o resto: pedir
 * a sessão de checkout, ir para a Stripe, voltar. O email é pedido aqui e não
 * na Stripe porque é para onde o ficheiro vai — e convém a pessoa perceber
 * isso antes de pagar, não depois.
 */

type Estado =
  | { fase: "fechado" }
  | { fase: "aberto" }
  | { fase: "a-abrir-checkout" }
  | { fase: "erro"; mensagem: string };

const preco = BOOK.priceEur.toFixed(2).replace(".", ",");

export function BuyBook() {
  const [estado, setEstado] = useState<Estado>({ fase: "fechado" });
  const [email, setEmail] = useState("");

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());

  async function comprar(e: React.FormEvent) {
    e.preventDefault();
    setEstado({ fase: "a-abrir-checkout" });
    try {
      const res = await fetch(`${TRUSTVERIFY_URL}/api/v1/book/checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() })
      });
      const data = (await res.json().catch(() => ({}))) as { url?: string; error?: string };
      if (res.ok && data.url) {
        window.location.href = data.url;
        return;
      }
      setEstado({
        fase: "erro",
        mensagem: data.error ?? "Não consegui abrir o pagamento. Tenta outra vez."
      });
    } catch {
      setEstado({ fase: "erro", mensagem: "Sem ligação. Verifica a internet." });
    }
  }

  if (estado.fase === "fechado") {
    return (
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <button
          type="button"
          onClick={() => setEstado({ fase: "aberto" })}
          className="w-full rounded-md bg-brand-gold px-7 py-4 text-sm font-semibold text-white transition hover:bg-brand-bronze sm:w-auto"
        >
          Comprar por {preco} €
        </button>
        <a
          href="#capitulo"
          className="w-full rounded-md border border-white/25 px-7 py-4 text-center text-sm font-semibold text-white/80 transition hover:bg-white/10 sm:w-auto"
        >
          Ler um capítulo primeiro
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={comprar} className="w-full max-w-md text-left">
      <label htmlFor="email-livro" className="block text-sm font-medium text-white/80">
        Para onde envio o ficheiro?
      </label>
      <input
        id="email-livro"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email@exemplo.pt"
        autoComplete="email"
        autoFocus
        className="mt-2 w-full rounded-md border border-white/25 bg-brand-ink px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-brand-gold focus:outline-none"
      />

      {estado.fase === "erro" ? (
        <p className="mt-3 text-xs leading-6 text-[#E8A48A]">{estado.mensagem}</p>
      ) : null}

      <button
        type="submit"
        disabled={!emailValido || estado.fase === "a-abrir-checkout"}
        className={`mt-4 w-full rounded-md px-7 py-4 text-sm font-semibold transition ${
          emailValido && estado.fase !== "a-abrir-checkout"
            ? "bg-brand-gold text-white hover:bg-brand-bronze"
            : "cursor-not-allowed bg-white/20 text-white/50"
        }`}
      >
        {estado.fase === "a-abrir-checkout"
          ? "A abrir pagamento…"
          : `Continuar para pagamento — ${preco} €`}
      </button>

      <p className="mt-3 text-[11px] leading-5 text-slate-500">
        Pagamento pela Stripe. Recebes o {BOOK.format} neste email logo a
        seguir. Não entra em nenhuma lista.
      </p>
    </form>
  );
}
