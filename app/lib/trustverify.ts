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
