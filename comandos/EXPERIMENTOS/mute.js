module.exports = [{
 name: 'mute',
 $if : 'v4',
 code: `
YOUR_MUTE_COMMAND
$if[$findRole[Muted]==]
$sendDM[Automatically created a role called Muted!;$authorID]
$forEachGuildChannel[1;{};mutecreation;]
$createRole[$guildID;Muted;546E7A;viewchannel]
$endif
`
}, {
 type: 'awaited',
 name: 'mutecreation',
 code: `
$modifyChannelPerms[$roleID[Muted];$channelID;-sendmessage]
$onlyIf[$channelType[$channelID]==text;]
`
}];