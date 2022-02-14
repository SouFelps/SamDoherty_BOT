module.exports = [{
name: "gstart",
 code: `
$setTimeout[gw;$get[sc]s;{
"cid":"$channelID",
"host":"$authorID",
"win":"$message[2]",
"mid":"$get[id]",
"prize":"$messageSlice[2]"
}]
$setMessageVar[host;$authorID;$get[id]]
$setMessageVar[win;$message[2];$get[id]]
$setMessageVar[prize;$messageSlice[2];$get[id]]
$let[sc;$splitText[1]$textSplit[$math[$get[p]/1000];.]]
$let[id;$sendMessage[Giveaway Start! {reactions:🎉} {newEmbed:{title:$messageSlice[2]} {description:End in: <t:$splitText[1]$textSplit[$math[($datestamp+$parseTime[$message[1]])/1000];.]:R>
Host: <@!$authorID>
Winner: $message[2]}};yes]]

$onlyIf[$messageSlice[2]!=;gifts must be given]
$onlyIf[$isNumber[$message[2]]==true; the winner given must be a number, and more than 0]
$onlyIf[$get[p]!=-1;The time given is invalid, please provide a valid time like \`1s, 1m, 1d.....\` the correct usage is: \`(prefix)gstart (time) (winner) (prize)]
$let[p;$parseTime[$if[$message[1]!=;$message[1];1s10ms]]]
$onlyPerms[managemessages;You are not staff]
`

},
{
 name: "gw",
 type: "timeout",
 code: `
$editMessage[$timeoutData[mid];Giveaway Ended! {newEmbed:{title:$timeoutData[prize]} {description:End in:Giveaway has been ended
Host: <@!$timeoutData[host]>
Winner(s):$if[$get[random]==;No winner (no participant);$get[random]]}};$timeoutData[cid]]
$channelSendMessage[$timeoutData[cid];$if[$get[random]!=;Congrats $get[random] you won **$timeoutData[prize]**;Not enough participant]]

$let[random;$djsEval[
var c = d.util.getChannel(d,"$timeoutData[cid]")
var m = d.util.getMessage(c, "$timeoutData[mid]")
var arrayy = m.reactions.cache.find( x => x.emoji.toString() === "🎉").users.cache.map(x => x["id"])
arrayy.splice(arrayy.indexOf("$clientId"),1)
var array = arrayy
var win = ""
let u = $timeoutData[win]
while (u != 0 && array!==[]) {
let r = Math.floor(Math.random()*array.length); 
win += "<@!"+array[r]+">" + " "
array.splice(array.indexOf(array[r]), 1)

u = u - 1

}
win.split(" ").filter(function(a) {
return a!='<@!undefined>' && a != ''
}).join(", ");yes]]
$onlyIf[$getMessage[$timeoutData[cid];$timeoutData[mid]]!=Giveaway Ended!;]
`
 
},
{
 name: "gend",
 code: `
$editMessage[$message[1];Giveaway Ended! {newEmbed:{title:$getMessageVar[prize;$message[1]]} {description:End in:Giveaway has been ended
Host: <@!$getMessageVar[host;$message[1]]>
Winner(s):$if[$get[random]==;No winner (no participant);$get[random]]}};$channelID]
$SendMessage[$if[$get[random]!=;Congrats $get[random] you won **$getMessageVar[prize;$message[1]]**;not enough participant]]

$let[random;$djsEval[
var c = d.util.getChannel(d,"$channelID")
var m = d.util.getMessage(c, "$message[1]")
var arrayy = m.reactions.cache.find( x => x.emoji.toString() === "🎉").users.cache.map(x => x["id"])
arrayy.splice(arrayy.indexOf("$clientId"),1)
var array = arrayy
var win = ""
let u = $getMessageVar[win;$message[1]]
while (u != 0 && array!==[]) {
let r = Math.floor(Math.random()*array.length); 
win += "<@!"+array[r]+">" + " "
array.splice(array.indexOf(array[r]), 1)

u = u - 1

}
win.split(" ").filter(function(a) {
return a!='<@!undefined>' && a != ''
}).join(", ");yes]]
$onlyIf[$getMessage[$channelID;$message[1]]!=Giveaway Ended!;Giveaway with that id is already ended]
$onlyIf[$message[1]!=;give valid message id]
$onlyPerms[managemessages;you are not staff]
`
 },
 {
 name: "greroll",
 code: `
$editMessage[$message[1];Giveaway Ended! {newEmbed:{title:$getMessageVar[prize;$message[1]]} {description:End in:Giveaway has been ended
Host: <@!$getMessageVar[host;$message[1]]>
Winner(s):$if[$get[random]==;No winner (no participant);$get[random]]}};$channelID]
$SendMessage[$if[$get[random]!=;Congrats $get[random] you won **$getMessageVar[prize;$message[1]]**;Not enough participant]]

$let[random;$djsEval[
var c = d.util.getChannel(d,"$channelID")
var m = d.util.getMessage(c, "$message[1]")
var arrayy = m.reactions.cache.find( x => x.emoji.toString() === "🎉").users.cache.map(x => x["id"])
arrayy.splice(arrayy.indexOf("$clientId"),1)
var array = arrayy
var win = ""
let u = $getMessageVar[win;$message[1]]
while (u != 0 && array!==[]) {
let r = Math.floor(Math.random()*array.length); 
win += "<@!"+array[r]+">" + " "
array.splice(array.indexOf(array[r]), 1)

u = u - 1

}
win.split(" ").filter(function(a) {
return a!='<@!undefined>' && a != ''
}).join(", ");yes]]
$onlyIf[$getMessage[$channelID;$message[1]]==Giveaway Ended!;Giveaway with that id not ended yet]
$onlyIf[$message[1]!=;Give valid message id]
$onlyPerms[managemessages;You are not staff]
`
 }]