module.exports = ({
  name: "volume",
  aliases: ['p', 'tocar'],
  code: `
$volume[$message]
$title[<:emoji_2:925204593774854204> — Dream Rádio Center]
$description[**Volume Alterado!**
 volume definido para **$message**.]
$onlyIf[$voiceID!=; **🔌 — <@$authorID> Você precisa estár em um Canal de Voz primeiro!**]
$color[ORANGE]
  `
})



