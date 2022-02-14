module.exports= {
nonPrefixed:true,
name:"$alwaysExecute",
code:`
$reply[$messageID;
 :satellite_orbital: **—** <@$authorID> Você está usando a versão **experimental** do Dream. Várias funcionalidades podem não funcionar, posso ficar offline a qualquer momento, erros e inesperados podem estar acontecendo! Segure-se firme cadete! 
$onlyIf[$stringStartsWith[$message;$getServerVar[prefixo]]!=false;]]
  `
}
