var stages = {
  //normal routes
  0: {
    desc: "Início",
    obj: require("../routes/0"),
  },

  'callback': {
    desc: "Escolher routes",
    obj: require("../routes/callback"),
  },

  //cadastro
  'cadastrar0': {
    desc: "Cadastro - Rota 0",
    obj: require("../routes/cadastrar/0"),
  },
  //encontrei
  'encontrei0': {
    desc: "Encontrei - Rota 0",
    obj: require("../routes/encontrei/0"),
  },

};
exports.step = stages;
