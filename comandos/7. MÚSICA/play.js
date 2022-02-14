module.exports = ({
  name: "play",
  aliases: ['p', 'tocar'],
  code: `
$description[1;Adicionada a lista de reprodução: $playSong[$message;1m]]
$color[1;ORANGE]
$footer[1;Executado por $username!]
$title[1;<:emoji_2:925204593774854204> — Dream Rádio Center]
$onlyIf[$voiceID!=; **🔌 — <@$authorID> Você precisa estár em um Canal de Voz primeiro!**]
  `
})