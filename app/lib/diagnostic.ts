import { buildBusinessEntryHref } from "./trustverify";

export type DiagnosticOption = {
  id: string;
  label: string;
  description?: string;
  weight: number;
  tags: DiagnosticTag[];
};

export type DiagnosticQuestion = {
  id: string;
  title: string;
  helper: string;
  multiple?: boolean;
  options: DiagnosticOption[];
};

export type DiagnosticTag =
  | "landing"
  | "leads"
  | "operations"
  | "dashboard"
  | "marketplace"
  | "automation"
  | "payments"
  | "urgent";

export type DiagnosticAnswers = Record<string, string[]>;

export type DiagnosticTier = {
  id: string;
  title: string;
  summary: string;
  priceFrom: number;
  priceTo: number;
  timeline: string;
  includes: string[];
  examples: string[];
};

export type DiagnosticResult = DiagnosticTier & {
  score: number;
  selectedLabels: string[];
  dominantTags: DiagnosticTag[];
};

export { WHATSAPP_BOT_NUMBER as WHATSAPP_NUMBER } from "./trustverify";

export const diagnosticQuestions: DiagnosticQuestion[] = [
  {
    id: "problem",
    title: "O que precisa ficar mais simples agora?",
    helper: "Escolha o problema que mais pesa na operação hoje.",
    options: [
      {
        id: "capture",
        label: "Captar mais clientes",
        description: "Tenho oferta, mas preciso transformar procura em conversa.",
        weight: 1,
        tags: ["landing", "leads"]
      },
      {
        id: "organize",
        label: "Organizar pedidos e orçamentos",
        description: "Tudo chega por WhatsApp, planilha ou mensagens soltas.",
        weight: 3,
        tags: ["operations", "dashboard"]
      },
      {
        id: "sell",
        label: "Vender ou reservar online",
        description: "Preciso de pagamento, checkout, agenda ou confirmação.",
        weight: 4,
        tags: ["payments", "operations"]
      },
      {
        id: "platform",
        label: "Criar uma plataforma",
        description: "Tenho mais de um lado: clientes, profissionais, parceiros ou fornecedores.",
        weight: 7,
        tags: ["marketplace", "payments", "dashboard"]
      }
    ]
  },
  {
    id: "current",
    title: "Como isso funciona hoje?",
    helper: "Isso ajuda a medir o tamanho da confusão que o sistema precisa absorver.",
    options: [
      {
        id: "whatsapp",
        label: "WhatsApp e mensagens",
        weight: 2,
        tags: ["leads", "automation"]
      },
      {
        id: "spreadsheet",
        label: "Planilhas",
        weight: 2,
        tags: ["operations", "dashboard"]
      },
      {
        id: "manual",
        label: "Papel, memória ou improviso",
        weight: 3,
        tags: ["operations"]
      },
      {
        id: "old-system",
        label: "Sistema antigo ou ferramentas soltas",
        weight: 4,
        tags: ["operations", "dashboard", "automation"]
      }
    ]
  },
  {
    id: "users",
    title: "Quantas pessoas seriam impactadas?",
    helper: "Quanto mais gente usa, mais importante fica acertar permissões, fluxo e clareza.",
    options: [
      { id: "one", label: "Só eu", weight: 1, tags: ["landing"] },
      { id: "small", label: "2 a 5 pessoas", weight: 2, tags: ["operations"] },
      { id: "team", label: "6 a 15 pessoas", weight: 4, tags: ["operations", "dashboard"] },
      { id: "many", label: "Mais de 15 pessoas", weight: 6, tags: ["dashboard", "automation"] }
    ]
  },
  {
    id: "capabilities",
    title: "O que o sistema provavelmente precisa ter?",
    helper: "Pode marcar mais de uma opção.",
    multiple: true,
    options: [
      { id: "site", label: "Página de captação", weight: 1, tags: ["landing", "leads"] },
      { id: "admin", label: "Painel administrativo", weight: 3, tags: ["dashboard", "operations"] },
      { id: "login", label: "Login ou área privada", weight: 4, tags: ["operations", "marketplace"] },
      { id: "payment", label: "Pagamento online", weight: 4, tags: ["payments"] },
      { id: "whatsapp", label: "WhatsApp automatizado", weight: 4, tags: ["automation", "leads"] },
      { id: "reports", label: "Relatórios e indicadores", weight: 3, tags: ["dashboard"] }
    ]
  },
  {
    id: "urgency",
    title: "Qual é a urgência?",
    helper: "A primeira versão pode ser enxuta ou mais estruturada desde o início.",
    options: [
      { id: "fast", label: "Preciso colocar algo no ar rápido", weight: 1, tags: ["urgent"] },
      { id: "right", label: "Quero estruturar direito", weight: 3, tags: ["operations"] },
      { id: "research", label: "Ainda estou entendendo", weight: 0, tags: ["landing"] }
    ]
  }
];

export const diagnosticTiers: DiagnosticTier[] = [
  {
    id: "landing",
    title: "Página que vende",
    summary: "Uma presença objetiva para explicar a oferta, captar contatos e medir origem da demanda.",
    priceFrom: 350,
    priceTo: 900,
    timeline: "5 a 10 dias",
    includes: ["Página comercial", "WhatsApp com mensagem pronta", "SEO local básico", "Medição de conversão"],
    examples: ["Dra. Lays: captação local para consultório"]
  },
  {
    id: "lead-system",
    title: "Sistema de captação",
    summary: "Uma landing com diagnóstico, triagem ou formulário inteligente para transformar procura em lead qualificado.",
    priceFrom: 900,
    priceTo: 1800,
    timeline: "7 a 14 dias",
    includes: ["Diagnóstico interativo", "Resumo automático do pedido", "Painel simples de leads", "Integração com WhatsApp ou email"],
    examples: ["Complexidade Simples: este motor de orçamento"]
  },
  {
    id: "operational-system",
    title: "Sistema operacional",
    summary: "Um sistema com painel, fluxo de status, dados centralizados e regras da operação.",
    priceFrom: 1800,
    priceTo: 5000,
    timeline: "3 a 6 semanas",
    includes: ["Painel administrativo", "Banco de dados", "Status e histórico", "Pagamentos, agenda ou notificações"],
    examples: ["Habitta: configurador, checkout, pedidos e operação"]
  },
  {
    id: "platform",
    title: "Plataforma ou marketplace",
    summary: "Um produto com múltiplos lados, permissões, pagamentos, perfis, reputação e operação contínua.",
    priceFrom: 5000,
    priceTo: 15000,
    timeline: "6 a 12 semanas",
    includes: ["Clientes e prestadores", "Perfis ou contas", "Pagamentos online", "Dashboards e automações"],
    examples: ["TrustVerify: profissionais, clientes, pagamentos e verificação"]
  }
];

export function calculateDiagnosticResult(answers: DiagnosticAnswers): DiagnosticResult {
  const selectedOptions = diagnosticQuestions.flatMap((question) => {
    const selectedIds = answers[question.id] ?? [];
    return question.options.filter((option) => selectedIds.includes(option.id));
  });

  const score = selectedOptions.reduce((total, option) => total + option.weight, 0);
  const tagCount = selectedOptions.reduce<Record<string, number>>((accumulator, option) => {
    option.tags.forEach((tag) => {
      accumulator[tag] = (accumulator[tag] ?? 0) + 1;
    });
    return accumulator;
  }, {});

  const dominantTags = Object.entries(tagCount)
    .sort((left, right) => right[1] - left[1])
    .slice(0, 3)
    .map(([tag]) => tag as DiagnosticTag);

  const hasMarketplace = dominantTags.includes("marketplace") || score >= 19;
  const hasOperations = dominantTags.includes("operations") || dominantTags.includes("dashboard");
  const hasLeadSystem = dominantTags.includes("automation") || score >= 8;

  const tier = hasMarketplace
    ? diagnosticTiers[3]
    : hasOperations && score >= 12
      ? diagnosticTiers[2]
      : hasLeadSystem
        ? diagnosticTiers[1]
        : diagnosticTiers[0];

  return {
    ...tier,
    score,
    selectedLabels: selectedOptions.map((option) => option.label),
    dominantTags
  };
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("pt-PT", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0
  }).format(value);
}

/**
 * Mensagem que o visitante envia ao bot do TrustVerify no fim do diagnóstico.
 *
 * Não é só um contacto: é a criação do lead. O bot lê a tag `#empresa_`,
 * identifica a Complexidade Simples e responde com o que se pode contratar —
 * e o pedido passa a existir no painel, com o diagnóstico anexado.
 *
 * O texto vai com acentuação correcta porque é a última coisa que a pessoa lê
 * antes de carregar em enviar.
 */
export function buildWhatsAppHref(result: DiagnosticResult): string {
  const context = [
    "Fiz o diagnóstico no site.",
    "",
    `Resultado: ${result.title}`,
    `Faixa estimada: ${formatCurrency(result.priceFrom)} a ${formatCurrency(result.priceTo)}`,
    `Prazo médio: ${result.timeline}`,
    "",
    "O que marquei:",
    ...result.selectedLabels.map((label) => `- ${label}`),
    "",
    "Quero entender o próximo passo."
  ].join("\n");

  return buildBusinessEntryHref(context);
}
