module.exports = {
  name:"clear",
  aliases: ['apagar'],
  code:`
🧹 **—** O chat teve $message mensagens deletadas por <@$authorID>.
$clear[$message[1]]
$deleteIn[12s]

$onlyIf[$message[1]<=100;**|** <@$authorID> eu só posso apagar até \`100\` mensagens por vez!]
$onlyIf[$hasPerms[$authorID;managemessages]==true;<:emoji_18:845090542605828136> **|** <$authorID> você não possui permissão para \`apagar mensagens\`!
$onlyIf[$message[1]!=;<@$authorID> {title:<:emoji_30:839588463002386433> | Stiven - Clear Comando }{description:<:emoji_8:843678279238942752> \`$getServerVar[prefixo]clear\`
  **Use este comando para apagar várias mensagens de uma só vez!**
  
<:emoji_3:843677246337712129> **| Como usar?  \`$getServerVar[prefixo]clear <número>\`** 

 Ao usar o  \`$getServerVar[prefixo]clear <número>\` o Stiven irá apagar o número de mensagens citado após o comando. Infelizmente, só é possível apagar 1 - 500 mensagens por vez. 
 
<:emoji_25:832587742705614878> **| Permissões**
 🔸 você precisa da permissão \`gerenciar mensagens\` para ultilizar este comando.
 🔸 eu preciso da permissão \`gerenciar mensagens\` para executar este comando.

📚 **| Aliasses**

Aliasses são sinônimos de determinado comando, você pode usa-los no lugar do comando tradicional!

\`$getServerVar[prefixo]apagar\`
}{color:ORANGE}]]

  `
}