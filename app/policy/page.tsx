import Link from "next/link";

export default function PolicyPage() {
  return (
    <main className="bg-slate-50 px-6 pb-20 pt-28 text-slate-700 sm:pt-32">
      <div className="mx-auto w-full max-w-3xl">
        <Link href="/" className="text-sm font-semibold text-brand-blue">
          ← Voltar para o site
        </Link>

        <h1 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl">
          Policy
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          Esta página descreve as diretrizes gerais de uso do site e o compromisso
          da AMORIM SISTEMAS com práticas transparentes e responsáveis.
        </p>

        <div className="mt-10 space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-slate-900">
              Condições de uso
            </h2>
            <p className="mt-3 leading-relaxed">
              O conteúdo deste site é informativo e pode ser atualizado sem aviso
              prévio. Ao navegar ou utilizar qualquer material, você concorda com
              estas condições.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">
              Propriedade intelectual
            </h2>
            <p className="mt-3 leading-relaxed">
              Marcas, textos e materiais apresentados são de propriedade da
              AMORIM SISTEMAS, salvo indicação contrária. Não é permitido copiar
              ou redistribuir sem autorização.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">
              Responsabilidade
            </h2>
            <p className="mt-3 leading-relaxed">
              Trabalhamos para manter as informações precisas, porém não
              garantimos que todo o conteúdo esteja sempre atualizado ou livre de
              erros.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
