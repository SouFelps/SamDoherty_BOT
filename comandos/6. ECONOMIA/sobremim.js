module.exports = {
  name: "aboutprofile",
  code: `
$argsCheck[>1;Você precisa escrever um descrição!]
$setGlobalUserVar[meutexto;$message]
<@$authorID> Sua descrição foi alterada para: 
\`$message\`
  `
}