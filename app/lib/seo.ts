const envUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : undefined);

export const siteUrl = envUrl ?? "https://complexidadesimples.com";

export const seo = {
  siteName: "Complexidade Simples",
  legalName: "Complexidade Simples",
  title: "Complexidade Simples — Sistemas sob medida, leads e automação",
  description:
    "Criamos sistemas sob medida para captar leads, organizar pedidos, automatizar WhatsApp, gerir operações e vender online. Faça o diagnóstico e veja uma faixa de preço.",
  shortDescription:
    "Sistemas sob medida para captação, gestão de leads, painéis, automações, pagamentos e plataformas.",
  url: siteUrl,
  logo: `${siteUrl}/complexidade-simples-logo.png`,
  mark: `${siteUrl}/complexidade-simples-mark.png`,
  email: "contato@complexidadesimples.com",
  phone: "+351913542470",
  locale: "pt_BR",
  keywords: [
    "sistemas sob medida",
    "sistemas para empresas",
    "automação de processos",
    "gestão de leads",
    "painel administrativo",
    "sistema de captação de leads",
    "automação WhatsApp",
    "desenvolvimento de sistemas",
    "sites com sistema",
    "CRM simples",
    "marketplace sob medida",
    "sistemas para operações"
  ],
  sameAs: [
    "https://www.trustverify.pt",
    "https://www.habitta.pt",
    "https://www.dralayscastilho.com.br"
  ]
};

export const services = [
  {
    name: "Sistema de captação de leads",
    description:
      "Landing pages, diagnóstico interativo, WhatsApp, tracking e triagem inicial para transformar procura em conversa qualificada.",
    priceRange: "350€ a 1.800€"
  },
  {
    name: "Sistema operacional sob medida",
    description:
      "Painel administrativo, pedidos, clientes, status, histórico, notificações, pagamentos e relatórios para controlar a operação.",
    priceRange: "1.800€ a 5.000€"
  },
  {
    name: "Plataforma e marketplace",
    description:
      "Perfis, permissões, pagamentos, reputação, múltiplos lados e dashboards para modelos que precisam operar como plataforma.",
    priceRange: "5.000€ a 15.000€+"
  },
  {
    name: "Automação com WhatsApp e IA",
    description:
      "Triagem, mensagens, extração de dados, respostas assistidas, notificações e integração com fluxos comerciais.",
    priceRange: "500€ a 3.000€"
  }
];

export const caseStudies = [
  {
    name: "Dra. Lays",
    url: "https://www.dralayscastilho.com.br",
    description:
      "Site de captação local com SEO, WhatsApp, conteúdo de serviços, prova social e presença contínua."
  },
  {
    name: "Habitta",
    url: "https://www.habitta.pt",
    description:
      "Sistema comercial para cortinados sob medida com configurador, checkout, Stripe, pedidos e painel."
  },
  {
    name: "TrustVerify",
    url: "https://www.trustverify.pt",
    description:
      "Plataforma própria com marketplace, profissionais verificados, pagamentos, dashboards e operação via WhatsApp."
  }
];

export const faqs = [
  {
    question: "A Complexidade Simples faz apenas sites?",
    answer:
      "Não. O site pode ser a porta de entrada, mas o foco é construir sistemas que organizam operação: captação, triagem, painel, automação, pagamentos e gestão de leads."
  },
  {
    question: "Quanto custa um sistema sob medida?",
    answer:
      "Projetos de captação normalmente ficam entre 350€ e 900€. Sistemas com triagem e painel ficam entre 900€ e 1.800€. Operações com banco de dados, pagamentos e automações costumam ficar entre 1.800€ e 5.000€. Plataformas podem passar de 5.000€."
  },
  {
    question: "O diagnóstico gera uma proposta fechada?",
    answer:
      "Não. O diagnóstico gera uma faixa inicial e organiza o contexto. A proposta final depende de integrações, dados, permissões, urgência e escopo da primeira versão."
  },
  {
    question: "A gestão dos leads fica onde?",
    answer:
      "A captação e gestão dos pedidos pode correr sobre a infraestrutura TrustVerify, com WhatsApp, histórico, status, pagamentos e avaliação."
  },
  {
    question: "Que tipos de negócios podem usar?",
    answer:
      "Profissionais locais, prestadores de serviço, negócios sob medida, operações com muitos pedidos por WhatsApp, equipas que usam planilhas e empresas que precisam criar um painel ou plataforma."
  }
];

type JsonLd = Record<string, unknown>;

export function absoluteUrl(path = "/"): string {
  return new URL(path, siteUrl).toString();
}

export function serializeJsonLd(data: JsonLd | JsonLd[]): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function organizationJsonLd(): JsonLd {
  return {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: seo.siteName,
    legalName: seo.legalName,
    url: siteUrl,
    logo: seo.logo,
    image: seo.mark,
    email: seo.email,
    telephone: seo.phone,
    sameAs: seo.sameAs,
    description: seo.shortDescription
  };
}

export function websiteJsonLd(): JsonLd {
  return {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: seo.siteName,
    url: siteUrl,
    inLanguage: "pt-BR",
    publisher: { "@id": `${siteUrl}/#organization` },
    description: seo.description
  };
}

export function serviceJsonLd(): JsonLd {
  return {
    "@type": "Service",
    "@id": `${siteUrl}/#service`,
    name: "Desenvolvimento de sistemas sob medida",
    serviceType: "Sistemas sob medida, automação de processos e gestão de leads",
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: [
      { "@type": "Country", name: "Portugal" },
      { "@type": "Country", name: "Brasil" }
    ],
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Empresas, profissionais e operações de serviço"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tipos de sistemas",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        name: service.name,
        description: service.description,
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "EUR",
          description: service.priceRange
        }
      }))
    }
  };
}

export function faqJsonLd(): JsonLd {
  return {
    "@type": "FAQPage",
    "@id": `${siteUrl}/#faq`,
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function caseStudiesJsonLd(): JsonLd {
  return {
    "@type": "ItemList",
    "@id": `${siteUrl}/#case-studies`,
    name: "Sistemas já construídos pela Complexidade Simples",
    itemListElement: caseStudies.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: item.name,
        url: item.url,
        description: item.description,
        creator: { "@id": `${siteUrl}/#organization` }
      }
    }))
  };
}

export function breadcrumbJsonLd(): JsonLd {
  return {
    "@type": "BreadcrumbList",
    "@id": `${siteUrl}/#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Complexidade Simples",
        item: siteUrl
      }
    ]
  };
}

export function homeJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationJsonLd(),
      websiteJsonLd(),
      serviceJsonLd(),
      faqJsonLd(),
      caseStudiesJsonLd(),
      breadcrumbJsonLd()
    ]
  };
}
