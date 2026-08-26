import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BOOK, OPENING_LINE, ANTI_PROMISE, STRUCTURE, QUOTES, AUDIENCE } from "./_content/book";
import { CAPITULO_8 } from "./_content/chapter8";
import { BuyBook } from "./BuyBook";

/**
 * Página de venda de "Também Pode Ser Assim".
 *
 * A decisão que orienta tudo: **vender por amostragem, não por promessa**.
 *
 * Um livro cujo argumento central é desconfiar de quem responde depressa não
 * pode ser vendido com "transforma a tua forma de pensar". Seria
 * auto-refutante — e o leitor que ia gostar dele é exactamente quem fecha essa
 * página. Por isso o capítulo 8 está aqui inteiro, de graça: para ensaio, o
 * texto é o produto, e mostrar convence mais do que prometer.
 *
 * A anti-promessa do prólogo fica em destaque em vez de escondida, e há uma
 * lista de para-quem-NÃO-é. Não é humildade decorativa: quem se reconhece ali
 * e compra na mesma fica desiludido, e isso custa mais do que a venda vale.
 */

export const metadata: Metadata = {
  title: `${BOOK.title} — ${BOOK.subtitle}`,
  description:
    "Um livro sobre desconfiar das próprias certezas. 16 capítulos, cada um a fechar com uma pergunta para levar. Lê o capítulo 8 inteiro antes de decidir.",
  alternates: { canonical: "/livro" },
  openGraph: {
    title: `${BOOK.title} — ${BOOK.subtitle}`,
    description: OPENING_LINE,
    url: "/livro",
    type: "book"
  }
};

export default function LivroPage() {
  return (
    <>
      <Header />

      <main>
        {/* ── Abertura: a melhor linha do livro faz o trabalho todo ── */}
        <section className="bg-brand-ink px-6 pb-20 pt-16 text-white sm:pb-28 sm:pt-24">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold">
              Livro · {BOOK.pages} páginas · {BOOK.chapters} capítulos
            </p>

            <blockquote className="mt-8 text-3xl font-semibold leading-[1.25] sm:text-4xl sm:leading-[1.2]">
              “{OPENING_LINE}”
            </blockquote>

            <div className="mt-12 border-t border-white/15 pt-10">
              <h1 className="text-4xl font-semibold uppercase leading-tight tracking-wide sm:text-5xl">
                {BOOK.title}
              </h1>
              <p className="mt-3 text-lg text-slate-300">{BOOK.subtitle}</p>
              <p className="mt-2 text-sm text-slate-400">{BOOK.author}</p>
            </div>

            <div className="mt-10">
              <BuyBook />
            </div>
          </div>
        </section>

        {/* ── A anti-promessa. Uma página normal esconderia isto. ── */}
        <section className="bg-[#FBFAF7] px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase text-brand-bronze">
              A primeira coisa que o livro diz
            </p>
            <div className="mt-6 border-l-2 border-brand-gold pl-6">
              {ANTI_PROMISE.map((linha) => (
                <p key={linha} className="text-2xl font-semibold leading-9 text-brand-ink sm:text-[1.75rem]">
                  {linha}
                </p>
              ))}
            </div>
            <p className="mt-6 text-base leading-8 text-brand-ink/62">
              Está no prólogo, e não é falsa modéstia. Este livro não traz um
              método, nem uma fórmula, nem a resposta sobre o que fazer da tua
              vida. Traz perguntas que talvez ainda não te tenhas feito — e a
              honestidade de admitir que continuam abertas no fim.
            </p>
          </div>
        </section>

        {/* ── O capítulo inteiro. É aqui que a venda acontece. ── */}
        <section id="capitulo" className="bg-white px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-3xl">
            <div className="border-b border-brand-gold/25 pb-8">
              <p className="text-xs font-semibold uppercase text-brand-bronze">
                Lê antes de decidir — capítulo completo, sem cortes
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-brand-ink sm:text-4xl">
                {CAPITULO_8.titulo}
              </h2>
              <p className="mt-2 text-sm uppercase tracking-wide text-brand-ink/45">
                {CAPITULO_8.numero} de {BOOK.chapters}
              </p>
            </div>

            <blockquote className="mt-10 border-l-2 border-brand-gold pl-6 text-xl font-semibold leading-8 text-brand-ink sm:text-2xl sm:leading-9">
              {CAPITULO_8.abertura}
            </blockquote>

            <div className="mt-10 space-y-6">
              {CAPITULO_8.blocos.map((bloco, i) => {
                if (bloco.tipo === "titulo") {
                  return (
                    <h3 key={i} className="pt-6 text-lg font-semibold text-brand-ink">
                      {bloco.texto}
                    </h3>
                  );
                }
                if (bloco.tipo === "verso") {
                  return (
                    <p key={i} className="whitespace-pre-line border-l border-brand-gold/30 pl-5 text-base leading-8 text-brand-ink/70">
                      {bloco.texto}
                    </p>
                  );
                }
                if (bloco.tipo === "exercicio") {
                  return (
                    <div key={i} className="mt-10 border border-brand-gold/30 bg-[#FBFAF7] p-6">
                      <p className="text-xs font-semibold uppercase text-brand-bronze">
                        Colocando em prática
                      </p>
                      <p className="mt-3 text-base leading-8 text-brand-ink/75">
                        {bloco.texto}
                      </p>
                    </div>
                  );
                }
                return (
                  <p key={i} className="text-base leading-8 text-brand-ink/75">
                    {bloco.texto}
                  </p>
                );
              })}
            </div>

            <p className="mt-10 text-sm leading-7 text-brand-ink/50">
              Cada um dos {BOOK.chapters} capítulos termina assim: com uma
              pergunta para levar, não com um resumo.
            </p>
          </div>
        </section>

        {/* ── Estrutura: o que mais lá está ── */}
        <section className="bg-brand-ivory px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-semibold text-brand-ink sm:text-4xl">
              Quatro partes, dezasseis capítulos.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-brand-ink/62">
              Podes entrar por qualquer pergunta. O livro tenta ligá-las.
            </p>

            <div className="mt-12 grid gap-px overflow-hidden border border-brand-gold/20 bg-brand-gold/20 sm:grid-cols-2">
              {STRUCTURE.map((parte) => (
                <div key={parte.part} className="bg-[#FBFAF7] p-7">
                  <p className="text-xs font-semibold uppercase text-brand-bronze">
                    {parte.part}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-brand-ink">
                    {parte.name}
                  </h3>
                  <p className="mt-3 text-sm italic leading-7 text-brand-ink/55">
                    {parte.line}
                  </p>
                  <ol className="mt-5 space-y-2 text-sm leading-6 text-brand-ink/70">
                    {parte.chapters.map((c) => (
                      <li key={c} className="flex gap-3">
                        <span className="mt-2 h-1 w-1 flex-none rounded-full bg-brand-gold" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Citações do próprio livro ── */}
        <section className="bg-brand-ink px-6 py-20 text-white sm:py-28">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs font-semibold uppercase text-brand-gold">
              Do livro
            </p>
            <div className="mt-10 space-y-10">
              {QUOTES.map((q) => (
                <figure key={q.text}>
                  <blockquote className="text-xl font-semibold leading-9 sm:text-2xl sm:leading-10">
                    “{q.text}”
                  </blockquote>
                  <figcaption className="mt-2 text-xs uppercase tracking-wide text-slate-500">
                    {q.source}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ── Para quem é, e para quem não é ── */}
        <section className="bg-white px-6 py-20 sm:py-28">
          <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase text-brand-bronze">
                Provavelmente é para ti se
              </p>
              <ul className="mt-6 space-y-4">
                {AUDIENCE.yes.map((item) => (
                  <li key={item} className="flex gap-3 text-base leading-7 text-brand-ink/75">
                    <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-sage" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase text-brand-ink/40">
                Provavelmente não é para ti se
              </p>
              <ul className="mt-6 space-y-4">
                {AUDIENCE.no.map((item) => (
                  <li key={item} className="flex gap-3 text-base leading-7 text-brand-ink/45">
                    <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-ink/25" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Compra ── */}
        <section id="comprar" className="border-t border-brand-gold/20 bg-[#FBFAF7] px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold text-brand-ink sm:text-4xl">
              Já leste um capítulo inteiro. Faltam {BOOK.chapters - 1}.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-brand-ink/62">
              {BOOK.format}, {BOOK.pages} páginas. Recebes o ficheiro por email
              logo a seguir ao pagamento.
            </p>
            <div className="mt-10 flex justify-center">
              <BuyBook />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
