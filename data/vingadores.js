// data\vingadores.js
export const quizData = {
  titulo: "Qual Vingador você seria?",
  personagens: {
    "Homem de Ferro": {
      imagem: "vingadores.img/homem-de-ferro.jpg"
    },
    "Capitão América": {
      imagem: "vingadores.img/capitao-america.jpg"
    },
    "Thor": {
      imagem: "vingadores.img/thor.jpg"
    },
    "Hulk": {
      imagem: "vingadores.img/hulk.jpg"
    },
    "Viúva Negra": {
      imagem: "vingadores.img/viuva-negra.jpg"
    },
    "Gavião Arqueiro": {
      imagem: "vingadores.img/gaviao-arqueiro.jpg"
    },
    "Feiticeira Escarlate": {
      imagem: "vingadores.img/feiticeira-escarlate.jpg"
    },
    "Pantera Negra": {
      imagem: "vingadores.img/pantera-negra.jpg"
    },
    "Homem-Aranha": {
      imagem: "vingadores.img/homem-aranha.jpg"
    },
    "Doutor Estranho": {
      imagem: "vingadores.img/doutor-estranho.jpg"
    },
    "Homem-Formiga": {
      imagem: "vingadores.img/homem-formiga.jpg"
    },
    "Capitã Marvel": {
      imagem: "vingadores.img/capita-marvel.jpg"
    },
    "Falcão": {
      imagem: "vingadores.img/falcao.jpg"
    },
    "Soldado Invernal": {
      imagem: "vingadores.img/soldado-invernal.jpg"
    },
    "Máquina de Combate": {
      imagem: "vingadores.img/maquina-de-combate.jpg"
    }
  },
  perguntas: [
    {
      texto: "Quando surge um problema difícil, o que você faz?",
      opcoes: [
        { texto: "Analiso a situação com lógica antes de agir.", personagens: ["Homem de Ferro", "Hulk", "Doutor Estranho", "Máquina de Combate"] },
        { texto: "Confio no meu instinto e tomo uma decisão rápida.", personagens: ["Thor", "Capitã Marvel", "Gavião Arqueiro", "Feiticeira Escarlate"] },
        { texto: "Penso nas consequências para os outros antes de decidir.", personagens: ["Capitão América", "Pantera Negra", "Falcão", "Homem-Aranha"] },
        { texto: "Sigo meu coração, mesmo se parecer irracional.", personagens: ["Feiticeira Escarlate", "Homem-Formiga", "Soldado Invernal", "Viúva Negra"] }
      ]
    },
    {
      texto: "Como você se descreveria em uma palavra?",
      opcoes: [
        { texto: "Determinado.", personagens: ["Capitão América", "Viúva Negra", "Capitã Marvel", "Soldado Invernal"] },
        { texto: "Engraçado.", personagens: ["Homem-Formiga", "Homem-Aranha", "Thor", "Gavião Arqueiro"] },
        { texto: "Estratégico.", personagens: ["Viúva Negra", "Doutor Estranho", "Pantera Negra", "Máquina de Combate"] },
        { texto: "Emocional.", personagens: ["Feiticeira Escarlate", "Hulk", "Soldado Invernal", "Falcão"] }
      ]
    },
    {
      texto: "Qual é sua principal motivação?",
      opcoes: [
        { texto: "Proteger as pessoas que amo.", personagens: ["Homem-Aranha", "Feiticeira Escarlate", "Gavião Arqueiro", "Soldado Invernal"] },
        { texto: "Cumprir meu dever com honra.", personagens: ["Capitão América", "Pantera Negra", "Máquina de Combate", "Falcão"] },
        { texto: "Descobrir meu potencial e evoluir.", personagens: ["Homem de Ferro", "Doutor Estranho", "Hulk", "Capitã Marvel"] },
        { texto: "Me divertir enquanto faço a coisa certa.", personagens: ["Homem-Formiga", "Thor", "Homem-Aranha", "Gavião Arqueiro"] }
      ]
    },
        {
      texto: "Em um grupo, você é mais...",
      opcoes: [
        { texto: "O líder.", personagens: ["Capitão América", "Pantera Negra", "Homem de Ferro", "Capitã Marvel"] },
        { texto: "O estrategista silencioso.", personagens: ["Viúva Negra", "Máquina de Combate", "Doutor Estranho", "Soldado Invernal"] },
        { texto: "O braço forte.", personagens: ["Thor", "Hulk", "Capitã Marvel", "Soldado Invernal"] },
        { texto: "O piadista que quebra o clima tenso.", personagens: ["Homem-Aranha", "Homem-Formiga", "Gavião Arqueiro", "Thor"] }
      ]
    },
    {
      texto: "Como você age em situações emocionais?",
      opcoes: [
        { texto: "Tenta manter o controle a todo custo.", personagens: ["Hulk", "Pantera Negra", "Doutor Estranho", "Viúva Negra"] },
        { texto: "Explode ou reage impulsivamente.", personagens: ["Thor", "Feiticeira Escarlate", "Homem de Ferro", "Homem-Formiga"] },
        { texto: "Fica mais quieto e introspectivo.", personagens: ["Soldado Invernal", "Viúva Negra", "Hulk", "Falcão"] },
        { texto: "Fala abertamente e tenta resolver logo.", personagens: ["Capitão América", "Homem-Aranha", "Capitã Marvel", "Gavião Arqueiro"] }
      ]
    },
    {
      texto: "Em um confronto, sua maior arma é...",
      opcoes: [
        { texto: "Inteligência e tecnologia.", personagens: ["Homem de Ferro", "Doutor Estranho", "Máquina de Combate", "Homem-Formiga"] },
        { texto: "Força e poder.", personagens: ["Hulk", "Thor", "Capitã Marvel", "Feiticeira Escarlate"] },
        { texto: "Precisão e estratégia.", personagens: ["Viúva Negra", "Gavião Arqueiro", "Pantera Negra", "Capitão América"] },
        { texto: "Agilidade e improviso.", personagens: ["Homem-Aranha", "Homem-Formiga", "Falcão", "Soldado Invernal"] }
      ]
    },
    {
      texto: "Como você lida com o passado?",
      opcoes: [
        { texto: "Enfrento de frente e aprendo com ele.", personagens: ["Capitão América", "Pantera Negra", "Homem de Ferro", "Capitã Marvel"] },
        { texto: "Tento esconder e evitar lembrar.", personagens: ["Soldado Invernal", "Viúva Negra", "Hulk", "Doutor Estranho"] },
        { texto: "Me culpo, mas tento seguir em frente.", personagens: ["Feiticeira Escarlate", "Gavião Arqueiro", "Máquina de Combate", "Falcão"] },
        { texto: "Uso como motivação para proteger os outros.", personagens: ["Homem-Aranha", "Homem-Formiga", "Capitão América", "Falcão"] }
      ]
    },
    {
      texto: "Como é seu senso de humor?",
      opcoes: [
        { texto: "Sarcástico.", personagens: ["Homem de Ferro", "Doutor Estranho", "Viúva Negra", "Thor"] },
        { texto: "Leve e bobo.", personagens: ["Homem-Aranha", "Homem-Formiga", "Gavião Arqueiro", "Thor"] },
        { texto: "Quase inexistente, sou sério.", personagens: ["Capitão América", "Soldado Invernal", "Pantera Negra", "Máquina de Combate"] },
        { texto: "Depende da situação.", personagens: ["Falcão", "Capitã Marvel", "Feiticeira Escarlate", "Hulk"] }
      ]
    },
    {
      texto: "Qual desses valores é mais importante para você?",
      opcoes: [
        { texto: "Lealdade.", personagens: ["Falcão", "Máquina de Combate", "Gavião Arqueiro", "Capitão América"] },
        { texto: "Liberdade.", personagens: ["Capitã Marvel", "Thor", "Homem-Formiga", "Feiticeira Escarlate"] },
        { texto: "Justiça.", personagens: ["Pantera Negra", "Capitão América", "Viúva Negra", "Falcão"] },
        { texto: "Conhecimento.", personagens: ["Homem de Ferro", "Doutor Estranho", "Hulk", "Homem-Aranha"] }
      ]
    },
    {
      texto: "Você se sente mais confortável...",
      opcoes: [
        { texto: "Liderando uma equipe.", personagens: ["Capitão América", "Capitã Marvel", "Pantera Negra", "Homem de Ferro"] },
        { texto: "Trabalhando nos bastidores.", personagens: ["Viúva Negra", "Máquina de Combate", "Soldado Invernal", "Hulk"] },
        { texto: "Como parte de um grupo unido.", personagens: ["Homem-Aranha", "Falcão", "Gavião Arqueiro", "Homem-Formiga"] },
        { texto: "Sozinho, com independência.", personagens: ["Feiticeira Escarlate", "Thor", "Doutor Estranho", "Soldado Invernal"] }
      ]
    },
    {
      texto: "Se pudesse escolher um superpoder, qual seria?",
      opcoes: [
        { texto: "Controle mental/energético.", personagens: ["Feiticeira Escarlate", "Doutor Estranho", "Capitã Marvel", "Hulk"] },
        { texto: "Força sobre-humana.", personagens: ["Thor", "Hulk", "Capitã Marvel", "Soldado Invernal"] },
        { texto: "Tecnologia avançada.", personagens: ["Homem de Ferro", "Máquina de Combate", "Homem-Formiga", "Homem-Aranha"] },
        { texto: "Precisão absoluta.", personagens: ["Gavião Arqueiro", "Viúva Negra", "Pantera Negra", "Falcão"] }
      ]
    },
    {
      texto: "Como você se conecta com os outros?",
      opcoes: [
        { texto: "Com empatia e amizade.", personagens: ["Homem-Aranha", "Falcão", "Homem-Formiga", "Gavião Arqueiro"] },
        { texto: "Com respeito e liderança.", personagens: ["Capitão América", "Pantera Negra", "Capitã Marvel", "Homem de Ferro"] },
        { texto: "Com reserva e observação.", personagens: ["Soldado Invernal", "Viúva Negra", "Hulk", "Doutor Estranho"] },
        { texto: "Com intensidade emocional.", personagens: ["Feiticeira Escarlate", "Thor", "Hulk", "Viúva Negra"] }
      ]
    },
    {
      texto: "Em uma equipe, o que você mais valoriza?",
      opcoes: [
        { texto: "Disciplina.", personagens: ["Capitão América", "Máquina de Combate", "Pantera Negra", "Capitã Marvel"] },
        { texto: "Lealdade.", personagens: ["Gavião Arqueiro", "Falcão", "Viúva Negra", "Soldado Invernal"] },
        { texto: "Criatividade.", personagens: ["Homem de Ferro", "Homem-Formiga", "Homem-Aranha", "Doutor Estranho"] },
        { texto: "Liberdade.", personagens: ["Thor", "Feiticeira Escarlate", "Hulk", "Capitã Marvel"] }
      ]
    },
    {
      texto: "Qual sua maior fraqueza?",
      opcoes: [
        { texto: "Arrogância.", personagens: ["Homem de Ferro", "Thor", "Doutor Estranho", "Capitã Marvel"] },
        { texto: "Insegurança.", personagens: ["Homem-Aranha", "Hulk", "Soldado Invernal", "Feiticeira Escarlate"] },
        { texto: "Impulsividade.", personagens: ["Feiticeira Escarlate", "Homem-Formiga", "Thor", "Homem de Ferro"] },
        { texto: "Silêncio emocional.", personagens: ["Soldado Invernal", "Viúva Negra", "Hulk", "Doutor Estranho"] }
      ]
    },
    {
      texto: "Qual desses momentos seria mais emocionante pra você?",
      opcoes: [
        { texto: "Liderar uma batalha.", personagens: ["Capitão América", "Capitã Marvel", "Pantera Negra", "Homem de Ferro"] },
        { texto: "Salvar um ente querido.", personagens: ["Feiticeira Escarlate", "Gavião Arqueiro", "Homem-Aranha", "Falcão"] },
        { texto: "Fazer uma descoberta científica.", personagens: ["Homem de Ferro", "Hulk", "Doutor Estranho", "Homem-Aranha"] },
        { texto: "Provar seu valor para si mesmo.", personagens: ["Thor", "Soldado Invernal", "Viúva Negra", "Homem-Formiga"] }
      ]
    }
  ]
};