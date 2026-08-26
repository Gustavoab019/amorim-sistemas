import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de privacidade da Complexidade Simples.",
  robots: {
    index: false,
    follow: true
  },
  alternates: {
    canonical: "/privacy"
  }
};

export default function PrivacyPage() {
  return (
    <main className="bg-brand-ivory px-6 pb-20 pt-28 text-brand-ink/75 sm:pt-32">
      <div className="mx-auto w-full max-w-3xl">
        <Link href="/" className="text-sm font-semibold text-brand-bronze">
          ← Voltar para o site
        </Link>

        <h1 className="mt-6 text-3xl font-bold text-brand-ink sm:text-4xl">
          Política de Privacidade
        </h1>
        <p className="mt-4 text-base leading-relaxed text-brand-ink/65">
          A Complexidade Simples respeita sua privacidade e utiliza dados apenas para
          contato, relacionamento e melhoria da experiência no site.
        </p>

        <div className="mt-10 space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-brand-ink">
              Dados coletados
            </h2>
            <p className="mt-3 leading-relaxed">
              Podemos coletar informações fornecidas voluntariamente, como nome,
              e-mail ou telefone, em formulários de contato ou conversas diretas.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-ink">
              Uso das informações
            </h2>
            <p className="mt-3 leading-relaxed">
              Os dados são utilizados exclusivamente para retorno de contato,
              atendimento e propostas comerciais, não sendo vendidos ou
              compartilhados com terceiros.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-ink">
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
