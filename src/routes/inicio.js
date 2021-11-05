const { db } = require("../models/banco")
const {bt_init}=require("../inc/buttons/bt_init")

async function execute(user, msg, name, client, message) {
  
  await client.sendButtons(user, `Olá ${name}`,bt_init, `Oque deseja?`)
}

exports.execute = execute;
