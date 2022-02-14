module.exports = {
 name: "unban",
 code: `
$sendDM[$findUser[$message];{title:▸ 🔧┇Unban} {description::alert: Tu ban ha sido removido en el servidor \`$serverName[$guildID]\`} {color:4bcb30} {timestamp:ms}]
$unban[$message[1];By $userTag[$authorID] Reason: $messageSlice[1]]
$channelSendMessage[$channelID;{author:🔧 Desbaneo 🔧} {description:👤 **__ID__**:
\`$message\`
👮 **__Por__**:
<@$authorID>} {color:4bcb30} {footer:$username:$authorAvatar} {timestamp:ms}]
$onlyBotPerms[ban;{title:▸ :tickrojo:┇ERROR} {description::alert: El bot no tiene los permisos suficientes para hacer esto} {footer:$username:$authorAvatar} {color:ff1000} {delete:10s} {timestamp:ms}]
$onlyIf[$message!=;{title:▸ :tickrojo:┇ERROR} {description:Uso: \`$getServerVar[prefix]unban <ID>\`} {color:4bcb30} {footer:$username:$authorAvatar} {timestamp:ms} {delete:10s}]
$onlyPerms[ban;{title:▸ :tickrojo:┇ERROR} {description::alert: No tienes los permisos suficientes para hacer esto} {footer:$username:$authorAvatar} {color:ff1000} {delete:10s} {timestamp}]`

  
}
