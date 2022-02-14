module.exports = {
name: "prunestatus",
code: `
Punindo membros inativos:
$pruneMembers[$message[1;30];$guildID;$reason[$message];$message] membros!
`
}