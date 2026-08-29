import {
  fetchCatalog,
  formatPrice,
  priceLabel,
  proProfileUrl,
  type CatalogOffer,
  type CatalogService
} from "../lib/trustverify";

/**
 * Serviços e planos — lidos do TrustVerify, não escritos aqui.
 *
 * Esta página tinha uma tabela de bandas de preço em código (`PRICE_BANDS`)
 * que nunca chegou a ser renderizada, e uma banda solta dentro de um mockup.
 * O resultado era o pior dos dois mundos: preços a divergir do catálogo real
 * e nenhum sítio onde o visitante pudesse comprar.
 *
 * Agora a fonte é o perfil público. Mudar um preço no painel do TrustVerify
 * muda esta secção e o perfil ao mesmo tempo, porque são o mesmo dado — e o
 * botão leva ao sítio onde se paga e se marca, em vez de a um formulário que
 * alguém tem de ler.
 *
 * Se o catálogo não vier, a secção não aparece. Um site sem preços vende
 * menos; um site com preços errados custa mais caro do que isso.
 */

function ServiceRow({ service }: { service: CatalogService }) {
  return (
    <div className="grid gap-2 py-5 first:pt-0 last:pb-0 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6">
      <div>
        <p className="text-base font-semibold text-brand-ink">{service.name}</p>
        {service.description && (
          <p className="mt-1.5 text-sm leading-6 text-brand-ink/58">
            {service.description}
          </p>
        )}
      </div>
      <div className="sm:text-right">
        <p className="whitespace-nowrap text-base font-semibold text-brand-ink">
          {priceLabel(service)}
        </p>
        {service.pricingMode !== "on_request" && service.durationMinutes > 0 && (
          <p className="mt-1 whitespace-nowrap text-xs text-brand-ink/50">
            {service.durationMinutes} min
          </p>
        )}
      </div>
    </div>
  );
}

function OfferCard({ offer, href }: { offer: CatalogOffer; href: string }) {
  const units =
    offer.kind === "package" ? offer.creditCount : offer.creditsPerInterval;

  return (
    <div className="border border-brand-gold/20 bg-white p-7 shadow-soft">
      <p className="text-xs font-semibold uppercase text-brand-bronze">
        {offer.kind === "package" ? "Pacote" : "Acompanhamento"}
      </p>
      <p className="mt-3 text-xl font-semibold text-brand-ink">{offer.name}</p>

      {offer.description && (
        <p className="mt-3 text-sm leading-7 text-brand-ink/62">
          {offer.description}
        </p>
      )}

      <p className="mt-5 text-3xl font-semibold text-brand-ink">
        {formatPrice(offer.priceCents)}
      </p>

      <ul className="mt-4 space-y-2 text-sm text-brand-ink/62">
        {units ? (
          <li>
            {units} {units === 1 ? "sessão" : "sessões"}
            {offer.serviceName ? ` de ${offer.serviceName}` : ""}
          </li>
        ) : null}
        {offer.validityDays ? <li>Válido {offer.validityDays} dias</li> : null}
        {/* Poupança só quando existe — vem calculada do servidor, não daqui. */}
        {offer.savingCents ? (
          <li className="font-semibold text-brand-bronze">
            Poupas {formatPrice(offer.savingCents)} face ao avulso
          </li>
        ) : null}
      </ul>

      <a
        href={href}
        className="mt-7 inline-block border border-brand-ink bg-brand-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-ink/88"
      >
        Comprar e marcar
      </a>
    </div>
  );
}

export async function CatalogSection() {
  const catalog = await fetchCatalog();
  if (!catalog) return null;

  const { services, offers } = catalog;
  if (services.length === 0 && offers.length === 0) return null;

  // Why a âncora `#planos`: o perfil desdobra os planos nessa secção, por isso
  // quem carrega em comprar aterra no cartão certo em vez do topo da página.
  const profileUrl = catalog.profileUrl || proProfileUrl();
  const offersUrl = `${profileUrl}#planos`;

  return (
    <section id="precos" className="bg-brand-ivory px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase text-brand-bronze">
          Serviços e planos
        </p>
        <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-brand-ink sm:text-5xl">
          Preços à vista, no mesmo sítio onde se paga.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-8 text-brand-ink/65">
          Esta tabela não está escrita neste site — é lida do perfil público no
          TrustVerify, o mesmo que qualquer pessoa pode abrir. É lá que se
          compra, se marca e se avalia. Nós usamos a plataforma que vendemos.
        </p>
        <div className="mt-8 h-px w-28 bg-brand-gold" />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          {services.length > 0 && (
            <div className="border border-brand-gold/20 bg-white p-3 shadow-large">
              <div className="divide-y divide-brand-gold/20 border border-brand-gold/15 p-6 sm:p-8">
                {services.map((s) => (
                  <ServiceRow key={s.id} service={s} />
                ))}
              </div>
            </div>
          )}

          <div className="space-y-6">
            {offers.map((o) => (
              <OfferCard key={o.id} offer={o} href={offersUrl} />
            ))}

            <p className="text-sm leading-7 text-brand-ink/58">
              O diagnóstico é a única marcação directa. Tudo o resto sai com
              proposta depois de percebermos o problema — porque orçamentar um
              sistema sem o ver é como dar preço a uma obra pelo telefone.{" "}
              <a
                href={profileUrl}
                className="font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4"
              >
                Ver perfil verificado
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
