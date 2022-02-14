module.exports = {
  name:"perfil2",
  code:`
$image[1;
https://oishreti.sirv.com/Bumble_API/images_10.jpeg?text.0.text=$replaceText[$message; ;%20;-1[$getGlobalUserVar[meutexto]]]&text.0.size=24&text.0.font.family=Abel&text.1.text=$replaceText[$getGlobalUserVar[dinheiro]]&text.1.position.gravity=southwest&text.1.size=24&watermark.0.image=%2FBumble_API%2FProfile.png&watermark.0.scale.width=474]`
},{
  $replaceText[$message; ;%20;-1]
}