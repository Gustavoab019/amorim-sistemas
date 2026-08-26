/**
 * Capítulo 8 na íntegra — a amostra grátis.
 *
 * Inteiro, não um excerto cortado a meio. Para um ensaio, o texto é o produto:
 * mostrar converte mais do que prometer, e é a única forma de vender este
 * livro sem contradizer o que ele defende.
 *
 * É também o mais auto-contido dos dezasseis, e o único que não precisa de
 * nada do que vem antes para se perceber.
 */

export interface Bloco {
  tipo: "titulo" | "paragrafo" | "verso" | "exercicio";
  texto: string;
}

export const CAPITULO_8: { numero: string; titulo: string; abertura: string; blocos: Bloco[] } = {
  numero: "Capítulo 08",
  titulo: "A escada infinita",
  abertura: "O problema não é existir outro degrau. É acreditar que o próximo será o último.",
  blocos: [
    { tipo: "paragrafo", texto: "Há algum tempo imaginei uma escada. Não uma escada normal. Uma escada em que cada degrau parece enorme enquanto estamos abaixo dele." },
    { tipo: "verso", texto: "Subir exige esforço.\nTempo.\nÀs vezes dinheiro.\nÀs vezes coragem.\nÀs vezes anos." },
    { tipo: "paragrafo", texto: "Então finalmente chegamos. E por alguns minutos existe contemplação. Funcionou. Eu consegui." },
    { tipo: "paragrafo", texto: "Só que basta levantar um pouco a cabeça e outro degrau aparece. E depois outro. E outro." },

    { tipo: "titulo", texto: "O degrau muda de tamanho" },
    { tipo: "paragrafo", texto: "Existe algo curioso na percepção. Aquilo que parecia gigantesco antes da conquista rapidamente vira chão." },
    { tipo: "verso", texto: "O emprego que parecia impossível vira rotina.\nA renda que parecia suficiente vira referência mínima.\nO projeto que parecia grande vira “o primeiro”." },
    { tipo: "paragrafo", texto: "A psicologia do bem-estar discute fenômenos de adaptação: mudanças boas e ruins podem perder parte de sua intensidade conforme nos acostumamos a novas condições. A vida não fica exatamente igual, mas nossa referência se move. Isso ajuda a entender por que conquistar não encerra automaticamente o querer." },

    { tipo: "titulo", texto: "Olhar para cima e olhar para baixo" },
    { tipo: "paragrafo", texto: "A escada infinita tem dois movimentos. O primeiro é automático: olhar para cima. O segundo precisa ser escolhido: olhar para trás." },
    { tipo: "paragrafo", texto: "Quando estamos obcecados com o próximo degrau, esquecemos que estamos de pé sobre algo que antes parecia difícil. Não se trata de viver de passado. É calibrar percepção." },
    { tipo: "paragrafo", texto: "Sem isso, uma pessoa pode avançar muito e experimentar apenas insuficiência. Ela sempre compara o presente com o futuro desejado. Nunca com o passado real." },

    { tipo: "titulo", texto: "Isaías e o cansaço" },
    { tipo: "paragrafo", texto: "Isaías 40:29-31 fala de força renovada e usa imagens de correr e caminhar sem desfalecer. É uma passagem que gosto justamente porque reconhece cansaço antes de falar de renovação. Não promete que a pessoa nunca se cansa. Começa com gente cansada." },
    { tipo: "paragrafo", texto: "Isso faz diferença. A escada não precisa ser uma narrativa de performance infinita. Pode ser também um convite para distinguir pausa de desistência. Há degraus que exigem esforço. Há momentos que exigem descanso. Talvez maturidade seja não confundir um com o outro." },

    { tipo: "titulo", texto: "O problema não é ter próximo degrau" },
    { tipo: "paragrafo", texto: "Eu não quero chegar à conclusão de que ambição é um erro. Gosto de construir. Gosto da sensação de avançar. Quero fazer coisas maiores do que as que consigo fazer hoje." },
    { tipo: "paragrafo", texto: "O problema é pedir para o próximo degrau uma coisa que ele nunca prometeu: encerramento. Se eu disser “quando chegar lá, finalmente estarei em paz”, a escada pode se tornar cruel. Se eu disser “quero subir porque a subida também faz parte de quem escolho me tornar”, a relação muda." },
    { tipo: "paragrafo", texto: "Talvez o segredo não seja descobrir o último degrau. Talvez seja aprender a contemplar sem parar e subir sem imaginar que o próximo degrau vai salvar tudo." },

    { tipo: "titulo", texto: "A armadilha da gratidão como culpa" },
    { tipo: "paragrafo", texto: "Quando falamos em olhar para trás, existe um risco. Transformar gratidão em censura. “Você já conquistou tanto. Não deveria querer mais.”" },
    { tipo: "paragrafo", texto: "Não é isso. Reconhecer o degrau atual não exige abandonar o próximo. A contemplação não é uma ordem para ficar parado. É apenas a capacidade de não chamar de insuficiente tudo aquilo que um dia foi desejado." },

    { tipo: "titulo", texto: "O degrau que exige descer" },
    { tipo: "paragrafo", texto: "Nem toda progressão é vertical. Às vezes precisamos voltar a estudar algo básico. Ganhar menos para aprender outra função. Fechar um projeto. Mudar de cidade. Reduzir velocidade." },
    { tipo: "paragrafo", texto: "A escada real da vida não é tão limpa quanto a da capa. Existem desvios. Patamares. Degraus quebrados. Trechos em que descemos para alcançar outra direção." },

    { tipo: "titulo", texto: "Quando o próximo degrau é descanso" },
    { tipo: "paragrafo", texto: "Em culturas de alta performance, descanso costuma aparecer como ferramenta para voltar a produzir. “Descanse para render mais.” Talvez isso ainda seja uma forma de transformar tudo em produção." },
    { tipo: "paragrafo", texto: "Existem momentos em que descanso não precisa justificar sua existência. É parte da vida. Isaías 40 não celebra a força humana sem limite. A força é renovada. A imagem começa na insuficiência. Isso coloca o cansaço em outro lugar: não como falha moral, mas como condição humana." },
    { tipo: "paragrafo", texto: "Talvez alguns degraus sejam subidos justamente quando paramos de fingir que não cansamos." },

    { tipo: "exercicio", texto: "Olhe para uma coisa que hoje parece normal na sua vida. Em algum momento ela foi um objetivo? Quanto tempo você permitiu que a conquista fosse reconhecida antes de transformar o próximo degrau em obrigação?" }
  ]
};
