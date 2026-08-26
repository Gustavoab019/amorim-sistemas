"use client";

import { useState } from "react";
import { submitDiagnosticContact } from "../lib/trustverify";

/**
 * Contacto — para quem prefere resolver tudo no site.
 *
 * Aparece DEPOIS do documento existir, nunca antes. Pedir email para ver o
 * resultado transformaria um diagnóstico útil numa portagem, e quem paga
 * portagem chega do outro lado a achar que já deu alguma coisa.
 *
 * Só nome e email são obrigatórios. Cada campo a mais é gente a desistir.
 */

type Estado =
  | { fase: "aberto" }
  | { fase: "a-enviar" }
  /** `comEmail` distingue "recebemos e confirmámos" de "recebemos". */
  | { fase: "enviado"; comEmail: boolean }
  | { fase: "erro"; mensagem: string };

export function DiagnosticContactForm({ diagnosticId }: { diagnosticId: string }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [nota, setNota] = useState("");
  const [estado, setEstado] = useState<Estado>({ fase: "aberto" });

  async function enviar(e: React.FormEvent) {
    e.preventDefault();
    setEstado({ fase: "a-enviar" });
    const r = await submitDiagnosticContact(diagnosticId, {
      name: nome.trim(),
      email: email.trim(),
      note: nota.trim() || undefined
    });
    setEstado(
      r.ok
        ? { fase: "enviado", comEmail: r.confirmationSent }
        : { fase: "erro", mensagem: r.error }
    );
  }

  if (estado.fase === "enviado") {
    return (
      <div className="border border-brand-sage/40 bg-brand-sage/10 p-5">
        <p className="text-sm font-semibold text-white">Recebido. ✅</p>
        {/* Só afirmamos o email quando ele saiu mesmo. Dizer "enviámos" com o
            envio em baixo deixa a pessoa à espera de uma coisa que não vem. */}
        {estado.comEmail ? (
          <p className="mt-2 text-sm leading-7 text-slate-300">
            Enviámos uma confirmação para{" "}
            <strong className="text-white">{email}</strong> com o link do teu
            diagnóstico. Lemos o que respondeste e voltamos ao contacto.
          </p>
        ) : (
          <p className="mt-2 text-sm leading-7 text-slate-300">
            Ficámos com o teu contacto e com o que respondeste, e voltamos ao
            contacto por <strong className="text-white">{email}</strong>. Guarda
            o link do diagnóstico acima — a confirmação por email pode demorar.
          </p>
        )}
      </div>
    );
  }

  const podeEnviar =
    nome.trim().length > 1 && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());

  return (
    <form onSubmit={enviar} className="border border-white/15 bg-white/5 p-5">
      <p className="text-sm font-semibold text-white">Preferes tratar disto por email?</p>
      <p className="mt-1.5 text-xs leading-6 text-slate-400">
        Deixa o contacto e recebes a confirmação com o documento. Sem WhatsApp,
        sem conta, sem chamada surpresa.
      </p>

      <div className="mt-4 space-y-2.5">
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="O teu nome"
          autoComplete="name"
          className="w-full border border-white/20 bg-brand-ink px-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-brand-gold focus:outline-none"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@exemplo.pt"
          autoComplete="email"
          className="w-full border border-white/20 bg-brand-ink px-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-brand-gold focus:outline-none"
        />
        <textarea
          value={nota}
          onChange={(e) => setNota(e.target.value)}
          placeholder="Alguma coisa que queiras adiantar? (opcional)"
          rows={2}
          className="w-full resize-none border border-white/20 bg-brand-ink px-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-brand-gold focus:outline-none"
        />
      </div>

      {estado.fase === "erro" ? (
        <p className="mt-3 text-xs leading-6 text-[#E8A48A]">{estado.mensagem}</p>
      ) : null}

      <button
        type="submit"
        disabled={!podeEnviar || estado.fase === "a-enviar"}
        className={`mt-4 w-full px-5 py-3 text-sm font-semibold transition ${
          podeEnviar && estado.fase !== "a-enviar"
            ? "bg-white text-brand-ink hover:bg-slate-200"
            : "cursor-not-allowed bg-white/20 text-white/50"
        }`}
      >
        {estado.fase === "a-enviar" ? "A enviar…" : "Enviar e receber confirmação"}
      </button>

      <p className="mt-3 text-[11px] leading-5 text-slate-500">
        Usamos o teu email só para responder a este diagnóstico. Não entra em
        nenhuma lista.
      </p>
    </form>
  );
}
