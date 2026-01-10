import Header from "./components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero - Manifesto */}
      <section className="relative bg-gradient-to-b from-white via-slate-50/30 to-white px-6 pt-32 pb-24 sm:pt-40 sm:pb-32 lg:pt-48 lg:pb-40">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-10 text-4xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl xl:text-7xl">
            Eu trabalho com sistemas porque acredito em{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-brand-blue">clareza</span>
              <span className="absolute bottom-2 left-0 h-3 w-full bg-brand-blue/10" />
            </span>
            .
          </h1>

          <div className="space-y-6 text-lg leading-relaxed text-slate-700 sm:text-xl">
            <p className="animate-fade-in">
              Ao longo do tempo, estive dentro de operações reais, onde o problema nunca foi falta de esforço — foi{" "}
              <strong className="font-semibold text-slate-900">falta de estrutura</strong>.
            </p>

            <p className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Informação espalhada, decisões atrasadas, processos que dependem de pessoas em vez de método.
            </p>

            <p className="animate-fade-in text-xl font-semibold text-slate-900 sm:text-2xl" style={{ animationDelay: '0.2s' }}>
              A Amorim Sistemas nasce para organizar isso.
            </p>

            <p className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Para transformar complexidade em algo funcional, previsível e escalável.
            </p>

            <p className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Não crio sistemas para parecerem modernos.<br />
              <strong className="font-semibold text-slate-900">Crio sistemas para funcionarem no mundo real.</strong>
            </p>

            <p className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
              Cada projeto começa entendendo o processo, não o software.<br />
              A tecnologia vem depois — como ferramenta, não como fim.
            </p>

            <p className="animate-fade-in pt-4 text-xl font-semibold text-slate-900 sm:text-2xl" style={{ animationDelay: '0.6s' }}>
              Meu trabalho é trazer ordem, clareza e controle para quem precisa tomar decisões melhores todos os dias.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-4 animate-slide-up" style={{ animationDelay: '0.7s' }}>
            <Link
              href="#conversa"
              className="group inline-flex items-center gap-2 rounded-lg bg-brand-blue px-8 py-4 text-base font-semibold text-white shadow-soft transition-all duration-200 hover:bg-brand-blue/90 hover:shadow-medium hover:-translate-y-0.5"
            >
              Agendar conversa
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link
              href="#como-funciona"
              className="group text-base font-medium text-slate-700 underline decoration-slate-300 decoration-2 underline-offset-4 transition-all duration-200 hover:text-slate-900 hover:decoration-brand-blue"
            >
              Ver como funciona
            </Link>
          </div>
        </div>

        {/* Background gradient e elementos visuais */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-brand-blue/5 blur-3xl" />
          <div className="absolute -bottom-40 left-0 h-[400px] w-[400px] rounded-full bg-slate-100 blur-3xl" />

          {/* Grid pattern sutil */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

          {/* Elementos decorativos */}
          <div className="absolute right-[10%] top-[20%] h-2 w-2 rounded-full bg-brand-blue/20" />
          <div className="absolute right-[15%] top-[40%] h-1.5 w-1.5 rounded-full bg-brand-blue/30" />
          <div className="absolute left-[12%] top-[60%] h-2 w-2 rounded-full bg-slate-300/40" />
          <div className="absolute right-[25%] bottom-[30%] h-1 w-1 rounded-full bg-brand-blue/20" />
        </div>
      </section>

      {/* O que faço de diferente */}
      <section className="border-t border-slate-200/60 bg-white px-6 py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
              O que faço de diferente
            </h2>
            <p className="text-lg text-slate-600 sm:text-xl">
              A maioria das empresas vende funcionalidades. Eu resolvo problemas operacionais.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
            {/* Diferencial 1 */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200/60 bg-gradient-to-br from-white via-slate-50/30 to-white p-8 shadow-soft transition-all duration-300 hover:shadow-large hover:-translate-y-1">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-blue/80 shadow-lg">
                <svg className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 5H2v7l6.29 6.29c.94.94 2.48.94 3.42 0l3.58-3.58c.94-.94.94-2.48 0-3.42L9 5Z" />
                  <path d="M6 9.01V9" />
                  <path d="m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-slate-900 sm:text-2xl">
                Processo antes de tecnologia
              </h3>
              <div className="space-y-4 text-base leading-relaxed text-slate-700">
                <p>
                  Antes de escrever uma linha de código, mapeio como sua operação funciona hoje. Onde está o gargalo. Onde a informação se perde.
                </p>
                <p className="text-sm font-medium text-brand-blue">
                  A tecnologia é consequência. O que importa é resolver o problema na raiz.
                </p>
              </div>
              <div className="absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-brand-blue/5 blur-2xl transition-all duration-300 group-hover:bg-brand-blue/10" />
            </div>

            {/* Diferencial 2 */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200/60 bg-gradient-to-br from-white via-slate-50/30 to-white p-8 shadow-soft transition-all duration-300 hover:shadow-large hover:-translate-y-1">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg">
                <svg className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                  <path d="M20 3v4" />
                  <path d="M22 5h-4" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-slate-900 sm:text-2xl">
                Clareza acima de complexidade
              </h3>
              <div className="space-y-4 text-base leading-relaxed text-slate-700">
                <p>
                  Um sistema bom não precisa de manual de 50 páginas. Se sua equipe não entende em 10 minutos, o sistema falhou — não a equipe.
                </p>
                <p className="text-sm font-medium text-emerald-600">
                  Construo interfaces que fazem sentido para quem trabalha, não para quem programa.
                </p>
              </div>
              <div className="absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-emerald-500/5 blur-2xl transition-all duration-300 group-hover:bg-emerald-500/10" />
            </div>

            {/* Diferencial 3 */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200/60 bg-gradient-to-br from-white via-slate-50/30 to-white p-8 shadow-soft transition-all duration-300 hover:shadow-large hover:-translate-y-1">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-violet-600 shadow-lg">
                <svg className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v18h18" />
                  <path d="m19 9-5 5-4-4-3 3" />
                  <circle cx="19" cy="9" r="2" fill="currentColor" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-slate-900 sm:text-2xl">
                Dados que geram decisão
              </h3>
              <div className="space-y-4 text-base leading-relaxed text-slate-700">
                <p>
                  Informação sem contexto é ruído. Dashboards cheios de gráficos que ninguém olha são desperdício.
                </p>
                <p className="text-sm font-medium text-violet-600">
                  Mostro exatamente o que você precisa saber para decidir agora. Nada mais, nada menos.
                </p>
              </div>
              <div className="absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-violet-500/5 blur-2xl transition-all duration-300 group-hover:bg-violet-500/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="border-t border-slate-200/60 bg-slate-50 px-6 py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
              Como funciona na prática
            </h2>
            <p className="text-lg text-slate-600 sm:text-xl">
              Um processo estruturado para entender, desenhar e construir sistemas que resolvem.
            </p>
          </div>

          <div className="space-y-8">
            {/* Fase 1 */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200/60 bg-gradient-to-br from-white to-slate-50/50 p-8 shadow-soft transition-all duration-300 hover:shadow-medium">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="relative flex h-16 w-16 items-center justify-center">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-blue/80 shadow-lg" />
                    <svg className="relative h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.35-4.35" />
                      <path d="M11 8v6" />
                      <path d="M8 11h6" />
                    </svg>
                    <div className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs font-bold text-brand-blue shadow-md">1</div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-blue/70">
                    Fase 1
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900 sm:text-2xl">
                    Imersão no problema real
                  </h3>
                  <p className="mb-4 text-base leading-relaxed text-slate-700 sm:text-lg">
                    Não começo perguntando "o que você quer no sistema". Começo perguntando "como funciona hoje".
                  </p>
                  <ul className="space-y-2 text-base text-slate-700">
                    <li className="flex items-start gap-3">
                      <svg className="mt-1 h-5 w-5 flex-shrink-0 text-brand-blue" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Mapeamento do fluxo de informação</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="mt-1 h-5 w-5 flex-shrink-0 text-brand-blue" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Identificação de gargalos operacionais</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="mt-1 h-5 w-5 flex-shrink-0 text-brand-blue" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Entendimento de quem usa, quando e por quê</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-brand-blue/5 blur-3xl" />
            </div>

            {/* Fase 2 */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200/60 bg-gradient-to-br from-white to-slate-50/50 p-8 shadow-soft transition-all duration-300 hover:shadow-medium">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="relative flex h-16 w-16 items-center justify-center">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg" />
                    <svg className="relative h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      <path d="M7.5 4.21l4.5 2.6 4.5-2.6" />
                      <path d="M7.5 19.79V14.6L3 12" />
                      <path d="M21 12l-4.5 2.6v5.19" />
                      <path d="M3.27 6.96L12 12.01l8.73-5.05" />
                      <path d="M12 22.08V12" />
                    </svg>
                    <div className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs font-bold text-emerald-600 shadow-md">2</div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-emerald-600/70">
                    Fase 2
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900 sm:text-2xl">
                    Desenho da solução
                  </h3>
                  <p className="mb-4 text-base leading-relaxed text-slate-700 sm:text-lg">
                    Traduzo o processo mapeado em telas, fluxos e lógica. Antes de programar, você vê exatamente como vai funcionar.
                  </p>
                  <ul className="space-y-2 text-base text-slate-700">
                    <li className="flex items-start gap-3">
                      <svg className="mt-1 h-5 w-5 flex-shrink-0 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Protótipo navegável das interfaces</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="mt-1 h-5 w-5 flex-shrink-0 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Validação com quem vai usar diariamente</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="mt-1 h-5 w-5 flex-shrink-0 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Ajustes antes de começar o desenvolvimento</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-emerald-500/5 blur-3xl" />
            </div>

            {/* Fase 3 */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200/60 bg-gradient-to-br from-white to-slate-50/50 p-8 shadow-soft transition-all duration-300 hover:shadow-medium">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="relative flex h-16 w-16 items-center justify-center">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500 to-violet-600 shadow-lg" />
                    <svg className="relative h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    <div className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs font-bold text-violet-600 shadow-md">3</div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-violet-600/70">
                    Fase 3
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900 sm:text-2xl">
                    Construção e entrega iterativa
                  </h3>
                  <p className="mb-4 text-base leading-relaxed text-slate-700 sm:text-lg">
                    Desenvolvimento em ciclos curtos. Você vê progresso real a cada 2 semanas, testa, ajusta. Sem surpresas no final.
                  </p>
                  <ul className="space-y-2 text-base text-slate-700">
                    <li className="flex items-start gap-3">
                      <svg className="mt-1 h-5 w-5 flex-shrink-0 text-violet-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Entregas quinzenais funcionais</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="mt-1 h-5 w-5 flex-shrink-0 text-violet-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Feedback contínuo durante o processo</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="mt-1 h-5 w-5 flex-shrink-0 text-violet-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Ajustes baseados no uso real</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-violet-500/5 blur-3xl" />
            </div>

            {/* Fase 4 */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200/60 bg-gradient-to-br from-white to-slate-50/50 p-8 shadow-soft transition-all duration-300 hover:shadow-medium">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="relative flex h-16 w-16 items-center justify-center">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 shadow-lg" />
                    <svg className="relative h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                      <path d="M14 2v6h6" />
                      <path d="M9 15h6" />
                      <path d="M9 18h6" />
                    </svg>
                    <div className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs font-bold text-amber-600 shadow-md">4</div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-amber-600/70">
                    Fase 4
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900 sm:text-2xl">
                    Acompanhamento pós-entrega
                  </h3>
                  <p className="mb-4 text-base leading-relaxed text-slate-700 sm:text-lg">
                    Um sistema entra em produção e revela padrões que não aparecem no papel. Fico disponível para ajustar conforme a realidade se mostra.
                  </p>
                  <ul className="space-y-2 text-base text-slate-700">
                    <li className="flex items-start gap-3">
                      <svg className="mt-1 h-5 w-5 flex-shrink-0 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Suporte técnico direto comigo</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="mt-1 h-5 w-5 flex-shrink-0 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Evolução baseada em dados de uso</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="mt-1 h-5 w-5 flex-shrink-0 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Sem intermediários entre você e quem construiu</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-amber-500/5 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Casos reais */}
      <section id="casos" className="border-t border-slate-200/60 bg-white px-6 py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
              Projetos que resolveram problemas reais
            </h2>
            <p className="text-lg text-slate-600 sm:text-xl">
              Contexto importa. Aqui está o que estava acontecendo, o que foi feito e o que mudou.
            </p>
          </div>

          <div className="space-y-8">
            {/* Caso 1 */}
            <article className="group relative overflow-hidden rounded-2xl border border-slate-200/60 bg-gradient-to-br from-white to-emerald-50/20 p-8 shadow-soft transition-all duration-300 hover:shadow-large hover:-translate-y-1">
              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700 ring-1 ring-inset ring-emerald-200/50">
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    </svg>
                    E-commerce de Moda
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                    Sistema de recomendação que entende contexto
                  </h3>
                </div>
                <div className="relative flex-shrink-0">
                  <div className="relative rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 p-6 shadow-lg">
                    <div className="text-center">
                      <div className="text-5xl font-black text-white sm:text-6xl">+127%</div>
                      <div className="mt-1 text-sm font-semibold text-emerald-100">em vendas</div>
                    </div>
                    <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md">
                      <svg className="h-4 w-4 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14M5 12l7-7 7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-base leading-relaxed text-slate-700">
                <p>
                  <strong className="font-semibold text-slate-900">O problema:</strong> Loja com 15 mil produtos. Cliente entrava, via 3-4 itens na home, não encontrava nada relevante e saía. Taxa de conversão travada em 0.8%.
                </p>
                <p>
                  <strong className="font-semibold text-slate-900">O que foi feito:</strong> Sistema que analisa comportamento (o que a pessoa clica, quanto tempo olha, o que adiciona e remove do carrinho) e cruza com dados históricos de compras similares. Não mostra "produtos populares" — mostra o que faz sentido para aquele usuário, naquele momento.
                </p>
                <p>
                  <strong className="font-semibold text-slate-900">Resultado:</strong> Em 90 dias, conversão foi para 1.8%. Vendas aumentaram 127%. Tempo médio no site dobrou.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200/60">
                <div className="mb-3 text-sm font-medium text-slate-600">Tecnologias</div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-md bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 ring-1 ring-inset ring-slate-200/50">Next.js</span>
                  <span className="rounded-md bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 ring-1 ring-inset ring-slate-200/50">Python</span>
                  <span className="rounded-md bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 ring-1 ring-inset ring-slate-200/50">Machine Learning</span>
                  <span className="rounded-md bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 ring-1 ring-inset ring-slate-200/50">PostgreSQL</span>
                </div>
              </div>
            </article>

            {/* Caso 2 */}
            <article className="group relative overflow-hidden rounded-2xl border border-slate-200/60 bg-gradient-to-br from-white to-blue-50/20 p-8 shadow-soft transition-all duration-300 hover:shadow-large hover:-translate-y-1">
              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700 ring-1 ring-inset ring-blue-200/50">
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    Empresa de Serviços B2B
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                    Automação de orçamentos e propostas
                  </h3>
                </div>
                <div className="relative flex-shrink-0">
                  <div className="relative rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 p-6 shadow-lg">
                    <div className="text-center">
                      <div className="text-5xl font-black text-white sm:text-6xl">64h</div>
                      <div className="mt-1 text-sm font-semibold text-blue-100">economizadas/semana</div>
                    </div>
                    <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md">
                      <svg className="h-4 w-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-base leading-relaxed text-slate-700">
                <p>
                  <strong className="font-semibold text-slate-900">O problema:</strong> Equipe de 8 pessoas gastava 3-4 horas por dia consolidando dados de diferentes planilhas para criar orçamentos. Informações desatualizadas. Erros em valores. Propostas atrasando porque dependiam de conferência manual.
                </p>
                <p>
                  <strong className="font-semibold text-slate-900">O que foi feito:</strong> Sistema centralizado onde dados de clientes, serviços, custos e histórico ficam em um lugar só. Orçamento gerado automaticamente com base em templates e regras de negócio. Aprovações por fluxo digital.
                </p>
                <p>
                  <strong className="font-semibold text-slate-900">Resultado:</strong> Tempo de criação de orçamento caiu de 4 horas para 15 minutos. Equipe recuperou 64 horas por semana. Taxa de erro zerou.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200/60">
                <div className="mb-3 text-sm font-medium text-slate-600">Tecnologias</div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-md bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 ring-1 ring-inset ring-slate-200/50">React</span>
                  <span className="rounded-md bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 ring-1 ring-inset ring-slate-200/50">Node.js</span>
                  <span className="rounded-md bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 ring-1 ring-inset ring-slate-200/50">MongoDB</span>
                  <span className="rounded-md bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 ring-1 ring-inset ring-slate-200/50">PDF Generation</span>
                </div>
              </div>
            </article>

            {/* Caso 3 */}
            <article className="group relative overflow-hidden rounded-2xl border border-slate-200/60 bg-gradient-to-br from-white to-purple-50/20 p-8 shadow-soft transition-all duration-300 hover:shadow-large hover:-translate-y-1">
              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-lg bg-purple-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-700 ring-1 ring-inset ring-purple-200/50">
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                      <path d="m3.3 7 8.7 5 8.7-5" />
                      <path d="M12 22V12" />
                    </svg>
                    Indústria Logística
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                    Dashboard preditivo de estoque
                  </h3>
                </div>
                <div className="relative flex-shrink-0">
                  <div className="relative rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 p-6 shadow-lg">
                    <div className="text-center">
                      <div className="text-4xl font-black text-white sm:text-5xl">R$ 2.3M</div>
                      <div className="mt-1 text-sm font-semibold text-purple-100">economizados</div>
                    </div>
                    <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md">
                      <svg className="h-4 w-4 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2v20M2 12h20" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-base leading-relaxed text-slate-700">
                <p>
                  <strong className="font-semibold text-slate-900">O problema:</strong> Estoque parado de R$ 4.5M. Decisões de compra baseadas em "achismos" e média histórica que não considerava sazonalidade, tendências ou mudanças de mercado.
                </p>
                <p>
                  <strong className="font-semibold text-slate-900">O que foi feito:</strong> Sistema que analisa histórico de vendas, identifica padrões sazonais, cruza com dados de mercado e prevê demanda com 30 dias de antecedência. Dashboard mostra exatamente o que comprar, quando e quanto.
                </p>
                <p>
                  <strong className="font-semibold text-slate-900">Resultado:</strong> Em 4 meses, estoque parado caiu para R$ 2.2M. Economia direta de R$ 2.3M. Ruptura de estoque (falta de produto) diminuiu 78%.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200/60">
                <div className="mb-3 text-sm font-medium text-slate-600">Tecnologias</div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-md bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 ring-1 ring-inset ring-slate-200/50">Python</span>
                  <span className="rounded-md bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 ring-1 ring-inset ring-slate-200/50">Time Series Analysis</span>
                  <span className="rounded-md bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 ring-1 ring-inset ring-slate-200/50">React Dashboard</span>
                  <span className="rounded-md bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 ring-1 ring-inset ring-slate-200/50">PostgreSQL</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Para quem trabalho */}
      <section id="para-quem" className="border-t border-slate-200/60 bg-slate-50 px-6 py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
              Para quem este trabalho faz sentido
            </h2>
          </div>

          <div className="space-y-6">
            <div className="group relative overflow-hidden rounded-xl border border-slate-200/60 bg-white p-6 shadow-soft transition-all duration-300 hover:shadow-medium hover:border-brand-blue/50">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-blue/10">
                  <svg className="h-5 w-5 text-brand-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <p className="text-lg leading-relaxed text-slate-700">
                  Você tem um processo que funciona, mas está travado porque depende de pessoas fazendo tarefas manuais repetitivas.
                </p>
              </div>
              <div className="absolute -right-4 -bottom-4 h-16 w-16 rounded-full bg-brand-blue/5 blur-2xl" />
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-slate-200/60 bg-white p-6 shadow-soft transition-all duration-300 hover:shadow-medium hover:border-brand-blue/50">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-blue/10">
                  <svg className="h-5 w-5 text-brand-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <p className="text-lg leading-relaxed text-slate-700">
                  Você tem informação espalhada em planilhas, e-mails, mensagens — e precisa de horas para consolidar tudo antes de decidir algo.
                </p>
              </div>
              <div className="absolute -right-4 -bottom-4 h-16 w-16 rounded-full bg-brand-blue/5 blur-2xl" />
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-slate-200/60 bg-white p-6 shadow-soft transition-all duration-300 hover:shadow-medium hover:border-brand-blue/50">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-blue/10">
                  <svg className="h-5 w-5 text-brand-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <p className="text-lg leading-relaxed text-slate-700">
                  Você já tentou sistemas "prontos" mas eles não se encaixam no seu jeito de trabalhar, e sua equipe acaba contornando o sistema.
                </p>
              </div>
              <div className="absolute -right-4 -bottom-4 h-16 w-16 rounded-full bg-brand-blue/5 blur-2xl" />
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-slate-200/60 bg-white p-6 shadow-soft transition-all duration-300 hover:shadow-medium hover:border-brand-blue/50">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-blue/10">
                  <svg className="h-5 w-5 text-brand-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <p className="text-lg leading-relaxed text-slate-700">
                  Você valoriza clareza, quer entender como as coisas funcionam, e prefere trabalhar direto com quem vai construir.
                </p>
              </div>
              <div className="absolute -right-4 -bottom-4 h-16 w-16 rounded-full bg-brand-blue/5 blur-2xl" />
            </div>
          </div>

          <div className="mt-16 rounded-2xl border border-brand-blue/20 bg-white p-8 shadow-soft lg:p-10">
            <h3 className="mb-4 text-xl font-semibold text-slate-900 sm:text-2xl">
              Se isso ressoa com você
            </h3>
            <p className="mb-6 text-base leading-relaxed text-slate-700 sm:text-lg">
              Vamos conversar. Sem compromisso, sem roteiro de vendas. Uma conversa real sobre o que está acontecendo na sua operação e se faz sentido trabalharmos juntos.
            </p>
            <Link
              href="#conversa"
              className="group inline-flex items-center gap-2 rounded-lg bg-brand-blue px-8 py-4 text-base font-semibold text-white shadow-soft transition-all duration-200 hover:bg-brand-blue/90 hover:shadow-medium hover:-translate-y-0.5"
            >
              Agendar conversa
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer / Contato */}
      <section id="conversa" className="border-t border-slate-800/10 bg-brand-dark px-6 py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Vamos conversar
          </h2>

          <div className="mb-12 space-y-4 text-lg leading-relaxed text-slate-300 sm:text-xl">
            <p>
              Agende uma conversa de 30-40 minutos. Sem pitch, sem venda forçada.
            </p>
            <p>
              Vamos falar sobre o que está funcionando e o que está travando na sua operação. Se fizer sentido, eu explico como posso ajudar. Se não fizer, eu digo.
            </p>
          </div>

          <div className="space-y-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href="mailto:contato@amorimsistemas.com?subject=Conversa%20sobre%20sistemas"
                className="group rounded-2xl border border-slate-700/60 bg-slate-900/30 p-5 transition hover:border-brand-blue/60 hover:bg-slate-900/50"
              >
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email direto
                </div>
                <div className="mt-2 text-lg font-semibold text-white">contato@amorimsistemas.com</div>
                <div className="mt-1 text-xs text-slate-400">Clique para enviar agora</div>
              </a>

              <a
                href="https://wa.me/351913542470?text=Ola%20Gustavo%2C%20quero%20falar%20sobre%20um%20sistema."
                className="group rounded-2xl border border-slate-700/60 bg-slate-900/30 p-5 transition hover:border-emerald-400/60 hover:bg-slate-900/50"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.86.31 1.7.57 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.14a2 2 0 0 1 2.11-.45c.8.26 1.64.45 2.5.57A2 2 0 0 1 22 16.92z" />
                  </svg>
                  WhatsApp
                </div>
                <div className="mt-2 text-lg font-semibold text-white">+351 913 542 470</div>
                <div className="mt-1 text-xs text-slate-400">Mensagem rápida e objetiva</div>
              </a>

              <a
                href="tel:+351913542470"
                className="group rounded-2xl border border-slate-700/60 bg-slate-900/30 p-5 transition hover:border-slate-300/50 hover:bg-slate-900/50"
              >
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.86.31 1.7.57 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.14a2 2 0 0 1 2.11-.45c.8.26 1.64.45 2.5.57A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Telefone
                </div>
                <div className="mt-2 text-lg font-semibold text-white">+351 913 542 470</div>
                <div className="mt-1 text-xs text-slate-400">Ligação direta</div>
              </a>

              <Link
                href="/contato"
                className="group rounded-2xl border border-brand-blue/40 bg-brand-blue/10 p-5 transition hover:border-brand-blue/70 hover:bg-brand-blue/20"
              >
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                  Precisa de mais detalhes?
                </div>
                <div className="mt-2 text-lg font-semibold text-white">Ver página de contato</div>
                <div className="mt-1 text-xs text-slate-400">Todas as formas de falar comigo</div>
              </Link>
            </div>

            <div className="pt-8 border-t border-slate-700/50">
              <p className="text-sm text-slate-400">Gustavo Amorim</p>
              <p className="mt-1 text-sm text-slate-500">Amorim Sistemas — Sistemas que funcionam no mundo real</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-700/60 bg-brand-dark px-6 py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 text-sm text-slate-400 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              AMORIM SISTEMAS
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <a href="/contato" className="transition hover:text-white">
              Contato
            </a>
            <a href="/policy" className="transition hover:text-white">
              Policy
            </a>
            <a href="/privacy" className="transition hover:text-white">
              Privacy
            </a>
            <a href="/cookies" className="transition hover:text-white">
              Cookies
            </a>
            <a href="mailto:contato@amorimsistemas.com" className="transition hover:text-white">
              contato@amorimsistemas.com
            </a>
            <a href="tel:+351913542470" className="transition hover:text-white">
              +351 913 542 470
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
