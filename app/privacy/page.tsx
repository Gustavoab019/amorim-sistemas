import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="bg-slate-50 px-6 pb-20 pt-28 text-slate-700 sm:pt-32">
      <div className="mx-auto w-full max-w-3xl">
        <Link href="/" className="text-sm font-semibold text-brand-blue">
          ← Voltar para o site
        </Link>

        <h1 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl">
          Privacy
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          A AMORIM SISTEMAS respeita sua privacidade e utiliza dados apenas para
          contato, relacionamento e melhoria da experiência no site.
        </p>

        <div className="mt-10 space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-slate-900">
              Dados coletados
            </h2>
            <p className="mt-3 leading-relaxed">
              Podemos coletar informações fornecidas voluntariamente, como nome,
              e-mail ou telefone, em formulários de contato ou conversas diretas.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">
              Uso das informações
            </h2>
            <p className="mt-3 leading-relaxed">
              Os dados são utilizados exclusivamente para retorno de contato,
              atendimento e propostas comerciais, não sendo vendidos ou
              compartilhados com terceiros.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">
              Segurança
            </h2>
            <p className="mt-3 leading-relaxed">
              Mantemos boas práticas de segurança para proteger informações,
              porém nenhum sistema é totalmente isento de risco.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
