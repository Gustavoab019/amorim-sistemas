/**
 * Ligação ao TrustVerify.
 *
 * A Complexidade Simples não tem CRM próprio: a gestão de leads, agenda,
 * pagamento e avaliação corre sobre o TrustVerify, tal como corre para
 * qualquer outro negócio da rede. É a mesma infraestrutura que vendemos —
 * usá-la aqui é a prova, não uma poupança.
 *
 * Consequência prática: tudo o que este ficheiro expõe é verificável de fora.
 * O selo desaparece se a empresa deixar de estar activa; os números vêm de um
 * endpoint público que qualquer pessoa pode abrir.
 */

/** Domínio do TrustVerify. */
export const TRUSTVERIFY_URL =
  process.env.NEXT_PUBLIC_TRUSTVERIFY_URL ?? "https://www.trustverify.pt";

/**
 * Número do bot (instância Z-API do TrustVerify).
 *
 * NÃO é o número pessoal. O site tinha `351913542470` — o mesmo número que o
 * TrustVerify já tinha identificado como pessoal e não-bot. Quem fazia o
 * diagnóstico caía numa conversa privada e o lead nunca entrava no sistema:
 * sem pedido, sem painel, sem métrica.
 */
export const WHATSAPP_BOT_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_BOT_NUMBER ?? "351920027481";

/** _id da Company no TrustVerify (24 hex). Vazio = ainda não registada. */
export const TRUSTVERIFY_COMPANY_ID =
  process.env.NEXT_PUBLIC_TRUSTVERIFY_COMPANY_ID ?? "";

/**
 * _id do perfil profissional no TrustVerify (24 hex).
 *
 * Why um perfil de PROFISSIONAL e não a Company: o catálogo — serviços,
 * preços e planos — está pendurado no perfil de quem executa. É lá que os
 * preços se editam e é lá que a agenda vive. A Company continua a ser o que
 * o selo e o `#empresa_` referem.
 */
export const TRUSTVERIFY_PRO_ID =
  process.env.NEXT_PUBLIC_TRUSTVERIFY_PRO_ID ?? "69de03563b70e815da8af0a9";

/** Perfil público do profissional — onde se compra e se marca. */
export const proProfileUrl = () => `${TRUSTVERIFY_URL}/pro/${TRUSTVERIFY_PRO_ID}`;

/** Slug do perfil público. */
export const TRUSTVERIFY_COMPANY_SLUG =
  process.env.NEXT_PUBLIC_TRUSTVERIFY_COMPANY_SLUG ?? "complexidade-simples";

/** Perfil público verificado — a página que o selo abre. */
export const companyProfileUrl = () =>
  `${TRUSTVERIFY_URL}/empresas/${TRUSTVERIFY_COMPANY_SLUG}`;

/**
 * Selo SVG servido pelo TrustVerify.
 *
 * É um `<img>` para um endpoint vivo, de propósito: se a empresa deixar de
 * estar ACTIVE o endpoint devolve 404 e o selo desaparece daqui. Um PNG
 * guardado no `public/` diria "verificada" para sempre, mesmo que deixasse
 * de ser verdade — que é exactamente o que um selo não pode fazer.
 */
export const companyBadgeUrl = () =>
  TRUSTVERIFY_COMPANY_ID
    ? `${TRUSTVERIFY_URL}/api/badge/company/${TRUSTVERIFY_COMPANY_ID}`
    : null;

export type NetworkStats = {
  prosCount: number;
  companiesCount: number;
  citiesCount: number;
  jobsCompleted: number;
  referralPenetrationPct: number;
};

/**
 * Números da rede, lidos do endpoint público.
 *
 * Falha para `null` em silêncio de propósito: a prova social não é crítica
 * para a página funcionar, e um erro de rede não deve partir a home. Quem
 * consome trata o `null` mostrando menos, nunca inventando.
 */
export async function fetchNetworkStats(): Promise<NetworkStats | null> {
  if (process.env.NEXT_PHASE === "phase-production-build") return null;

  try {
    const res = await fetch(`${TRUSTVERIFY_URL}/api/v1/network/stats`, {
      next: { revalidate: 900 }
    });
    if (!res.ok) return null;
    return (await res.json()) as NetworkStats;
  } catch {
    return null;
  }
}

/**
 * Deep link de entrada: abre o WhatsApp do bot com a tag `#empresa_`.
 *
 * O bot lê a tag, sabe de quem falamos, e responde com o catálogo e a forma
 * de contratar — em vez do menu genérico do marketplace. Quem carrega em
 * enviar é a pessoa, nunca nós: é o que a Meta exige e é o que faz o lead
 * existir do lado do TrustVerify.
 *
 * Sem `TRUSTVERIFY_COMPANY_ID` a mensagem sai na mesma, só sem a tag — o
 * contacto acontece, apenas sem contexto automático.
 */
export function buildBusinessEntryHref(context?: string): string {
  const lines: string[] = [];

  if (TRUSTVERIFY_COMPANY_ID) {
    lines.push(`#empresa_${TRUSTVERIFY_COMPANY_ID}`, "");
  }

  lines.push("Olá! Vim do site da *Complexidade Simples* e queria saber como funciona.");

  if (context) lines.push("", context);

  return `https://wa.me/${WHATSAPP_BOT_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}

/* ────────────────────────────────────────────────────────────────────────────
 * Diagnóstico
 *
 * O questionário deixa de produzir apenas uma mensagem de WhatsApp e passa a
 * produzir um documento com URL próprio. Quem responde fica com alguma coisa
 * na mão antes de falar connosco — é o produto a demonstrar-se — e o registo
 * dá-nos a primeira métrica de funil que alguma vez existiu.
 *
 * Guardado no TrustVerify, como tudo o resto. Sem CRM à parte.
 * ──────────────────────────────────────────────────────────────────────────── */

export interface DiagnosticAnswerPayload {
  questionId: string;
  questionLabel: string;
  selected: string[];
}

export interface CreateDiagnosticPayload {
  tierId: string;
  tierTitle: string;
  tierSummary?: string;
  priceFromCents: number;
  priceToCents: number;
  timeline?: string;
  includes?: string[];
  answers: DiagnosticAnswerPayload[];
}

/**
 * Regista o diagnóstico e devolve o id.
 *
 * `null` em qualquer falha, de propósito: sem empresa registada, sem rede, ou
 * com o TrustVerify em baixo, o visitante tem de conseguir falar connosco na
 * mesma. Quem consome cai para o link de WhatsApp sem documento.
 */
export async function createDiagnostic(
  payload: CreateDiagnosticPayload
): Promise<string | null> {
  if (!TRUSTVERIFY_COMPANY_ID) return null;
  try {
    const res = await fetch(`${TRUSTVERIFY_URL}/api/v1/diagnostics`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ companyId: TRUSTVERIFY_COMPANY_ID, ...payload })
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { id?: string };
    return data.id ?? null;
  } catch {
    return null;
  }
}

export interface DiagnosticView {
  id: string;
  company: { id: string; name: string; slug: string };
  tierTitle: string;
  tierSummary?: string;
  priceFromCents: number;
  priceToCents: number;
  currency: string;
  timeline?: string;
  includes: string[];
  answers: Array<{ questionLabel: string; selected: string[] }>;
  createdAt: string;
}

export async function fetchDiagnostic(id: string): Promise<DiagnosticView | null> {
  try {
    const res = await fetch(`${TRUSTVERIFY_URL}/api/v1/diagnostics/${id}`, {
      next: { revalidate: 60 }
    });
    if (!res.ok) return null;
    return (await res.json()) as DiagnosticView;
  } catch {
    return null;
  }
}

/** URL do documento, para partilhar. */
export const diagnosticUrl = (id: string) =>
  `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://complexidadesimples.com"}/diagnostico/${id}`;

/** Deep link que leva empresa + diagnóstico, para o bot ligar os dois. */
export function buildDiagnosticEntryHref(diagnosticId: string, context?: string): string {
  const lines: string[] = [];
  if (TRUSTVERIFY_COMPANY_ID) {
    lines.push(`#empresa_${TRUSTVERIFY_COMPANY_ID}_${diagnosticId}`, "");
  }
  lines.push("Olá! Fiz o diagnóstico no site da *Complexidade Simples*.");
  if (context) lines.push("", context);
  return `https://wa.me/${WHATSAPP_BOT_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}

/**
 * Deixa contacto num diagnóstico já criado.
 *
 * Mensagem de erro legível em vez de código: quem está a preencher um
 * formulário não quer saber o que é um 429.
 */
export async function submitDiagnosticContact(
  diagnosticId: string,
  input: { name: string; email: string; phone?: string; note?: string }
): Promise<{ ok: true; confirmationSent: boolean } | { ok: false; error: string }> {
  try {
    const res = await fetch(
      `${TRUSTVERIFY_URL}/api/v1/diagnostics/${diagnosticId}/contact`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input)
      }
    );
    const data = (await res.json().catch(() => ({}))) as {
      error?: string;
      confirmationSent?: boolean;
    };
    if (res.ok) return { ok: true, confirmationSent: data.confirmationSent !== false };
    return {
      ok: false,
      error:
        data.error ??
        (res.status === 429
          ? "Demasiadas tentativas. Tenta daqui a pouco."
          : "Não consegui guardar agora. Tenta outra vez.")
    };
  } catch {
    return { ok: false, error: "Sem ligação. Verifica a internet e tenta outra vez." };
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Catálogo
// ─────────────────────────────────────────────────────────────────────────────

export type CatalogService = {
  id: string;
  name: string;
  description?: string;
  priceCents: number;
  durationMinutes: number;
  pricingMode: "fixed" | "from" | "on_request";
  bookable: boolean;
};

export type CatalogOffer = {
  id: string;
  kind: "package" | "subscription";
  name: string;
  description?: string;
  priceCents: number;
  serviceName?: string;
  creditCount?: number;
  validityDays?: number;
  creditsPerInterval?: number;
  intervalMonths?: number;
  unitPriceCents?: number;
  savingCents?: number;
};

export type Catalog = {
  professionalId: string;
  name: string | null;
  profileUrl: string;
  services: CatalogService[];
  offers: CatalogOffer[];
};

/**
 * Serviços e planos, lidos do TrustVerify.
 *
 * Why não estão escritos aqui: estavam. A home tinha uma tabela de bandas de
 * preço à mão que já não batia certo com o catálogo do perfil — dois preços
 * públicos para o mesmo serviço, e nenhum processo para os manter iguais.
 * Agora só existe um sítio onde um preço se muda, e é o mesmo sítio onde o
 * cliente paga.
 *
 * Falha para `null` em silêncio, como o `fetchNetworkStats`: a secção
 * desaparece e o resto da página vive. Melhor não mostrar preços do que
 * mostrar preços que podem estar errados.
 */
export async function fetchCatalog(): Promise<Catalog | null> {
  // Why: no build não há rede para o TrustVerify e a home é pré-renderizada.
  // Sem esta guarda, o primeiro render de produção ficaria com o catálogo
  // vazio até à primeira revalidação — e falharia silenciosamente.
  if (process.env.NEXT_PHASE === "phase-production-build") return null;
  if (!TRUSTVERIFY_PRO_ID) return null;

  try {
    const res = await fetch(
      `${TRUSTVERIFY_URL}/api/professionals/${TRUSTVERIFY_PRO_ID}/catalog`,
      { next: { revalidate: 900 } }
    );
    if (!res.ok) return null;
    return (await res.json()) as Catalog;
  } catch {
    return null;
  }
}

/**
 * Preço em euros, no formato português. `180000` → `1.800 €`.
 *
 * Why `Intl` e não interpolação: sem separador de milhares saía `1800 €`, que
 * numa tabela ao lado de `150 €` obriga o leitor a contar dígitos.
 */
export function formatPrice(cents: number): string {
  const amount = cents / 100;
  // Why `pt-BR` e não `pt-PT`: o CLDR pt-PT não agrupa 4 dígitos (`1800`) e,
  // quando agrupa, usa espaço (`10 000`). O site inteiro escreve `1.800€`.
  // O `pt-BR` dá exactamente essa convenção — ponto para milhares, vírgula
  // para decimais — sem termos de reconstruir o número à mão.
  const shown = new Intl.NumberFormat("pt-BR", {
    useGrouping: "always",
    minimumFractionDigits: 0,
    maximumFractionDigits: Number.isInteger(amount) ? 0 : 2
  }).format(amount);
  return `${shown} €`;
}

/**
 * Como o preço deve ser lido — o modo importa tanto como o número.
 *
 * `from` sem o "Desde" seria um preço fechado que não existe, e é a diferença
 * entre uma expectativa cumprida e uma discussão no primeiro email.
 */
export function priceLabel(s: CatalogService): string {
  if (s.pricingMode === "on_request") return "Sob consulta";
  if (s.pricingMode === "from") return `Desde ${formatPrice(s.priceCents)}`;
  return formatPrice(s.priceCents);
}
