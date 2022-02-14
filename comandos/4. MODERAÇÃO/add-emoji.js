module.exports = {
 name: "addemoji",
 code: `
 Emoji $addEmoji[https://cdn.discordapp.com/emojis/$replaceText[$replaceText[$checkCondition[$checkContains[$message[1];<]$checkContains[$message[1];:]$checkContains[$message[1];>]==truetruetrue]$isNumber[$message[1]];truefalse;$replaceText[$advancedTextSplit[$message[1];:;3];>;]];falsetrue;$message[1]];$message[2];yes] ✔ — <@$authorID> emoji adicionado com sucesso! codenome: **$message[2]**
 $onlyIf[$charCount[$message[2]]>=2;❌ — <@4authorID> voce deve colocar um nome maior que  \`2 caracteres\`**]
 $onlyIf[$message[2]!=;**📝 — Forma correta de utilizar o comando**: \`$getServerVar[prefixo]addemoji\` <emoji | emojiID> <nome>]
$onlyPerms[manageemojis;****]
$onlyBotPerms[manageemojis;**❌ — <@4authorID> voce não tem permissão para utilizar este comando]`

}