import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies",
  description:
    "Política de cookies da Complexidade Simples.",
  robots: {
    index: false,
    follow: true
  },
  alternates: {
    canonical: "/cookies"
  }
};

export default function CookiesPage() {
  return (
    <main className="bg-brand-ivory px-6 pb-20 pt-28 text-brand-ink/75 sm:pt-32">
      <div className="mx-auto w-full max-w-3xl">
        <Link href="/" className="text-sm font-semibold text-brand-bronze">
          ← Voltar para o site
        </Link>

        <h1 className="mt-6 text-3xl font-bold text-brand-ink sm:text-4xl">
          Cookies
        </h1>
        <p className="mt-4 text-base leading-relaxed text-brand-ink/65">
          Utilizamos cookies para melhorar a navegação, medir desempenho e
          entender como o site é utilizado.
        </p>

        <div className="mt-10 space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-brand-ink">
              O que são cookies
            </h2>
            <p className="mt-3 leading-relaxed">
              Cookies são pequenos arquivos armazenados no navegador para manter
              preferências, sessão e estatísticas de uso.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-ink">
              Tipos de cookies
            </h2>
            <p className="mt-3 leading-relaxed">
              Utilizamos apenas cookies essenciais para o funcionamento do site
              e, quando aplicável, cookies de performance para análises básicas.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-ink">
              Controle pelo usuário
            </h2>
            <p className="mt-3 leading-relaxed">
              Você pode bloquear ou remover cookies nas configurações do seu
              navegador. Isso pode afetar algumas funcionalidades.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
