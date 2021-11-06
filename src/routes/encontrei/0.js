const { db } = require("../../models/banco");
const {mydb}=require('../../models/mydb')

async function execute(user, msg, name, client, message) {
    client.sendText(user, `Dono do Pet: ${mydb[msg].user_name}\nContato: ${mydb[msg].user_contact}\nEndereço: ${mydb[msg].user_address}`)
}

exports.execute = execute;
