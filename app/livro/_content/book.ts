/**
 * O livro, em dados.
 *
 * Separado da página porque o conteúdo é o argumento de venda — não é
 * decoração à volta de um botão. Mantê-lo aqui deixa-o legível e editável sem
 * mexer em layout.
 */

export const BOOK = {
  title: "Também Pode Ser Assim",
  subtitle: "um repertório para pensar antes de ter certeza",
  author: "Gustavo Barbosa",
  pages: 132,
  chapters: 16,
  parts: 4,
  priceEur: 7.99,
  format: "PDF"
} as const;

/**
 * A frase de abertura. É a melhor linha do livro e faz o trabalho todo:
 * nomeia um desconforto que a pessoa reconhece sem nunca o ter formulado.
 */
export const OPENING_LINE =
  "Grande parte da nossa vida é construída sobre respostas que nunca percebemos que eram perguntas.";

/**
 * A anti-promessa, tirada do prólogo.
 *
 * Uma página de vendas normal esconderia isto. Aqui é o activo: um livro sobre
 * desconfiar de certezas não pode ser vendido por alguém que finge ter todas.
 * Quem lê isto e continua é exactamente o leitor certo.
 */
export const ANTI_PROMISE = [
  "Eu não sei exatamente por que alguém deveria ler este livro.",
  "Talvez não devesse."
];

export const STRUCTURE = [
  {
    part: "Parte I",
    name: "Antes da resposta",
    line: "Talvez a pergunta já esteja empurrando você para algum lugar.",
    chapters: [
      "A pergunta já contém uma resposta",
      "Uma máquina capaz de provar que estou certo",
      "O que você alimenta cresce",
      "Nem todo silêncio é sabedoria"
    ]
  },
  {
    part: "Parte II",
    name: "A escada sem fim",
    line: "Eu quero isso. Mas quem me ensinou a querer?",
    chapters: [
      "Eu quero isso. Mas quem decidiu?",
      "Só porque eu quero, significa que devo querer?",
      "O olhar dos outros",
      "A escada infinita"
    ]
  },
  {
    part: "Parte III",
    name: "Colocando em prática",
    line: "Algumas informações só aparecem quando o mundo responde.",
    chapters: [
      "Eu queria entender antes",
      "Algumas respostas só aparecem andando",
      "Pequenos testes, grandes decisões",
      "Qual jogo você está tentando ganhar?"
    ]
  },
  {
    part: "Parte IV",
    name: "Integrando e continuando",
    line: "O próximo degrau não precisa ser maior.",
    chapters: [
      "Repertório também pode ser munição",
      "A disciplina que liberta",
      "Aprender, desaprender, reaprender",
      "Não é o fim. É o próximo degrau"
    ]
  }
] as const;

/** Citações que o próprio livro destaca em página inteira. */
export const QUOTES = [
  {
    text: "É possível ficar muito bom em um jogo que você nunca escolheu conscientemente.",
    source: "Capítulo 12"
  },
  {
    text: "Uma resposta fluente não é a mesma coisa que uma resposta verdadeira.",
    source: "Princípio de leitura para IA"
  },
  {
    text: "Algumas informações só existem depois da decisão.",
    source: "Parte III"
  },
  {
    text: "Seria estranho escrever sobre desconfiar das próprias certezas e terminar tendo certeza de tudo o que escrevi.",
    source: "Nota antes de começar"
  },
  {
    text: "240 km depois, eu ainda não tinha uma resposta melhor.",
    source: "Caminho Português"
  }
] as const;

/**
 * Para quem é e para quem não é.
 *
 * A desqualificação não é humildade decorativa: é o que faz alguém confiar no
 * resto da página. Quem se reconhece na coluna da direita e compra na mesma
 * fica desiludido — e isso custa mais do que a venda vale.
 */
export const AUDIENCE = {
  yes: [
    "Já reparaste que respondes depressa a perguntas que nunca examinaste.",
    "Andas a subir degraus sem ter escolhido a escada.",
    "Queres entender tudo antes de começar — e isso já te travou.",
    "Desconfias de quem explica a vida inteira com uma só teoria."
  ],
  no: [
    "Procuras um método com passos numerados para aplicar amanhã.",
    "Queres alguém que te diga o que fazer da tua vida.",
    "Não tens paciência para um livro que termina em «ainda não sei»."
  ]
} as const;
