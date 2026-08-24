import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  buildDiagnosticEntryHref,
  companyProfileUrl,
  fetchDiagnostic
} from "../../lib/trustverify";

/**
 * O documento de diagnóstico.
 *
 * Existe porque o questionário produzia só uma mensagem de WhatsApp: quem
 * respondia às cinco perguntas ficava sem nada, e quem não carregasse em
 * enviar desaparecia sem deixar rasto. Agora sai daqui com uma peça que pode
 * reler, guardar e reencaminhar a um sócio.
 *
 * O argumento comercial é o próprio documento: quem recebe algo estruturado
 * antes de pagar um cêntimo já viu como se trabalha. É a única prova de
 * entrega que se pode dar antes de haver entrega.
 *
 * `noindex` de propósito — é a página de uma pessoa concreta, não conteúdo.
 */

export const revalidate = 60;

export const metadata: Metadata = {
  robots: { index: false, follow: false }
};

function money(cents: number, currency: string): string {
  return new Intl.NumberFormat("pt-PT", {
    style: "currency",
    currency: currency.toUpperCase() === "BRL" ? "BRL" : "EUR",
    maximumFractionDigits: 0
  }).format(cents / 100);
}

export default async function DiagnosticoPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const d = await fetchDiagnostic(id);
  if (!d) notFound();

  const data = new Date(d.createdAt).toLocaleDateString("pt-PT", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  return (
    <>
      <Header />

      <main className="bg-brand-ivory px-6 pb-20 pt-16">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-bronze">
            Diagnóstico · {data}
          </p>

          <div className="mt-6 border border-brand-gold/25 bg-white shadow-large">
            {/* Cabeçalho: o resultado, sem rodeios */}
            <div className="border-b border-brand-gold/20 bg-brand-ink p-8 text-white">
              <p className="text-xs font-semibold uppercase text-brand-gold">
                Resultado
              </p>
              <h1 className="mt-3 text-4xl font-semibold leading-tight">
                {d.tierTitle}
              </h1>
              {d.tierSummary ? (
                <p className="mt-4 max-w-xl text-base leading-8 text-slate-300">
                  {d.tierSummary}
                </p>
              ) : null}
            </div>

            <div className="grid grid-cols-1 gap-px bg-brand-gold/20 sm:grid-cols-2">
              <div className="bg-white p-6">
                <p className="text-xs uppercase text-brand-ink/50">
                  Faixa de investimento
                </p>
                <p className="mt-2 text-2xl font-semibold text-brand-ink">
                  {money(d.priceFromCents, d.currency)} a {money(d.priceToCents, d.currency)}
                </p>
              </div>
              <div className="bg-white p-6">
                <p className="text-xs uppercase text-brand-ink/50">Prazo provável</p>
                <p className="mt-2 text-2xl font-semibold text-brand-ink">
                  {d.timeline ?? "A definir"}
                </p>
              </div>
            </div>

            {/* O que foi respondido — o documento tem de ser auditável por quem
                o recebe encaminhado e não esteve presente a responder. */}
            {d.answers.length > 0 ? (
              <div className="border-t border-brand-gold/20 p-8">
                <h2 className="text-lg font-semibold text-brand-ink">
                  O que foi respondido
                </h2>
                <div className="mt-5 divide-y divide-brand-gold/15">
                  {d.answers.map((a, i) => (
                    <div key={i} className="py-4 first:pt-0 last:pb-0">
                      <p className="text-sm text-brand-ink/55">{a.questionLabel}</p>
                      {/* "Sem resposta" e não "—": um travessão num documento
                          lê-se como campo por preencher, não como escolha. */}
                      <p className={`mt-1.5 text-base ${a.selected.length > 0 ? "font-semibold text-brand-ink" : "text-brand-ink/40"}`}>
                        {a.selected.length > 0 ? a.selected.join(" · ") : "Sem resposta"}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {d.includes.length > 0 ? (
              <div className="border-t border-brand-gold/20 bg-[#FBFAF7] p-8">
                <h2 className="text-lg font-semibold text-brand-ink">
                  O que normalmente inclui
                </h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {d.includes.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-7 text-brand-ink/70">
                      <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-gold" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {/* O que a faixa NÃO garante. Dizê-lo aqui, antes da conversa, custa
                menos do que descobri-lo a meio de um projecto. */}
            <div className="border-t border-brand-gold/20 p-8">
              <h2 className="text-lg font-semibold text-brand-ink">
                O que esta faixa não decide ainda
              </h2>
              <p className="mt-4 text-sm leading-7 text-brand-ink/65">
                É uma estimativa de triagem, feita a partir de cinco respostas.
                O valor final depende de integrações com sistemas que já uses,
                de quantos dados existem para migrar, de quem precisa de
                permissões diferentes, e da velocidade com que a primeira
                versão tem de estar no ar. Nada disto se sabe sem uma conversa
                — e é por isso que a conversa é o próximo passo, não a proposta.
              </p>
            </div>

            <div className="border-t border-brand-gold/20 bg-brand-ink p-8">
              <p className="text-sm leading-7 text-slate-300">
                Preparado por <strong className="text-white">{d.company.name}</strong>,
                empresa verificada na rede TrustVerify. A gestão do pedido, o
                pagamento e a avaliação correm nessa plataforma.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={buildDiagnosticEntryHref(
                    d.id,
                    `Resultado: ${d.tierTitle}`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md bg-brand-gold px-6 py-4 text-center text-sm font-semibold text-white transition hover:bg-brand-bronze"
                >
                  Falar sobre isto no WhatsApp
                </a>
                <a
                  href={companyProfileUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-white/20 px-6 py-4 text-center text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Ver o perfil verificado
                </a>
              </div>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-brand-ink/50">
            <Link href="/#diagnostico" className="font-semibold text-brand-bronze">
              Fazer outro diagnóstico
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
