import {
  companyBadgeUrl,
  companyProfileUrl,
  fetchNetworkStats
} from "../lib/trustverify";

/**
 * Prova verificável — a secção que substitui "confia em nós".
 *
 * A regra desta secção é uma só: nada aqui é afirmado sem uma fonte que o
 * visitante possa abrir. O selo é um endpoint vivo, o perfil é público, os
 * projectos abrem em sites que existem.
 *
 * Os contadores só aparecem quando são maiores que zero. Não é para esconder
 * números pequenos — é que "0 serviços concluídos" numa página que vende
 * entrega é pior do que não dizer nada. Quando o primeiro trabalho fechar,
 * ligam-se sozinhos, sem ninguém mexer no código.
 */

const PROJECTS = [
  {
    name: "Habitta",
    href: "https://www.habitta.pt",
    what: "Configurador, pagamentos e painel de encomendas"
  },
  {
    name: "TrustVerify",
    href: "https://www.trustverify.pt",
    what: "Marketplace com verificação, agenda e repasse"
  },
  {
    name: "Dra. Lays Castilho",
    href: "https://www.dralayscastilho.com.br",
    what: "Captação local, prova social e WhatsApp"
  }
];

export async function TrustVerifyProof() {
  const stats = await fetchNetworkStats();
  const badge = companyBadgeUrl();

  const counters: Array<[string, string]> = [];
  if (stats) {
    if (stats.jobsCompleted > 0)
      counters.push([String(stats.jobsCompleted), "serviços concluídos na rede"]);
    if (stats.prosCount > 0)
      counters.push([String(stats.prosCount), "profissionais verificados"]);
    if (stats.citiesCount > 0)
      counters.push([String(stats.citiesCount), "cidades cobertas"]);
  }

  return (
    <section id="prova" className="bg-white px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-semibold uppercase text-brand-bronze">
              Prova verificável
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-brand-ink sm:text-5xl">
              A nossa própria operação corre no sistema que te vendemos.
            </h2>
            <p className="mt-5 text-base leading-8 text-brand-ink/65">
              Os teus pedidos entram, são geridos e pagos dentro do TrustVerify —
              a mesma plataforma que construímos. Não é um argumento: é o
              endereço onde podes ir confirmar.
            </p>
            <div className="mt-8 h-px w-28 bg-brand-gold" />
          </div>

          <div className="space-y-6">
            {badge ? (
              <div className="border border-brand-gold/20 bg-[#FBFAF7] p-7 shadow-soft">
                <a
                  href={companyProfileUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block"
                >
                  {/* Endpoint vivo, não ficheiro local: se a empresa deixar de
                      estar activa devolve 404 e o selo desaparece daqui. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={badge}
                    alt="Empresa Verificada — TrustVerify"
                    height={56}
                    className="h-14 w-auto"
                  />
                </a>
                <p className="mt-5 text-sm leading-7 text-brand-ink/62">
                  Este selo é servido pelo TrustVerify em tempo real. Se a
                  verificação caísse, ele desaparecia desta página sozinho —
                  não é uma imagem guardada aqui.
                </p>
                <a
                  href={companyProfileUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex text-sm font-semibold text-brand-bronze underline underline-offset-4"
                >
                  Ver o perfil público verificado →
                </a>
              </div>
            ) : null}

            <div className="border border-brand-gold/20 bg-[#FBFAF7] p-7 shadow-soft">
              <p className="text-xs font-semibold uppercase text-brand-bronze">
                Sistemas em produção, agora
              </p>
              <div className="mt-5 divide-y divide-brand-gold/15">
                {PROJECTS.map((project) => (
                  <a
                    key={project.name}
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group grid grid-cols-[1fr_auto] items-center gap-4 py-4 first:pt-0 last:pb-0"
                  >
                    <span>
                      <span className="block text-base font-semibold text-brand-ink">
                        {project.name}
                      </span>
                      <span className="mt-1 block text-sm leading-7 text-brand-ink/58">
                        {project.what}
                      </span>
                    </span>
                    <span className="text-sm font-semibold text-brand-bronze transition group-hover:translate-x-1">
                      Abrir →
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {counters.length > 0 ? (
              <div className="grid gap-px overflow-hidden border border-brand-gold/20 bg-brand-gold/20 sm:grid-cols-3">
                {counters.map(([value, label]) => (
                  <div key={label} className="bg-[#FBFAF7] px-5 py-6">
                    <p className="text-3xl font-semibold text-brand-ink">{value}</p>
                    <p className="mt-2 text-xs uppercase leading-5 text-brand-ink/50">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
