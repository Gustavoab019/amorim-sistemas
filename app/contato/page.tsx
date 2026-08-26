import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a Complexidade Simples para diagnosticar sua operação e entender que tipo de sistema, automação ou painel faz sentido construir.",
  alternates: {
    canonical: "/contato"
  },
  openGraph: {
    title: "Contato — Complexidade Simples",
    description:
      "Diagnóstico para sistemas sob medida, gestão de leads, automação de WhatsApp e painéis operacionais.",
    url: "/contato"
  }
};

const CONTACTS = [
  {
    label: "Email direto",
    value: "contato@complexidadesimples.com",
    href: "mailto:contato@complexidadesimples.com?subject=Diagnostico%20de%20sistema"
  },
  {
    label: "WhatsApp",
    value: "+351 913 542 470",
    href: "https://wa.me/351913542470?text=Ola%20Gustavo%2C%20quero%20fazer%20um%20diagnostico%20para%20um%20sistema."
  },
  {
    label: "Telefone",
    value: "+351 913 542 470",
    href: "tel:+351913542470"
  }
];

export default function ContatoPage() {
  return (
    <main className="bg-brand-ivory px-6 pb-20 pt-28 text-brand-ink/75 sm:pt-32">
      <div className="mx-auto w-full max-w-4xl">
        <Link href="/" className="text-sm font-semibold text-brand-bronze">
          ← Voltar para o site
        </Link>

        <h1 className="mt-6 text-3xl font-bold text-brand-ink sm:text-4xl">
          Contato
        </h1>
        <p className="mt-4 text-base leading-relaxed text-brand-ink/65 sm:text-lg">
          Vamos entender o que está acontecendo na sua operação, qual sistema
          faz sentido e qual seria a primeira versão viável.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {CONTACTS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-lg border border-brand-gold/20 bg-white p-6 shadow-soft transition hover:border-brand-gold/50 hover:shadow-medium"
              target={item.href.startsWith("https://") ? "_blank" : undefined}
              rel={item.href.startsWith("https://") ? "noreferrer" : undefined}
            >
              <div className="text-xs font-semibold uppercase text-brand-bronze">
                {item.label}
              </div>
              <div className="mt-2 text-lg font-semibold text-brand-ink">
                {item.value}
              </div>
              <div className="mt-1 text-sm text-brand-ink/50">
                Clique para abrir
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 rounded-lg border border-brand-gold/20 bg-white p-8 shadow-soft">
          <h2 className="text-xl font-semibold text-brand-ink sm:text-2xl">
            Como funciona a conversa
          </h2>
          <p className="mt-3 text-base leading-relaxed text-brand-ink/65 sm:text-lg">
            A conversa começa pelo processo: onde a demanda entra, onde a
            informação se perde, quem precisa usar e o que precisa ser medido.
            Depois disso fica mais fácil definir escopo, prazo e investimento.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-brand-ink/60">
            <span className="rounded-full bg-brand-paper px-4 py-1.5">
              Diagnóstico rápido
            </span>
            <span className="rounded-full bg-brand-paper px-4 py-1.5">
              Proposta objetiva
            </span>
            <span className="rounded-full bg-brand-paper px-4 py-1.5">
              Sem intermediários
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
