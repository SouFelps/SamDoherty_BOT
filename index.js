const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token: process.env.TOKEN, //Discord Bot Token
prefix:  ['$getServerVar[prefixo]'], //Discord Bot Prefix
intents: ["GUILDS", "GUILD_MESSAGES"] //Discord Intents
})
const express = require('express');
const app = express();
app.get("/", (request, response) => {
    const ping = new Date();
    ping.setHours(ping.getHours() - 3);
    response.sendStatus(200);
});
app.listen(process.env.PORT);

//Variaveis

bot.variables({
prefixo: "d.",
})

bot.variables({
lang: "pt-br",
})

bot.variables({
lang: "en-us",
})

bot.variables({
addimage: "o",
})

bot.variables({
dinheiro: "0",
})

bot.variables({
meutexto: "voce pode mudar isso sabia?",
})


//Events

bot.onMessage()
bot.onInteractionCreate()

//Ready Event

bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
})

const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd,'./comandos/') 
