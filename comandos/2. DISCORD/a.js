$onlyIf[$message[1]!=;<@$authorID> {title: <:emoji_1:922917814183014431> Sam Doherty }{description:
 <:emoji_28:934528731119251526> \`$getServerVar[prefixo]diga\`  
Faça eu falar alguma coisa! Oque você quiser!

📚 **Exemplos**
🔸 Envia uma mensagem no canal no qual o comando foi utilizado. \`$getServerVar[prefixo]diga\` Olá mundo!
🔸 Envia uma mensagem no canal que foi mencionado.
\`$getServerVar[prefixo]diga\` \`#ChannelMentioned\` Olá mundo!
🔸 Envia uma mensagem em outro canal pelo ID.
d!say 297732013006389252 Olá mundo!}{color:ORANGE}
$suppressErrors[🔌 — <@$authorID> Algo deu extremamente errado! Eitcha, não era para isso estar acontecendo...]]
`
},{
  name: "teste",
  aliases: ['falar','dizer','diga','fale','say'],
  code: `
  $channelSendMessage[ChannelID;$message;yes]