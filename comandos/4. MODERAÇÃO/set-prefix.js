module.exports = {
  name: "set-prefix",
  aliases: ['mudar-prefixo', 'setPrefix', `novo-prefixo`],
  code: `
  $title[:pencil: — Prefixo alterado!]
  $description[ Meu novo prefixo neste servidor é  \`$message[1]\`]
  $color[ORANGE]
  $footer[$usertag;$authoravatar]
  $addtimestamp
  $setServerVar[prefixo;$message[1]]
  
  $onlyif[$charCount[$message[1]]<=3; {title:<:emoji_30:839588463002386433> | Stiven - Set-prefix}{description:<:emoji_14:843888413852696586> **|** O prefixo personalizável possuí limite máximo de \`3\` caracteres!}{color:ORANGE}{delete:22s}{deletecommand}]
  
$onlyif[$message[1]!=; {title:**:<:emoji_30:839588463002386433> | Stiven - Set-prefix}{description:<:emoji_14:843888413852696586> **|** Por favor, digite um prefixo válido!}{color:ORANGE}{delete:20s}{deletecommand}]
  
  $onlyperms[admin; {title:<:emoji_30:839588463002386433> | Stiven - Set-prefix }{description: <:emoji_14:843888413852696586> **|** <@$authorID>, você não possui permissão \`administrador\` para ultilizar este comando!}
  `
}
