const bot = require("venom-bot");
const { db } = require("./src/models/banco");
const { step } = require("./src/models/stages");
const { getStage } = require("./src/scripts/getStage");

bot.create().then((client) => start(client));

function start(client) {
  //anti ligaçoes
  client.onIncomingCall(async (call) => {
    console.log("Ligação recusada de: "+parseFloat(call.peerJid));
    client.sendText(call.peerJid, "Desculpe, não posso atender ligações.").then(async ()=>{client.blockContact(call.peerJid);})

    setInterval(async () => {
      await client.unblockContact(call.peerJid);
    }, 1000);
  });
  client.onMessage((message) => {
    console.log(message.from);
    let resp = step[getStage(message.from)].obj.execute(
      message.from,
      message.body,
      message.sender.name,
      client,
      message
    );
    for (let index = 0; index < resp.length; index++) {
      const element = resp[index];
      client.sendText(message.from, element);
    }
  });
}
