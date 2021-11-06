const { db } = require("../models/banco");

function getStage(user, msg, contato, client, message) {
  console.log(db[user]);

  if (db[user]) {
    return db[user].stage;
  } else {
    db[user] = {
      stage: 0,
      
      //dados
      user_name:'',
      user_num:'',
      user_address:'',
      pet_tag:'', //gerar automaticamente a partir do numero de telefone do dono
      pet_name:'',

    };
    return db[user].stage;
  }
}
exports.getStage = getStage;
