bot.guildJoinCommand({
channel: "Your Channel Id",
code: `
$title[1;I joined a New server!]
$addField[1;Guild Name#COLON#;$guildName;yes] 
$addField[1;Member Count#COLON#;$memberscount;yes]
$addField[1;Guild ID#COLON#;$guildID;yes]
$addField[1;Guild Owner#COLON#;$userTag[$ownerID];yes]
$color[1;RANDOM]`
})
bot.onGuildJoin()

bot.guildLeaveCommand({
channel: "Your Channel ID",
code: `
$title[1;I was Removed from server]
$addField[1;Guild Name#COLON#;$guildName;yes]
$addField[1;Member Count#COLON#;$memberscount;yes]
$addField[1;Guild ID#COLON#;$guildID;yes]
$addField[1;Guild Owner#COLON#;$userTag[$ownerID];yes]
$color[1;RANDOM]`
})
bot.onGuildLeave()
