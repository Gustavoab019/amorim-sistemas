import Image from "next/image";
import Header from "./components/Header";
import { DiagnosticEngine } from "./components/DiagnosticEngine";
import { TrustVerifyProof } from "./components/TrustVerifyProof";
import Footer from "./components/Footer";

const CASES = [
  {
    name: "Dra. Lays",
    meta: [["Base", "Next.js"], ["Canal", "WhatsApp"], ["Alcance", "Local"]],
    href: "https://www.dralayscastilho.com.br",
    category: "Captação local",
    scope: "Site e Instagram construídos do zero — e geridos por nós desde então.",
    signal: "Para quem precisa de transformar procura local em agenda cheia.",
    logo: "/case-dralays-logo.png",
    preview: "/case-dralays-preview.jpg",
    features: ["SEO local", "WhatsApp", "Instagram", "Gestão contínua"]
  },
  {
    name: "Habitta",
    meta: [["Base", "Next.js"], ["Pagamento", "Stripe"], ["Dados", "MongoDB"]],
    href: "https://www.habitta.pt",
    category: "Operação comercial",
    scope: "Marca e operação construídas do zero — e geridas por nós desde então.",
    signal: "Para negócios que vendem sob medida e precisam de controlar o fluxo.",
    logo: "/case-habitta-logo.png",
    preview: "/case-habitta-preview.jpg",
    features: ["Configurador", "Stripe", "Painel", "Gestão contínua"]
  },
  {
    name: "TrustVerify",
    meta: [["Base", "Next.js"], ["Pagamento", "Stripe"], ["Dados", "MongoDB"]],
    href: "https://www.trustverify.pt",
    category: "Plataforma",
    scope: "Plataforma própria: marketplace, verificação, pagamentos e painéis.",
    signal: "É onde corre a nossa própria operação — e a de quem nos contrata.",
    logo: "/case-trustverify-logo.png",
    preview: "/case-trustverify-preview.jpg",
    features: ["Marketplace", "Verificação", "Pagamentos", "Painéis"]
  }
];

const SYSTEM_TYPES = [
  ["01", "Entrada de demanda", "Landing, formulário, WhatsApp, tracking e primeira qualificação."],
  ["02", "Controle operacional", "Painel, pedidos, clientes, status, agenda e histórico."],
  ["03", "Automação", "Triagem, notificações, mensagens, regras e relatórios."],
  ["04", "Plataforma", "Perfis, permissões, pagamentos, reputação e múltiplos lados."]
];

const PRICE_BANDS = [
  ["Captação", "350€ a 900€"],
  ["Triagem", "900€ a 1.800€"],
  ["Operação", "1.800€ a 5.000€"],
  ["Plataforma", "5.000€ a 15.000€+"]
];

const TRUST_LOGOS = [
  { name: "Dra. Lays", src: "/case-dralays-logo.png", className: "h-14 w-auto" },
  { name: "Habitta", src: "/case-habitta-logo.png", className: "h-10 w-auto" },
  { name: "TrustVerify", src: "/case-trustverify-logo.png", className: "h-9 w-9 rounded-md" }
];

const METHOD = [
  "Diagnóstico do fluxo real",
  "Recorte da primeira versão vendável",
  "Construção do sistema com dados úteis",
  "Medição de demanda e melhoria contínua"
];

const FLOW_NODES = [
  ["Demanda", "WhatsApp, formulário, anúncio ou indicação"],
  ["Triagem", "Perguntas certas, prioridade e tipo de sistema"],
  ["Sistema", "Painel, automação, pagamento ou plataforma"],
  ["Decisão", "Faixa, prazo, escopo e próxima conversa"]
];

/**
 * Revalidação de 15 min.
 *
 * A secção de prova lê números vivos do TrustVerify. Sem isto a página é
 * prerenderizada no build e os contadores ficam congelados no valor que
 * tinham nesse instante — incluindo o zero de hoje, que deixaria de se
 * desligar sozinho quando o primeiro trabalho fechasse.
 */
export const revalidate = 900;

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section className="relative overflow-hidden bg-[#F8F4EC] px-6 pb-16 pt-16">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(184,148,93,0.12)_1px,transparent_1px),linear-gradient(180deg,rgba(184,148,93,0.10)_1px,transparent_1px)] bg-[size:72px_72px] opacity-35" />
          <div className="absolute left-0 top-0 hidden h-full w-[42%] bg-[#FBFAF7] lg:block" />
          <div className="absolute right-0 top-0 hidden h-full w-[58%] bg-brand-ink lg:block" />
          <div className="absolute right-1/4 top-1/2 h-[34rem] w-[34rem] -translate-y-1/2 rounded-full bg-brand-gold/20 blur-3xl" />
          <Image
            src="/complexidade-simples-logo.png"
            alt=""
            width={375}
            height={139}
            priority
            className="pointer-events-none absolute right-[7%] top-[12%] hidden h-auto w-[20rem] opacity-55 lg:block"
          />

          <div className="relative mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="border border-brand-gold/20 bg-[#FBFAF7]/92 p-7 shadow-[0_24px_80px_rgba(24,33,42,0.10)] backdrop-blur sm:p-10 lg:py-12">
              <Image
                src="/complexidade-simples-logo.png"
                alt="Complexidade Simples"
                width={375}
                height={139}
                priority
                className="h-12 w-auto object-contain"
              />
              <p className="mt-8 text-xs font-semibold uppercase text-brand-bronze">
                Sistemas que organizam. Soluções que libertam.
              </p>
              <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] text-brand-ink sm:text-6xl">
                O site que começa vendendo o sistema certo.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-9 text-brand-ink/66">
                Complexidade Simples é a matriz para transformar problemas
                operacionais em sistemas vendáveis: captação, triagem, painel,
                automação e plataforma.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#diagnostico"
                  className="rounded-md bg-brand-ink px-6 py-4 text-center text-sm font-semibold text-white shadow-large transition hover:bg-brand-ink/90"
                >
                  Fazer diagnóstico
                </a>
                <a
                  href="#casos"
                  className="rounded-md border border-brand-gold/50 bg-white/55 px-6 py-4 text-center text-sm font-semibold text-brand-ink transition hover:bg-white"
                >
                  Ver sistemas reais
                </a>
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-3 gap-px overflow-hidden border border-brand-gold/20 bg-brand-gold/20">
                {[
                  ["3", "casos vivos"],
                  ["4", "faixas claras"],
                  ["2 min", "diagnóstico"]
                ].map(([value, label]) => (
                  <div key={label} className="bg-white/70 px-4 py-4">
                    <p className="text-2xl font-semibold text-brand-ink">{value}</p>
                    <p className="mt-1 text-xs uppercase text-brand-ink/50">{label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 max-w-2xl border-t border-brand-gold/20 pt-6">
                <p className="text-xs font-semibold uppercase text-brand-ink/45">
                  Sistemas e marcas já em execução
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-5">
                  {TRUST_LOGOS.map((logo) => (
                    <div
                      key={logo.name}
                      className="flex h-14 items-center border border-brand-gold/20 bg-white px-4 shadow-soft"
                    >
                      <Image
                        src={logo.src}
                        alt={logo.name}
                        width={220}
                        height={100}
                        className={`${logo.className} object-contain mix-blend-multiply`}
                      />
                      {logo.name === "TrustVerify" ? (
                        <span className="ml-3 text-sm font-semibold text-brand-ink">
                          TrustVerify
                        </span>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative py-8 lg:py-16">
              <div className="absolute -left-8 top-24 h-32 w-32 border border-brand-gold/25 bg-white/10" />
              <div className="absolute -right-4 bottom-20 h-28 w-44 bg-brand-sage/20" />

              <div className="relative border border-white/15 bg-white/10 p-3 shadow-[0_30px_90px_rgba(0,0,0,0.26)] backdrop-blur">
                <div className="border border-brand-gold/18 bg-[#FBFAF7]">
                  <div className="grid border-b border-brand-gold/18 md:grid-cols-[1fr_16rem]">
                    <div className="p-6 sm:p-8">
                      <p className="text-xs font-semibold uppercase text-brand-bronze">
                        Diagnóstico operacional
                      </p>
                      <h2 className="mt-4 text-3xl font-semibold leading-tight text-brand-ink">
                        De demanda solta para proposta com contexto.
                      </h2>
                    </div>
                    <div className="border-t border-brand-gold/18 bg-brand-ink p-6 text-white md:border-l md:border-t-0">
                      <p className="text-xs uppercase text-brand-gold">Resultado provável</p>
                      <p className="mt-3 text-2xl font-semibold">Sistema operacional</p>
                      <p className="mt-2 text-sm text-slate-400">1.800€ a 5.000€</p>
                    </div>
                  </div>

                  <div className="grid gap-px bg-brand-gold/18 md:grid-cols-4">
                    {FLOW_NODES.map(([title, body]) => (
                      <div key={title} className="bg-white p-5">
                        <p className="text-sm font-semibold text-brand-ink">{title}</p>
                        <p className="mt-3 text-xs leading-6 text-brand-ink/58">{body}</p>
                      </div>
                    ))}
                  </div>

                  <div className="grid border-t border-brand-gold/18 lg:grid-cols-[1fr_18rem]">
                    <div className="p-6 sm:p-8">
                      <div className="space-y-4">
                        {[
                          ["Problema", "Pedidos e orçamentos espalhados"],
                          ["Origem", "WhatsApp, planilha e indicação"],
                          ["Entrega", "Painel, status e automações"]
                        ].map(([label, value]) => (
                          <div key={label} className="grid grid-cols-[7rem_1fr] border-b border-brand-gold/15 pb-4 last:border-0 last:pb-0">
                            <span className="text-xs uppercase text-brand-bronze">{label}</span>
                            <strong className="text-sm font-semibold text-brand-ink">{value}</strong>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="border-t border-brand-gold/18 bg-brand-paper/55 p-6 lg:border-l lg:border-t-0">
                      <p className="text-xs font-semibold uppercase text-brand-bronze">
                        Mensagem pronta
                      </p>
                      <p className="mt-4 text-sm leading-7 text-brand-ink/68">
                        “Fiz o diagnóstico. Meu resultado foi Sistema
                        operacional. Quero entender o próximo passo.”
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <DiagnosticEngine />

        <TrustVerifyProof />

        <section id="como-funciona" className="bg-white px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
              <div>
                <p className="text-xs font-semibold uppercase text-brand-bronze">
                  O que vendemos
                </p>
                <h2 className="mt-4 text-4xl font-semibold leading-tight text-brand-ink sm:text-5xl">
                  Não é página bonita. É arquitetura mínima para vender, operar e medir.
                </h2>
                <div className="mt-8 h-px w-28 bg-brand-gold" />
              </div>
              <div className="grid gap-px overflow-hidden border border-brand-gold/20 bg-brand-gold/20 sm:grid-cols-2">
                {SYSTEM_TYPES.map(([number, title, body]) => (
                  <article key={title} className="group bg-[#FBFAF7] p-7 transition hover:bg-brand-ink">
                    <p className="text-xs font-semibold text-brand-bronze">{number}</p>
                    <h3 className="mt-5 text-2xl font-semibold text-brand-ink transition group-hover:text-white">{title}</h3>
                    <p className="mt-4 text-sm leading-7 text-brand-ink/62 transition group-hover:text-slate-300">{body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="casos" className="relative overflow-hidden bg-brand-ink px-6 py-20 text-white sm:py-28">
          <div className="absolute left-0 top-0 h-full w-1/3 bg-white/[0.025]" />
          <div className="absolute right-20 top-20 h-64 w-64 rounded-full bg-brand-gold/10 blur-3xl" />
          <div className="mx-auto max-w-6xl">
            <div className="relative grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <p className="text-xs font-semibold uppercase text-brand-gold">
                  Prova antes de promessa
                </p>
                <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
                  A matriz nasce a partir de sistemas já construídos.
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-300">
                  Os casos mostram a escada completa: captar demanda, controlar
                  operação e criar plataforma. Essa é a diferença entre vender
                  site e vender estrutura.
                </p>
              </div>

              <div className="grid gap-6">
                {CASES.map((item) => (
                  <article key={item.name} className="overflow-hidden border border-white/10 bg-white/[0.035] shadow-[0_24px_70px_rgba(0,0,0,0.18)]">
                    <div>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="relative block aspect-[16/9] w-full overflow-hidden border-b border-white/10 bg-white"
                      >
                        <Image
                          src={item.preview}
                          alt={`Página inicial de ${item.name}`}
                          fill
                          sizes="(min-width: 1024px) 46rem, 100vw"
                          className="object-cover object-top transition duration-500 hover:scale-[1.02]"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-ink/35 via-transparent to-transparent" />
                      </a>
                      <div className="p-7">
                        <div className="flex flex-wrap items-center justify-between gap-5">
                          <div>
                            <p className="text-xs font-semibold uppercase text-brand-gold">
                              {item.category}
                            </p>
                            <h3 className="mt-2 text-3xl font-semibold">{item.name}</h3>
                          </div>
                          <div className="flex min-h-14 items-center bg-white px-4">
                            <Image
                              src={item.logo}
                              alt={`Logo ${item.name}`}
                              width={220}
                              height={100}
                              className={`object-contain mix-blend-multiply ${
                                item.name === "TrustVerify" ? "h-9 w-9" : "h-11 w-auto"
                              }`}
                            />
                            {item.name === "TrustVerify" ? (
                              <span className="ml-3 text-sm font-semibold text-brand-ink">
                                TrustVerify
                              </span>
                            ) : null}
                          </div>
                        </div>
                        <p className="mt-6 text-xl font-semibold leading-8 text-white">
                          {item.scope}
                        </p>
                        <p className="mt-2 text-sm leading-7 text-slate-400">
                          {item.signal}
                        </p>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {item.features.map((feature) => (
                            <span
                              key={feature}
                              className="border border-white/10 bg-white/[0.045] px-3 py-1.5 text-xs font-medium text-slate-300"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-6 inline-flex items-center gap-2 border border-brand-gold/40 bg-brand-gold/10 px-4 py-2.5 text-sm font-semibold text-brand-gold transition hover:bg-brand-gold hover:text-brand-ink"
                        >
                          Abrir {item.name} →
                        </a>
                        <div className="mt-6 grid grid-cols-3 gap-px bg-white/10">
                          {item.meta.map(([label, value]) => (
                            <div key={label} className="bg-brand-ink/80 p-3">
                              <p className="text-[11px] uppercase text-slate-500">{label}</p>
                              <p className="mt-1 text-xs font-semibold text-slate-200">{value}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="oferta" className="bg-brand-ivory px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase text-brand-bronze">
                  Método
                </p>
                <h2 className="mt-4 text-4xl font-semibold leading-tight text-brand-ink sm:text-5xl">
                  A primeira entrega precisa ser pequena o suficiente para lançar
                  e séria o suficiente para virar venda.
                </h2>
                <p className="mt-5 text-base leading-8 text-brand-ink/65">
                  A Complexidade Simples deve funcionar como laboratório comercial:
                  testa demanda, organiza processo e cria sistemas reutilizáveis
                  para novos nichos.
                </p>
              </div>

              <div className="border border-brand-gold/20 bg-white p-3 shadow-large">
                <div className="border border-brand-gold/15 p-6">
                <div className="divide-y divide-brand-gold/20">
                  {METHOD.map((item, index) => (
                    <div key={item} className="grid grid-cols-[3rem_1fr] gap-4 py-5 first:pt-0 last:pb-0">
                      <span className="text-sm font-semibold text-brand-bronze">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="text-base font-semibold text-brand-ink">{item}</p>
                    </div>
                  ))}
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#FBFAF7] px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <Image
              src="/complexidade-simples-logo.png"
              alt=""
              width={375}
              height={139}
              className="mx-auto h-14 w-auto object-contain mix-blend-multiply"
            />
            <h2 className="mt-8 text-3xl font-semibold leading-tight text-brand-ink sm:text-4xl">
              Comece pelo diagnóstico. A proposta vem depois do problema ficar claro.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-brand-ink/62">
              O visitante sai com direção, faixa e contexto. Você recebe uma
              conversa muito mais próxima de compra do que de curiosidade.
            </p>
            <a
              href="#diagnostico"
              className="mt-8 inline-flex rounded-md bg-brand-ink px-6 py-4 text-sm font-semibold text-white transition hover:bg-brand-ink/90"
            >
              Fazer diagnóstico agora
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
