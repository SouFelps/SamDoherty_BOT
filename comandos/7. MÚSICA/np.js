module.exports = {
  name:"np",
  code: `$title[1;<:emoji_2:925204593774854204> — Dream Rádio Center
  $songInfo[title]]
   $thumbnail[$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;thumbnail;]]
  $addField[URL:;$songInfo[url]]
  $addField[Duração:;$songInfo[duration]]
  $addField[Socilicitado por:;$userTag[$songInfo[userID]]]
  $color[ORANGE]

$addButton[1;Pular;danger;danger;false]`
}, {
name: "Pular",
type: "interaction",
prototype: "button",
code: `$interactionReply[$skipSong(red)]`
}
