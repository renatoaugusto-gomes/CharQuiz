// data/princesas.js
export const quizData = {
  titulo: "Qual princesa da Disney você seria?",
  personagens: {
    Elsa: [],
    Anna: [],
    Moana: [],
    Rapunzel: [],
    Cinderela: [],
    Bela: [],
    "Branca de Neve": [],
    Aurora: [],
    Ariel: [],
    Mulan: [],
    Pocahontas: [],
    Merida: [],
    Tiana: [],
    Jasmine: [],
    Raya: [],
    Penelope: []
  },
  perguntas: [
    {
      texto: "Como você reage ao assumir uma grande responsabilidade?",
      opcoes: [
        { texto: "Assumo com confiança e frieza, mesmo com medo.", personagens: ["Elsa"] },
        { texto: "Me empolgo e ajo rápido, talvez até demais.", personagens: ["Anna"] },
        { texto: "Dou um passo de cada vez, focada e com muito esforço.", personagens: ["Tiana"] },
        { texto: "Tento liderar com coragem, mesmo sem saber tudo.", personagens: ["Moana"] }
      ]
    },
    {
      texto: "Você se vê mais como...",
      opcoes: [
        { texto: "Uma sonhadora que vê beleza até nas dificuldades.", personagens: ["Cinderela", "Bela"] },
        { texto: "Uma estrategista que pensa antes de agir.", personagens: ["Mulan", "Raya"] },
        { texto: "Uma aventureira movida pela curiosidade.", personagens: ["Rapunzel", "Ariel"] },
        { texto: "Uma defensora do que acredita, mesmo contra tudo.", personagens: ["Merida", "Pocahontas"] }
      ]
    },
    {
      texto: "Diante de um desafio físico ou mental, você...",
      opcoes: [
        { texto: "Vai com tudo, sem pensar duas vezes.", personagens: ["Merida", "Penelope"] },
        { texto: "Analisa a melhor estratégia antes.", personagens: ["Mulan", "Raya"] },
        { texto: "Hesita, mas encara com coragem.", personagens: ["Elsa", "Rapunzel"] },
        { texto: "Busca ajuda e trabalha em grupo.", personagens: ["Anna", "Moana"] }
      ]
    },
    {
      texto: "O que mais te descreve em um grupo de amigos?",
      opcoes: [
        { texto: "A engraçada e espontânea.", personagens: ["Penelope", "Anna"] },
        { texto: "A cuidadosa e gentil.", personagens: ["Aurora", "Branca de Neve"] },
        { texto: "A líder decidida.", personagens: ["Moana", "Raya"] },
        { texto: "A conselheira sábia.", personagens: ["Pocahontas", "Bela"] }
      ]
    },
    {
      texto: "Quando está apaixonada(o), você costuma ser...",
      opcoes: [
        { texto: "Romântica e sonhadora.", personagens: ["Aurora", "Ariel"] },
        { texto: "Protetora e leal.", personagens: ["Anna", "Mulan"] },
        { texto: "Confiante e determinada.", personagens: ["Jasmine", "Tiana"] },
        { texto: "Discreta e introspectiva.", personagens: ["Elsa", "Pocahontas"] }
      ]
    },
    {
      texto: "Em momentos de crise, sua primeira reação é...",
      opcoes: [
        { texto: "Agir por impulso.", personagens: ["Anna", "Ariel", "Penelope"] },
        { texto: "Controlar as emoções e pensar racionalmente.", personagens: ["Elsa", "Bela"] },
        { texto: "Tentar unir todos e resolver juntos.", personagens: ["Moana", "Mulan"] },
        { texto: "Isolar-se para refletir.", personagens: ["Raya", "Pocahontas"] }
      ]
    },
    {
      texto: "Qual dessas palavras mais combina com você?",
      opcoes: [
        { texto: "Determinação", personagens: ["Tiana", "Raya", "Moana"] },
        { texto: "Rebeldia", personagens: ["Merida", "Jasmine", "Ariel"] },
        { texto: "Doçura", personagens: ["Branca de Neve", "Aurora"] },
        { texto: "Inteligência", personagens: ["Bela", "Penelope", "Jasmine"] }
      ]
    },
    {
      texto: "Como você lida com regras?",
      opcoes: [
        { texto: "Questiona tudo e busca seu próprio caminho.", personagens: ["Ariel", "Merida", "Jasmine"] },
        { texto: "Segue por respeito, mesmo que não concorde.", personagens: ["Cinderela", "Bela"] },
        { texto: "Busca equilíbrio entre respeitar e mudar.", personagens: ["Moana", "Mulan"] },
        { texto: "Cria suas próprias regras com sabedoria.", personagens: ["Pocahontas", "Raya"] }
      ]
    },
    {
      texto: "Qual dessas situações te atrai mais?",
      opcoes: [
        { texto: "Explorar um mundo novo.", personagens: ["Ariel", "Moana", "Rapunzel"] },
        { texto: "Defender quem você ama.", personagens: ["Mulan", "Anna", "Elsa"] },
        { texto: "Viver uma linda história de amor.", personagens: ["Cinderela", "Aurora", "Jasmine"] },
        { texto: "Ser livre para fazer o que quiser.", personagens: ["Merida", "Penelope"] }
      ]
    },
    {
      texto: "O que você faz quando alguém te subestima?",
      opcoes: [
        { texto: "Mostra com atitudes que estavam errados.", personagens: ["Tiana", "Jasmine"] },
        { texto: "Tenta entender e perdoar.", personagens: ["Branca de Neve", "Cinderela"] },
        { texto: "Luta para provar seu valor.", personagens: ["Mulan", "Moana"] },
        { texto: "Ignora e segue em frente.", personagens: ["Elsa", "Raya"] }
      ]
    },
    {
      texto: "Em um conflito entre amigos, você...",
      opcoes: [
        { texto: "Tenta mediar com empatia.", personagens: ["Moana", "Pocahontas"] },
        { texto: "Fica na sua e reflete sobre tudo.", personagens: ["Elsa", "Aurora"] },
        { texto: "Parte para o confronto, se necessário.", personagens: ["Merida", "Jasmine"] },
        { texto: "Usa humor para quebrar o clima.", personagens: ["Anna", "Penelope"] }
      ]
    },
    {
      texto: "Você se sente mais viva quando...",
      opcoes: [
        { texto: "Está criando algo novo.", personagens: ["Rapunzel", "Penelope"] },
        { texto: "Está na natureza, em liberdade.", personagens: ["Moana", "Pocahontas"] },
        { texto: "Está com quem ama.", personagens: ["Anna", "Branca de Neve"] },
        { texto: "Está enfrentando desafios.", personagens: ["Mulan", "Raya"] }
      ]
    },
    {
      texto: "Em uma jornada, qual papel você assumiria?",
      opcoes: [
        { texto: "A mente estratégica.", personagens: ["Mulan", "Raya"] },
        { texto: "A emoção que une o grupo.", personagens: ["Anna", "Moana"] },
        { texto: "A rebelde com ideias próprias.", personagens: ["Merida", "Ariel"] },
        { texto: "A discreta que surpreende.", personagens: ["Elsa", "Pocahontas"] }
      ]
    },
    {
      texto: "O que você valoriza mais em si mesma?",
      opcoes: [
        { texto: "Coragem", personagens: ["Moana", "Mulan", "Merida"] },
        { texto: "Gentileza", personagens: ["Aurora", "Branca de Neve", "Cinderela"] },
        { texto: "Inteligência", personagens: ["Bela", "Tiana", "Jasmine"] },
        { texto: "Lealdade", personagens: ["Anna", "Elsa", "Penelope"] }
      ]
    },
    {
      texto: "Qual dessas fraquezas você reconhece em si?",
      opcoes: [
        { texto: "Ser impulsiva demais.", personagens: ["Ariel", "Merida", "Anna"] },
        { texto: "Ser reservada ou emocionalmente contida.", personagens: ["Elsa", "Raya"] },
        { texto: "Confiar rápido demais.", personagens: ["Branca de Neve", "Rapunzel"] },
        { texto: "Ser muito idealista.", personagens: ["Aurora", "Pocahontas"] }
      ]
    },
    {
      texto: "O que mais te motiva?",
      opcoes: [
        { texto: "A vontade de mudar o mundo.", personagens: ["Moana", "Pocahontas"] },
        { texto: "O desejo de ser livre.", personagens: ["Merida", "Jasmine"] },
        { texto: "O amor pelas pessoas.", personagens: ["Anna", "Cinderela"] },
        { texto: "O desafio de provar quem você é.", personagens: ["Mulan", "Tiana"] }
      ]
    }
  ]
};
