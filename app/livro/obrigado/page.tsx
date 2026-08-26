import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

/**
 * O que se vê logo a seguir a pagar.
 *
 * O ficheiro vai por email, e o email pode demorar um minuto — que é uma
 * eternidade para quem acabou de gastar dinheiro. Esta página existe para
 * essa eternidade: diz o que vai acontecer, quanto tempo demora, e o que
 * fazer se não acontecer.
 *
 * Não confirma o pagamento por si própria. Quem confirma é o webhook da
 * Stripe; dizer "pagamento confirmado" a partir de um parâmetro de URL seria
 * afirmar uma coisa que esta página não tem como saber.
 */

export const metadata: Metadata = {
  title: "Obrigado — Também Pode Ser Assim",
  robots: { index: false, follow: false }
};

export default function ObrigadoPage() {
  return (
    <>
      <Header />

      <main className="bg-[#FBFAF7] px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-semibold uppercase text-brand-bronze">
            Compra concluída
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-brand-ink sm:text-5xl">
            Obrigado. O livro vai a caminho do teu email.
          </h1>

          <div className="mt-10 space-y-5 text-base leading-8 text-brand-ink/70">
            <p>
              Assim que a Stripe confirmar o pagamento, enviamos o link de
              descarga para o email que usaste. Costuma chegar em menos de um
              minuto.
            </p>
            <p>
              O link é válido durante <strong className="text-brand-ink">30 dias</strong> e
              permite <strong className="text-brand-ink">5 descargas</strong> — chega para o
              telemóvel, o computador e a vez em que se apaga sem querer.
              Guarda o ficheiro depois de o abrires.
            </p>
          </div>

          <div className="mt-10 border border-brand-gold/25 bg-white p-6">
            <p className="text-sm font-semibold text-brand-ink">
              Se não aparecer nada em dez minutos
            </p>
            <p className="mt-2 text-sm leading-7 text-brand-ink/62">
              Vê primeiro no spam — é quase sempre isso. Se mesmo assim não
              estiver lá, escreve para{" "}
              <a
                href="mailto:contato@complexidadesimples.com?subject=Livro%20nao%20chegou"
                className="font-medium text-brand-bronze underline underline-offset-4"
              >
                contato@complexidadesimples.com
              </a>{" "}
              e resolvemos. Do outro lado está uma pessoa.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/livro#capitulo"
              className="rounded-md border border-brand-gold/50 px-6 py-3 text-sm font-semibold text-brand-ink transition hover:bg-white"
            >
              Reler o capítulo 8
            </Link>
            <Link
              href="/"
              className="rounded-md px-6 py-3 text-sm font-semibold text-brand-ink/60 transition hover:text-brand-ink"
            >
              Voltar ao início
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
