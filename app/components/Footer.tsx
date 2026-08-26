import Image from "next/image";
import Link from "next/link";
import {
  TRUSTVERIFY_URL,
  buildBusinessEntryHref,
  companyProfileUrl
} from "../lib/trustverify";

/**
 * Rodapé.
 *
 * Existia um buraco: `/contato`, `/privacy`, `/policy` e `/cookies` estavam
 * construídas e nada no site ligava para elas. Páginas órfãs não são só
 * trabalho perdido — as de política têm de estar alcançáveis de qualquer
 * página para cumprirem a função.
 */

const LEGAL = [
  { label: "Contacto", href: "/contato" },
  { label: "Privacidade", href: "/privacy" },
  { label: "Termos", href: "/policy" },
  { label: "Cookies", href: "/cookies" }
];

const NAV = [
  { label: "Diagnóstico", href: "/#diagnostico" },
  { label: "Como funciona", href: "/#como-funciona" },
  { label: "Casos reais", href: "/#casos" },
  { label: "Prova", href: "/#prova" },
  { label: "FAQ", href: "/#perguntas" }
];

export default function Footer() {
  return (
    <footer className="border-t border-brand-gold/20 bg-brand-ink px-6 py-16 text-slate-300">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Image
              src="/complexidade-simples-logo.png"
              alt="Complexidade Simples"
              width={375}
              height={139}
              className="h-9 w-auto object-contain opacity-90"
            />
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Sistemas que organizam. Soluções que libertam. A gestão de
              pedidos, pagamentos e avaliações corre no TrustVerify.
            </p>
            <a
              href={companyProfileUrl()}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex text-sm font-semibold text-brand-gold underline underline-offset-4"
            >
              Perfil verificado no TrustVerify →
            </a>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase text-brand-gold">Site</p>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase text-brand-gold">Legal</p>
            <ul className="mt-5 space-y-3 text-sm">
              {LEGAL.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Complexidade Simples
          </p>
          <div className="flex flex-wrap items-center gap-5 text-xs">
            <a
              href={buildBusinessEntryHref()}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-brand-gold transition hover:text-white"
            >
              Falar no WhatsApp
            </a>
            <a
              href={TRUSTVERIFY_URL}
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 transition hover:text-slate-300"
            >
              Powered by TrustVerify
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
