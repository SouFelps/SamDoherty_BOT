module.exports = {
 name: "loop",
 aliases: ['repetir'],
 code: `
 $if[$message[1]==song]
 $loopSong
 $title[<:emoji_2:925204593774854204> — Dream Rádio Center]
 $description[repetição ativada!]
 $color[ORANGE]
 
 $elseIf[$message[1]==queue]
 $loopQueue
 $title[<:emoji_2:925204593774854204> — Dream Rádio Center]
 $description[repetição ativada para esta Playlist!]
 $color[ORANGE]
 $endelseIf
 $elseIf[$message[1]==stop]
 $loopSong
 $title[<:emoji_2:925204593774854204> — Dream Rádio Center]
 $description[Status de repetição parado!]
 $endelseIf
 $elseIf[$message[1]==stopq]
 $loopQueue
 $description[Status de repetição parado!]
 $endelseIf
 $endif
 $argsCheck[>1;Voce quercolocar em loop está música, ou a playlist? me forneça um argumento por favor! (**song** ou **queue**)!]
 `
 
  
}