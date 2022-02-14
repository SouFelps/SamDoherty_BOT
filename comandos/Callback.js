module.exports = {
 name: "send-dm", 
 type: "interaction",
 prototype : 'slash',
 code: `
 $interactionReply[$sendDM[{newEmbed:{title:You Recieved a DM!}{description:Someone sent you a dm!}{field:Author:<@$interactionData[author.id]> | $userTag[$interactionData[author.id]]}{field:Message:$interactionData[options.data[1].value]}};$interactionData[options.data[0].value]]
 $interactionReply[Successfully sent dm to **$userTag[$interactionData[options.data[0].value]]**. Message: **$interactionData[options.data[1].value]**;;;;yes]]
 `
 }
  bot.onInteractionCreate()