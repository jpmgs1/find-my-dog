const { db } = require("../models/banco");


async function execute(user, msg, name, client, message) {

    if(msg === "Encontrei um Pet"){
        db[user].stage = 'encontrei0';
        client.sendText(user, "OK, digite a Tag de identificação localizada na coleira:\n```Ex:12345678```")
    }
    if(msg === "Cadastrar meu Pet"){
        db[user].stage = 'cadastrar0';
        client.sendText(user, "OK, digite seu nome completo para iniciar o cadastro:")
    }

}

exports.execute = execute;
