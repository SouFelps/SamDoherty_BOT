module.exports = [{
  name: "lock",
  code: `
$if[$checkcontains[$replacetext[$replacetext[$replacetext[$replacetext[$replacetext[$channeloverwrites[$channelid;: {mention} :{deny};|];@;%];Create Instant Invite,;];Manage Channels,;];View Channel,;]; ;];:<%&$findrole[@/everyone (Tire o / do everyone)]>:SendMessages]==false]

$modifychannelperms[$channelid;-sendmessages;$guildid]
:closed_lock_with_key: **|** O canal foi trancado.

$else
:closed_lock_with_key: **|** O canal já está trancado.
$endif


$onlyperms[managechannels;Permissão necessária \`Gerenciar canal\`]

$onlybotperms[managechannels;Permissão Nescessaria \`Gerenciar canal\`]
  `
}, {
  name: "unlock",
  code: `
$if[$checkcontains[$replacetext[$replacetext[$replacetext[$replacetext[$replacetext[$channeloverwrites[$channelid;: {mention} :{deny};|];@;%];Create Instant Invite,;];Manage Channels,;];View Channel,;]; ;];:<%&$findrole[@/everyone (Tire o / do everyone)]>:SendMessages]==true]
$modifychannelperms[$channelid;+sendmessages;$guildid]
:unlock: **|** Canal destrancado
$else
:unlock: **|** O canal já está destrancado.
$endif


$onlyperms[managechannels;Permissão necessária \`Gerenciar canal\`]

$onlybotperms[managechannels;Permissão Nescessaria \`Gerenciar canal\`]
  `

}]