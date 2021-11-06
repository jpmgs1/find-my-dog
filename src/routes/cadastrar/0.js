const { db } = require("../../models/banco");

async function execute(user, msg, name, client, message) {
  db[user].name = msg.toUpperCase();
  db[user].stage = 'cadastrar1'
  client.sendText(user, `Digite seu numero de telefone, pode ser o mesmo do WhatsApp:\nEx: 13996597134`)
}

exports.execute = execute;
