module.exports= {
  name:"botinfo",
  type: "interaction",
  prototype: "slash",
	code: `
$interactionReply[
<@$authorID>
$color[1;ORANGE]
$description[1;
$title[1;<:emoji_1:922917814183014431> Sam Doherty — Informações Gerais]
Opa, Yay <@$authorID>! tudo em cima?

Meu nome é Sam! um BOT desenvolvido no Brasil para ajudar servidores e usuários, conto com $commandsCount comandos nas áreas de Moderação, Administração, Entretenimento e muitos outros. Eu quero ser seu assistente, aliás foi para isso que fui criado, para te auxiliar com tarefas do dia a dia, te ajudar com aquelas tarefas que voce sempre esquece, guardar arquivos importantes para voce, te fazer lembretes e muito mais!
Atualmente estou tentando crescer, e ser conhecido, quer me ajudar com isso? use: \`$getServerVar[prefixo]invite\`


⏰ ** — Online há exatamente:**  \`$uptime\`

☎ ** — Auxiliando diariamente, com todo prazer do universo $allMembersCount usuários.**

📚 ** — Library**
Feito em [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) usando a biblioteca [Aoi.Js](https://aoi.js.org).

$addButton[1;Invite BOT;link;https://discord.com/oauth2/authorize?client_id=912033962782765079&scope=bot%20applications.commands&permissions=2147483647;false]
$addButton[1;Suporte;link;https://discord.com/;false]
$addButton[1;Comunidade;link;https://discord.com/;false]]`

}