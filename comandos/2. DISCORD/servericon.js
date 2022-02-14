module.exports = {
 name: "servericon",
 type: "interaction",
  prototype: "slash",
 code: 
 `
 $interactionReply[$reply[$messageID; **$serverName**$image[1;$replaceText[$serverIcon[$guildID;2048];.webp;.png]]
$color[1;ORANGE]]]`

}