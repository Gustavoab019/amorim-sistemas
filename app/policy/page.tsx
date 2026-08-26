import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Termos de uso da Complexidade Simples.",
  robots: {
    index: false,
    follow: true
  },
  alternates: {
    canonical: "/policy"
  }
};

export default function PolicyPage() {
  return (
    <main className="bg-brand-ivory px-6 pb-20 pt-28 text-brand-ink/75 sm:pt-32">
      <div className="mx-auto w-full max-w-3xl">
        <Link href="/" className="text-sm font-semibold text-brand-bronze">
          ← Voltar para o site
        </Link>

        <h1 className="mt-6 text-3xl font-bold text-brand-ink sm:text-4xl">
          Termos de Uso
        </h1>
        <p className="mt-4 text-base leading-relaxed text-brand-ink/65">
          Esta página descreve as diretrizes gerais de uso do site e o compromisso
          da Complexidade Simples com práticas transparentes e responsáveis.
        </p>

        <div className="mt-10 space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-brand-ink">
              Condições de uso
            </h2>
            <p className="mt-3 leading-relaxed">
              O conteúdo deste site é informativo e pode ser atualizado sem aviso
              prévio. Ao navegar ou utilizar qualquer material, você concorda com
              estas condições.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-ink">
              Propriedade intelectual
            </h2>
            <p className="mt-3 leading-relaxed">
              Marcas, textos e materiais apresentados são de propriedade da
              Complexidade Simples, salvo indicação contrária. Não é permitido copiar
              ou redistribuir sem autorização.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-ink">
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
