module.exports = [{ 
 name: 'criar-ticket',
 aliases: ['setup-t'],
 description: 'Setup a Ticket Channel',
 code: `
 $awaitMessages[$authorID;60s;everything;tsp2;Command has been cancelled]
 $sendMessage[**Which Category Do you want to make For Ticket System.
 Provide the Category ID. 
 This Command will be cancelled after** \`60 seconds\`.;no]
 $onlyPerms[admin;Only Users with \`ADMIN\` perms can use this{delete:10s}]
 $suppressErrors[]
`
}, {
 type: 'awaitedCommand',
 name: 'tsp2',
 code: `
**✅ Ticket Setup successfully!**
 $setServerVar[ticketchannel;$message]
 $onlyIf[$channelExists[$message]==true;Provided Category Doesn't Exist{delete:10s}]
 $onlyIf[$isNumber[$message]==true;Please provide Category ID{delete:10s}]
`
},{
name: "ticket", 
code: `
$description [Your Ticket successfully created✅!]
$deleteIn[5s]
$newTicket[ticket- $username; {description:Hello $username, Please tell us your Problem/s 
(To close the Ticket use *_$getServerVar[prefix]close_*)!};$getServerVar[ticketchannel];no;Error!]
$deleteCommand
`
},{
 name: "close",
 code: `$dm Vielen Dank für die Nutzung meines Ticket Systems, Dein Ticket auf $servername wurde erfolgreich geschlossen!
$closeTicket[This is not a ticket]
$onlyIf[$checkContains[$channelName;ticket;$channelName;application]==true;This command can only be used in tickets{delete:10s}]
$onlyPerms[admin;You need Admin Perms to use this.]
$suppressErrors
`
}]