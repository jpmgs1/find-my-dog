const { db } = require("../models/banco");

function getStage(user, msg, contato, client, message) {
  console.log(db[user]);

  if (db[user]) {
    return db[user].stage;
  } else {
    db[user] = {
      stage: 'inicio',
      itens: [],
      preload: [],
      total: 0,
    };
    return db[user].stage;
  }
}
exports.getStage = getStage;
