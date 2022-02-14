module.exports = {
 name: "serverinfo",
 aliases: ['guildinfo'],
 code: `
 $image[$serverIcon[$guildID;2048]]
 $color[ORANGE]
 $addTimestamp
 $footer[$username;$authorAvatar]
 $title[<:emoji_1:922917814183014431> **❘** Dream — Informações do Servidor]
 $description[

 **$serverName**
🟠 ** — Informações Principais**
 ID do servidor: \`$guildID\`
 Dono: \`$userTag[$ownerID]\` (\`$ownerID\`)

 $addfield[📆 — Data de Criação;$guild[$guildID;created] ( \`$guild[$guildID;timestamp]\` )]
🟠 ** — Informações de Impulso**
 Nível de Boost: $serverBoostLevel
 Número de Boost: $serverBoostCount

🟠 ** — Informações Gerais**

Número de Banimentos: $banCount
Número de Membros: $membersCount
Número de BOTs: $botCount
Número de Canais: $channelCount
Número de Cargos: $roleCount
Número de Emojis: $emojiCount
 ]
 $getServerInvite
 `
}

