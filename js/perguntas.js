// Parte 2: duas narrativas com destinos explícitos em proxima.
// Trocas de caminho e Game Over permanecem planejados, mas desativados.
export const perguntas = [
  { // 0 — pergunta inicial
    caminho: "inicio",
    enunciado:
      "Após o naufrágio da excursão, você chega a uma ilha. " +
      "Na mochila há um aparelho com inteligência artificial, " +
      "capaz de criar textos, imagens e vozes. O que fazer?",
    alternativas: [
      {
        texto: "Experimentar a IA e descobrir como ela pode ajudar na ilha.",
        afirmacao: ["Decidiu experimentar a inteligência artificial."],
        tipo: "entrada",
        proxima: 1,
      },
      {
        texto: "Entender os riscos antes de depender dela para sobreviver.",
        afirmacao: ["Decidiu investigar os riscos da inteligência artificial."],
        tipo: "entrada",
        proxima: 2,
      },
    ],
  },
  { // 1 — A1: início da experimentação
    caminho: "A",
    enunciado:
      "Você decide experimentar a ferramenta. Sua turma precisa " +
      "encontrar água potável e marcar uma rota segura. Como começar?",
    alternativas: [
      {
        texto: "Testar a explicação da IA sobre fontes de água e separar o que conferir.",
        afirmacao: ["Testou uma explicação e separou dúvidas para conferir."],
        tipo: "avancar",
        proxima: 3,
      },
      {
        texto: "Usar o mapa da ilha já conferido pela equipe e preparar uma demonstração.",
        afirmacao: ["Usou a pesquisa da aula para planejar um exemplo."],
        tipo: "salto",
        proxima: 4,
      },
      {
        texto: "Investigar uma transmissão suspeita recebida no acampamento.",
        afirmacao: ["Decidiu investigar um áudio que circulava no bairro."],
        tipo: "trocar",
        proxima: 2,
        disponivel: false,
      },
    ],
  },
  { // 2 — B1: início da investigação
    caminho: "B",
    enunciado:
      "Antes de usar a IA, você procura entender seus riscos. " +
      "O rádio capta um áudio suspeito atribuído à diretora da escola, " +
      "dizendo que não haverá resgate. O que fazer?",
    alternativas: [
      {
        texto: "Procurar a origem do áudio antes de espalhar a notícia.",
        afirmacao: ["Procurou a origem do áudio antes de compartilhar."],
        tipo: "avancar",
        proxima: 7,
      },
      {
        texto: "Consultar o canal oficial da escola e da equipe de resgate.",
        afirmacao: ["Consultou a escola diretamente antes de agir."],
        tipo: "salto",
        proxima: 8,
      },
      {
        texto: "Levar o caso para a demonstração de IA do grupo.",
        afirmacao: ["Levou o caso para o trabalho escolar sobre IA."],
        tipo: "trocar",
        proxima: 1,
        disponivel: false,
      },
    ],
  },
  { // 3 — A2: conferir informações
    caminho: "A",
    enunciado:
      "A IA indica um possível riacho, mas não cita fontes. " +
      "Qual atitude você toma?",
    alternativas: [
      {
        texto: "Conferir sinais no terreno e fontes confiáveis antes de levar o grupo.",
        afirmacao: ["Conferiu fontes antes de planejar a demonstração."],
        tipo: "avancar",
        proxima: 4,
      },
      {
        texto: "Refazer o teste inicial com uma pergunta mais clara.",
        afirmacao: ["Retomou o teste inicial com uma pergunta mais clara."],
        tipo: "salto",
        proxima: 1,
      },
      {
        texto: "Inventar a origem do riacho e mandar todos até lá.",
        afirmacao: ["Inventou uma fonte para sustentar a resposta."],
        tipo: "gameover",
        disponivel: false,
      },
    ],
  },
  { // 4 — A3: planejar a demonstração
    caminho: "A",
    enunciado:
      "Você vai mostrar aos colegas como a IA produz respostas e mapas. " +
      "Como preparar o exemplo?",
    alternativas: [
      {
        texto: "Montar um mapa fictício e pedir que outro sobrevivente revise.",
        afirmacao: ["Preparou um exemplo fictício para revisão."],
        tipo: "avancar",
        proxima: 5,
      },
      {
        texto: "Usar uma rota já conferida pela equipe e organizar a demonstração.",
        afirmacao: ["Escolheu um exemplo já revisado em aula."],
        tipo: "salto",
        proxima: 6,
      },
      {
        texto: "Usar as mensagens do rádio para orientar outro acampamento.",
        afirmacao: ["Decidiu colaborar com a orientação dos moradores."],
        tipo: "trocar",
        proxima: 8,
        disponivel: false,
      },
    ],
  },
  { // 5 — A4: revisar o material
    caminho: "A",
    enunciado:
      "Uma colega aponta que sua demonstração não explica os limites " +
      "da IA para localizar água. O que você faz?",
    alternativas: [
      {
        texto: "Explicar que as respostas da IA precisam ser conferidas antes de orientar o grupo.",
        afirmacao: ["Acrescentou os limites da ferramenta ao material."],
        tipo: "avancar",
        proxima: 6,
      },
      {
        texto: "Voltar à conferência da rota e revisar os sinais encontrados.",
        afirmacao: ["Voltou à conferência das fontes para revisar o material."],
        tipo: "salto",
        proxima: 3,
      },
      {
        texto: "Divulgar a localização exata e os dados dos colegas sem autorização.",
        afirmacao: ["Expôs dados pessoais dos colegas sem autorização."],
        tipo: "gameover",
        disponivel: false,
      },
    ],
  },
  { // 6 — A5: organizar a apresentação
    caminho: "A",
    enunciado:
      "Antes de apresentar o plano de busca à equipe, " +
      "como você organiza as informações?",
    alternativas: [
      {
        texto: "Organizar o mapa, as fontes consultadas e os cuidados para buscar água.",
        afirmacao: ["Organizou o exemplo, as fontes e os cuidados necessários."],
        tipo: "avancar",
        proxima: 11,
      },
      {
        texto: "Voltar à revisão dos limites da IA para corrigir o plano.",
        afirmacao: ["Retomou a revisão para melhorar a explicação dos limites."],
        tipo: "salto",
        proxima: 5,
      },
      {
        texto: "Levar o material para outro grupo de sobreviventes.",
        afirmacao: ["Decidiu levar o material ao encontro dos moradores."],
        tipo: "trocar",
        proxima: 10,
        disponivel: false,
      },
    ],
  },
  { // 7 — B2: conferir a origem do áudio
    caminho: "B",
    enunciado:
      "O áudio não tem uma origem identificada. " +
      "Como continuar a investigação?",
    alternativas: [
      {
        texto: "Sintonizar o canal oficial da escola e da equipe de resgate.",
        afirmacao: ["Consultou os canais oficiais da escola."],
        tipo: "avancar",
        proxima: 8,
      },
      {
        texto: "Retomar a busca inicial e procurar outras versões do áudio.",
        afirmacao: ["Retomou a busca pela origem e por outras versões do áudio."],
        tipo: "salto",
        proxima: 2,
      },
      {
        texto: "Acusar outro sobrevivente sem qualquer prova.",
        afirmacao: ["Acusou um colega publicamente sem provas."],
        tipo: "gameover",
        disponivel: false,
      },
    ],
  },
  { // 8 — B3: planejar a orientação
    caminho: "B",
    enunciado:
      "A escola confirma pelo rádio que o áudio é falso. " +
      "Você decide ajudar os sobreviventes a verificar informações. Como agir?",
    alternativas: [
      {
        texto: "Preparar um aviso de segurança e conferir as orientações antes de divulgar.",
        afirmacao: ["Preparou uma campanha para orientar os moradores."],
        tipo: "avancar",
        proxima: 9,
      },
      {
        texto: "Usar o comunicado confirmado pela escola e organizar um encontro no acampamento.",
        afirmacao: ["Escolheu o comunicado revisado pela escola para o encontro."],
        tipo: "salto",
        proxima: 10,
      },
      {
        texto: "Transformar a checagem do áudio em uma demonstração para a equipe.",
        afirmacao: ["Decidiu transformar o caso em uma demonstração escolar."],
        tipo: "trocar",
        proxima: 4,
        disponivel: false,
      },
    ],
  },
  { // 9 — B4: revisar a campanha
    caminho: "B",
    enunciado:
      "Na revisão das orientações, surge uma dúvida sobre a origem " +
      "do áudio. Como você responde?",
    alternativas: [
      {
        texto: "Separar os fatos confirmados das informações ainda desconhecidas.",
        afirmacao: ["Separou os fatos confirmados das informações desconhecidas."],
        tipo: "avancar",
        proxima: 10,
      },
      {
        texto: "Voltar à investigação para conferir a mensagem novamente.",
        afirmacao: ["Retomou a investigação para conferir a origem do áudio."],
        tipo: "salto",
        proxima: 7,
      },
      {
        texto: "Criar um falso aviso de resgate e espalhá-lo pelo acampamento.",
        afirmacao: ["Criou e divulgou outro áudio falso como verdadeiro."],
        tipo: "gameover",
        disponivel: false,
      },
    ],
  },
  { // 10 — B5: organizar o encontro
    caminho: "B",
    enunciado:
      "Você prepara um encontro no acampamento para os sobreviventes. " +
      "O que fazer antes de apresentar o material?",
    alternativas: [
      {
        texto: "Organizar o esclarecimento da escola e as dicas para verificar alertas.",
        afirmacao: ["Organizou o esclarecimento e as dicas de verificação."],
        tipo: "avancar",
        proxima: 12,
      },
      {
        texto: "Voltar à revisão para melhorar as orientações do acampamento.",
        afirmacao: ["Voltou à revisão das orientações da campanha."],
        tipo: "salto",
        proxima: 9,
      },
      {
        texto: "Expor conversas privadas dos colegas sem autorização.",
        afirmacao: ["Expôs conversas privadas de moradores sem autorização."],
        tipo: "gameover",
        disponivel: false,
      },
    ],
  },
  { // 11 — continuidade A
    caminho: "A",
    pausa: true,
    enunciado:
      "Seu guia para localizar água e usar a IA com responsabilidade " +
      "está pronto para compartilhar com a turma. O próximo desafio " +
      "será apresentar o plano.",
    alternativas: [],
  },
  { // 12 — continuidade B
    caminho: "B",
    pausa: true,
    enunciado:
      "Seu material para verificar o áudio e orientar outros grupos " +
      "está pronto. O próximo desafio será conversar com os " +
      "sobreviventes do acampamento.",
    alternativas: [],
  },
];