module.exports = {
  name: "ban",
  code: `
$ban[$mentioned[1]]
$description[
Usuario Foi banido ⚠️
$username[$mentioned[1]]
quem puniu:
$username
]
$thumbnail[$userAvatar[$mentioned[1]]
 $footer[Cuidado Para nao ficar assim!; $userAvatar[$mentioned[1]]
$onlyIf[$mentioned[1]!=;❌ **—** <@$authorID> Você não mencionou nenhum usuário para eu banir!]
$onlyIf[$mentioned[1]!=$authorID;❌ **—** <@$authorID>  Você não pode se banir!.] 
$onlyif[$roleposition[$highestrole[$finduser[$message[1];no]]]>$roleposition[$highestrole[$clientid]];❌ **—** <@$authorID> Eu não posso banir este usuário! Meu maior cargo está abaixo do maior cargo dele! ]
$onlyif[$finduser[$message[1];no]!=$ownerid;❌ **—** <@$authorID> Eu não posso banir o dono deste servidor!]
$onlyif[$userexists[$finduser[$message[1];no]]==true;Usuario invalido!]
$onlyBotPerms[ban;❌ **—** <@$authorID> Eu não possuo permissão para banir membros.]
$onlyPerms[ban;❌ **—** <@$authorID> Você não possui a permissão de banir membros.]`
  }