/**
 * Notas de leitura.
 *
 * O questionário produzia um veredicto e mais nada: a pessoa respondia cinco
 * perguntas às cegas e recebia uma faixa de preço no fim. Não havia como saber
 * se tínhamos percebido o problema dela — e um número que aparece sem
 * raciocínio à vista lê-se como tabela de preços, não como diagnóstico.
 *
 * Estas notas aparecem à medida que as respostas entram e dizem o que estamos
 * a ler em cada uma. É a diferença entre "custa X" e "custa X por isto".
 *
 * Regra de conteúdo: cada nota diz algo que a pessoa pode usar mesmo que nunca
 * fale connosco. Uma nota que só serve para nos elogiar não é leitura, é
 * anúncio — e nota-se.
 */

export type InsightTone = "leitura" | "atencao" | "ganho";

export interface Insight {
  id: string;
  tone: InsightTone;
  title: string;
  body: string;
}

/** Uma nota por resposta — a leitura directa do que foi marcado. */
const PER_ANSWER: Record<string, Record<string, Insight>> = {
  problem: {
    capture: {
      id: "p-capture", tone: "leitura",
      title: "Captação é o problema mais barato de resolver",
      body: "É também o que dá sinal mais depressa. Em dias, não meses, ficas a saber se a procura existe — e isso muda tudo o que vier a seguir."
    },
    organize: {
      id: "p-organize", tone: "leitura",
      title: "O tempo perde-se entre ferramentas, não dentro delas",
      body: "Quando pedidos vivem em três sítios, o custo não é usar cada um — é lembrar-se de todos. O primeiro ganho costuma vir de haver um sítio só por onde tudo entra."
    },
    sell: {
      id: "p-sell", tone: "atencao",
      title: "Vender online muda o desenho, não só o site",
      body: "A partir do momento em que há dinheiro, há estados: pago, por pagar, reembolsado, em disputa. É aqui que o custo cresce — e por boas razões."
    },
    platform: {
      id: "p-platform", tone: "leitura",
      title: "Plataforma quer dizer dois lados no mesmo sistema",
      body: "Quem oferece e quem procura têm necessidades opostas. É o único caso em que começar pequeno demais sai mais caro do que começar certo."
    }
  },
  current: {
    whatsapp: {
      id: "c-whatsapp", tone: "ganho",
      title: "Não te vamos tirar do WhatsApp",
      body: "Se é lá que os teus clientes já estão, tirá-los de lá é perder gente. O objectivo é o WhatsApp deixar de ser também o teu arquivo e a tua agenda."
    },
    spreadsheet: {
      id: "c-spreadsheet", tone: "leitura",
      title: "A planilha aguenta mais do que dizem",
      body: "Deixa de aguentar num ponto concreto: quando duas pessoas editam ao mesmo tempo, ou quando precisas de saber o que estava lá na semana passada."
    },
    manual: {
      id: "c-manual", tone: "atencao",
      title: "Antes de automatizar, tem de haver registo",
      body: "Não dá para automatizar o que não está escrito em lado nenhum. A primeira versão costuma ser só isto: passar a existir um histórico."
    },
    "old-system": {
      id: "c-old", tone: "atencao",
      title: "Ferramentas soltas são o caso mais caro",
      body: "Cada uma funciona, e nenhuma fala com a seguinte — por isso alguém no meio faz de ponte, todos os dias. É aí que está o custo escondido."
    }
  },
  users: {
    one: {
      id: "u-one", tone: "ganho",
      title: "Sendo só tu, corta-se uma fatia grande",
      body: "Sem equipa não há permissões, perfis nem aprovações. Isso costuma ser um terço do trabalho de um sistema — e nada disso te faz falta."
    },
    small: {
      id: "u-small", tone: "leitura",
      title: "A esta escala, o que interessa é não haver dúvidas",
      body: "Com poucas pessoas o problema raramente é técnico. É saber de quem é a próxima acção sem ter de perguntar."
    },
    team: {
      id: "u-team", tone: "atencao",
      title: "Permissões deixam de ser detalhe",
      body: "A partir de meia dúzia de pessoas, quem vê o quê passa a ser decisão de desenho. Adiar isso costuma obrigar a refazer o sistema mais tarde."
    },
    many: {
      id: "u-many", tone: "atencao",
      title: "Com esta dimensão, o sistema tem de ser ensinável",
      body: "Quinze pessoas não são quinze utilizadores — são entradas e saídas, formação e enganos. O desenho passa a valer mais do que as funcionalidades."
    }
  },
  urgency: {
    fast: {
      id: "g-fast", tone: "ganho",
      title: "Rápido corta escopo, não qualidade",
      body: "Uma primeira versão que faz uma coisa bem feita vai ao ar em dias. Uma que faz cinco coisas mais ou menos não vai ao ar nunca."
    },
    right: {
      id: "g-right", tone: "leitura",
      title: "Estruturar direito também tem um risco",
      body: "É construir muito antes de saber o que é usado. A forma de o evitar é lançar cedo mesmo quando a intenção é fazer completo."
    },
    research: {
      id: "g-research", tone: "ganho",
      title: "Ainda estar a perceber é uma resposta útil",
      body: "É das melhores alturas para falar, e a recomendação aqui puxa sempre para o mais pequeno — o que custa menos a deitar fora se a ideia mudar."
    }
  }
};

/** Notas por capacidade marcada — a pergunta é de escolha múltipla. */
const PER_CAPABILITY: Record<string, Insight> = {
  payment: {
    id: "cap-payment", tone: "atencao",
    title: "Pagamento traz reembolsos e recibos atrás",
    body: "O botão de pagar é a parte fácil. O que vem depois — falhas, devoluções, facturação — é o que costuma faltar no orçamento de quem nunca o fez."
  },
  login: {
    id: "cap-login", tone: "atencao",
    title: "Login é pouca interface e bastante responsabilidade",
    body: "Contas implicam recuperação de acesso, dados pessoais e RGPD. Vale confirmar se precisas mesmo — muita coisa funciona sem ninguém se registar."
  },
  whatsapp: {
    id: "cap-whatsapp", tone: "leitura",
    title: "No WhatsApp há uma regra que não se contorna",
    body: "Quem inicia a conversa é sempre o cliente. Tudo o que se automatiza desenha-se a partir daí — quem tenta o contrário acaba bloqueado."
  },
  reports: {
    id: "cap-reports", tone: "leitura",
    title: "Relatórios só valem depois de haver dados fiáveis",
    body: "Um gráfico construído sobre registos incompletos dá confiança a mais. Costumam entrar na segunda versão, e é o sítio certo para eles."
  },
  admin: {
    id: "cap-admin", tone: "leitura",
    title: "O painel é para quem trabalha, não para quem compra",
    body: "É a parte do sistema que ninguém vê e toda a gente usa. Costuma ser onde se ganha ou perde o tempo do dia a dia."
  },
  site: {
    id: "cap-site", tone: "ganho",
    title: "A página é o que dá para medir",
    body: "Sem ela, não há como saber de onde vêm os pedidos. Com ela, a primeira semana já diz alguma coisa."
  }
};

/**
 * Notas de combinação — onde está o valor real.
 *
 * Uma resposta isolada diz pouco; é o cruzamento que revela a tensão. Estas
 * aparecem primeiro de propósito: são as que a pessoa não conseguiria tirar
 * sozinha do questionário.
 */
const COMBINATIONS: Array<{ when: (a: Record<string, string[]>) => boolean; insight: Insight }> = [
  {
    when: (a) => a.problem?.includes("platform") && a.urgency?.includes("fast"),
    insight: {
      id: "x-platform-fast", tone: "atencao",
      title: "Plataforma e pressa puxam em sentidos opostos",
      body: "Dois lados no mesmo sistema não se constroem depressa sem partir alguma coisa. Se a urgência é real, o caminho costuma ser lançar só um dos lados primeiro."
    }
  },
  {
    when: (a) => a.capabilities?.includes("payment") && a.users?.includes("one"),
    insight: {
      id: "x-pay-solo", tone: "atencao",
      title: "Vender sozinho funciona — até ao volume",
      body: "Cada pagamento gera trabalho manual: confirmar, emitir, arquivar. Sozinho aguenta-se uns quantos por semana; a partir daí a automação deixa de ser luxo."
    }
  },
  {
    when: (a) => a.current?.includes("manual") && a.capabilities?.includes("reports"),
    insight: {
      id: "x-manual-reports", tone: "atencao",
      title: "Relatórios sobre o que ainda não se regista",
      body: "Marcaste indicadores, mas hoje não há registo de onde os tirar. A ordem que costuma funcionar é começar a registar primeiro e medir três meses depois."
    }
  },
  {
    when: (a) => a.problem?.includes("capture") && a.current?.includes("whatsapp"),
    insight: {
      id: "x-capture-wa", tone: "ganho",
      title: "Já tens o canal — falta o funil",
      body: "Quem chega por WhatsApp já demonstrou interesse. O que costuma faltar não é mais gente a escrever, é saber quem escreveu, o quê e quando."
    }
  },
  {
    when: (a) => a.capabilities && a.capabilities.length >= 4,
    insight: {
      id: "x-scope", tone: "atencao",
      title: "Marcaste muita coisa — e isso é informação",
      body: "Sistemas que nascem com tudo demoram a chegar ao ar, e chegam sem ninguém saber qual das partes valia. Vamos querer perceber qual delas resolve o problema de amanhã."
    }
  }
];

/**
 * Lê as respostas e devolve as notas, das mais reveladoras para as mais
 * directas. As de combinação primeiro porque são as que a pessoa não tiraria
 * sozinha do questionário.
 */
/**
 * Tecto de notas.
 *
 * Uma resposta densa dispara onze — e onze caixas seguidas deixam de se ler
 * como raciocínio para passarem a parede de texto. Como as de combinação
 * entram primeiro, o corte sacrifica sempre as mais óbvias.
 */
const MAX_INSIGHTS = 6;

export function buildInsights(answers: Record<string, string[]>): Insight[] {
  const out: Insight[] = [];

  for (const rule of COMBINATIONS) {
    try {
      if (rule.when(answers)) out.push(rule.insight);
    } catch {
      // Uma regra malformada nunca pode partir o questionário.
    }
  }

  for (const [questionId, byOption] of Object.entries(PER_ANSWER)) {
    for (const optionId of answers[questionId] ?? []) {
      const note = byOption[optionId];
      if (note) out.push(note);
    }
  }

  for (const optionId of answers.capabilities ?? []) {
    const note = PER_CAPABILITY[optionId];
    if (note) out.push(note);
  }

  return out.slice(0, MAX_INSIGHTS);
}
