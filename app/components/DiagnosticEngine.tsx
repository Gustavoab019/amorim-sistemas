"use client";

import { useMemo, useState } from "react";
import {
  buildDiagnosticEntryHref,
  createDiagnostic,
  diagnosticUrl
} from "../lib/trustverify";
import {
  buildWhatsAppHref,
  calculateDiagnosticResult,
  diagnosticQuestions,
  formatCurrency,
  type DiagnosticAnswers
} from "../lib/diagnostic";

const initialAnswers = diagnosticQuestions.reduce<DiagnosticAnswers>((answers, question) => {
  answers[question.id] = question.multiple ? [] : [question.options[0].id];
  return answers;
}, {});

type Emissao =
  | { estado: "inicial" }
  | { estado: "a-gerar" }
  | { estado: "pronto"; id: string }
  /** Sem documento, mas com caminho para falar connosco. Nunca um beco. */
  | { estado: "sem-registo" };

export function DiagnosticEngine() {
  const [answers, setAnswers] = useState<DiagnosticAnswers>(initialAnswers);
  const result = useMemo(() => calculateDiagnosticResult(answers), [answers]);
  const whatsappHref = useMemo(() => buildWhatsAppHref(result), [result]);
  const [emissao, setEmissao] = useState<Emissao>({ estado: "inicial" });
  const [copiado, setCopiado] = useState(false);

  /**
   * Gera o documento.
   *
   * O registo acontece aqui e não a cada resposta: enquanto a pessoa mexe nas
   * opções ainda está a pensar, e guardar cada estado intermédio encheria a
   * base de rascunhos que não são leads.
   */
  async function gerarDocumento() {
    setEmissao({ estado: "a-gerar" });
    const id = await createDiagnostic({
      tierId: result.id,
      tierTitle: result.title,
      tierSummary: result.summary,
      priceFromCents: Math.round(result.priceFrom * 100),
      priceToCents: Math.round(result.priceTo * 100),
      timeline: result.timeline,
      includes: result.includes,
      answers: diagnosticQuestions.map((q) => ({
        questionId: q.id,
        questionLabel: q.title,
        selected: (answers[q.id] ?? []).map(
          (optId) => q.options.find((o) => o.id === optId)?.label ?? optId
        )
      }))
    });
    setEmissao(id ? { estado: "pronto", id } : { estado: "sem-registo" });
  }

  async function copiarLink(id: string) {
    try {
      await navigator.clipboard.writeText(diagnosticUrl(id));
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch {
      // Sem clipboard (http, permissões) o link continua visível para copiar à mão.
    }
  }

  function toggleOption(questionId: string, optionId: string, multiple?: boolean) {
    setAnswers((current) => {
      const selected = current[questionId] ?? [];
      const nextSelected = multiple
        ? selected.includes(optionId)
          ? selected.filter((id) => id !== optionId)
          : [...selected, optionId]
        : [optionId];

      return {
        ...current,
        [questionId]: nextSelected
      };
    });
  }

  return (
    <section id="diagnostico" className="relative overflow-hidden border-y border-brand-gold/20 bg-brand-paper/60 px-6 py-20 sm:py-28">
      <div className="absolute inset-y-0 right-0 hidden w-[34%] bg-brand-ink lg:block" />
      <div className="absolute right-16 top-20 hidden h-80 w-80 rounded-full bg-brand-gold/15 blur-3xl lg:block" />
      <div className="absolute left-12 top-16 h-52 w-52 rounded-full bg-brand-gold/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.12fr_0.88fr]">
        <div>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase text-brand-bronze">
              Diagnóstico comercial
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-brand-ink sm:text-4xl">
              Cinco respostas para separar “quero um site” de “preciso de um sistema”.
            </h2>
            <p className="mt-5 text-base leading-8 text-brand-ink/65">
              O resultado combina tipo de projeto, faixa de investimento, prazo
              provável e um resumo pronto para conversa. É uma triagem antes da
              venda.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {diagnosticQuestions.map((question, questionIndex) => (
              <fieldset
                key={question.id}
                className="border border-brand-gold/20 bg-[#FBFAF7] p-5 shadow-soft sm:p-6"
              >
                <legend className="w-full">
                  <span className="grid gap-3 sm:grid-cols-[3rem_1fr]">
                    <span className="text-sm font-semibold text-brand-bronze">
                      {String(questionIndex + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base font-semibold text-brand-ink">
                      {question.title}
                    </span>
                  </span>
                </legend>
                <div className="mt-1 grid gap-3 sm:grid-cols-[3rem_1fr]">
                  <div />
                  <p className="text-sm leading-7 text-brand-ink/55">
                    {question.helper}
                  </p>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2 sm:pl-12">
                  {question.options.map((option) => {
                    const selected = answers[question.id]?.includes(option.id) ?? false;
                    return (
                      <button
                        key={option.id}
                        type="button"
                        aria-pressed={selected}
                        onClick={() => toggleOption(question.id, option.id, question.multiple)}
                        className={`border p-4 text-left transition ${
                          selected
                            ? "border-brand-gold bg-brand-ink text-white shadow-soft"
                            : "border-brand-gold/20 bg-white text-brand-ink/75 hover:border-brand-gold/45 hover:bg-brand-paper/50"
                        }`}
                      >
                        <span className="block text-sm font-semibold">
                          {option.label}
                        </span>
                        {option.description ? (
                          <span className={`mt-1 block text-sm leading-7 ${selected ? "text-slate-300" : "text-brand-ink/55"}`}>
                            {option.description}
                          </span>
                        ) : null}
                      </button>
                    );
                  })}
                </div>
              </fieldset>
            ))}
          </div>
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="relative overflow-hidden border border-white/10 bg-brand-ink text-white shadow-[0_30px_90px_rgba(0,0,0,0.28)]">
            <div className="absolute right-0 top-0 h-40 w-40 bg-brand-gold/10 blur-2xl" />
            <div className="border-b border-white/10 p-6">
              <p className="text-xs font-semibold uppercase text-brand-gold">
                Estimativa inicial
              </p>
              <h3 className="mt-4 text-3xl font-semibold">
                {result.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {result.summary}
              </p>
            </div>

            <div className="grid grid-cols-2 border-b border-white/10 bg-white/[0.03]">
              <div className="border-r border-white/10 p-5">
                <p className="text-xs uppercase text-slate-400">Faixa</p>
                <p className="mt-2 text-xl font-semibold">
                  {formatCurrency(result.priceFrom)}
                </p>
                <p className="text-sm text-slate-400">
                  até {formatCurrency(result.priceTo)}
                </p>
              </div>
              <div className="p-5">
                <p className="text-xs uppercase text-slate-400">Prazo médio</p>
                <p className="mt-2 text-xl font-semibold">{result.timeline}</p>
              </div>
            </div>

            <div className="space-y-5 p-6">
              <div>
                <p className="text-sm font-semibold text-white">Normalmente inclui</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  {result.includes.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-gold" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold">Referência real</p>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {result.examples[0]}
                </p>
              </div>

              {emissao.estado === "inicial" && (
                <button
                  type="button"
                  onClick={gerarDocumento}
                  className="block w-full bg-brand-gold px-5 py-4 text-center text-sm font-semibold text-white transition hover:bg-brand-bronze"
                >
                  Gerar o meu diagnóstico
                </button>
              )}

              {emissao.estado === "a-gerar" && (
                <div className="block w-full bg-brand-gold/60 px-5 py-4 text-center text-sm font-semibold text-white">
                  A preparar…
                </div>
              )}

              {emissao.estado === "pronto" && (
                <div className="space-y-3">
                  <div className="border border-brand-gold/40 bg-white/5 p-4">
                    <p className="text-xs font-semibold uppercase text-brand-gold">
                      O teu diagnóstico
                    </p>
                    <p className="mt-2 break-all font-mono text-xs leading-6 text-slate-300">
                      {diagnosticUrl(emissao.id)}
                    </p>
                    <div className="mt-3 flex gap-2">
                      <a
                        href={`/diagnostico/${emissao.id}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 border border-white/20 px-3 py-2 text-center text-xs font-semibold text-white transition hover:bg-white/10"
                      >
                        Abrir
                      </a>
                      <button
                        type="button"
                        onClick={() => copiarLink(emissao.id)}
                        className="flex-1 border border-white/20 px-3 py-2 text-center text-xs font-semibold text-white transition hover:bg-white/10"
                      >
                        {copiado ? "Copiado ✓" : "Copiar link"}
                      </button>
                    </div>
                    <p className="mt-3 text-xs leading-6 text-slate-400">
                      Guarda ou reencaminha. Fica disponível mesmo que não
                      falemos hoje.
                    </p>
                  </div>

                  <a
                    href={buildDiagnosticEntryHref(
                      emissao.id,
                      `Resultado: ${result.title} · ${formatCurrency(result.priceFrom)} a ${formatCurrency(result.priceTo)}`
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="block bg-brand-gold px-5 py-4 text-center text-sm font-semibold text-white transition hover:bg-brand-bronze"
                  >
                    Falar sobre isto no WhatsApp
                  </a>
                </div>
              )}

              {emissao.estado === "sem-registo" && (
                <div className="space-y-3">
                  <p className="border border-white/15 bg-white/5 p-4 text-xs leading-6 text-slate-300">
                    Não consegui guardar o documento agora. A conversa funciona
                    à mesma — o diagnóstico vai na mensagem.
                  </p>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="block bg-brand-gold px-5 py-4 text-center text-sm font-semibold text-white transition hover:bg-brand-bronze"
                  >
                    Enviar diagnóstico pelo WhatsApp
                  </a>
                </div>
              )}

              <p className="text-xs leading-6 text-slate-500">
                A faixa é uma estimativa para triagem. O valor final depende de
                integrações, dados, permissões e velocidade de entrega.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
