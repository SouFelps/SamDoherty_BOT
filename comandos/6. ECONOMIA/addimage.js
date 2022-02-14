module.exports = {
  name: "addimage",
  code: `
  $argsCheck[>1; Você precisa colocar uma imagem em forma de link para adicionar uma imagem 790 x 475]
$setGlobalUserVar[addimage;$message]
**boa! você trocou a imagem do perfil, GG!**
  `
}