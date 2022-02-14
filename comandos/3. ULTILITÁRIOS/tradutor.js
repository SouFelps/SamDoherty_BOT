module.exports= {
  name:"tradutor",
  code: `

$title[Translated!]
$description[$httpResult[translated]
$color[$random[111111;999999]]
$httpGet[https://normal-api.ml/translate?text=$replaceText[$message; ;+;-1]&to=en]
$onlyIf[$message!=;Type something to translate!]]
 
$onlyIf[2==2;**DON'T FORGET TO ENABLE UNSTABLE MODE, OTHERWISE IT MAY NOT WORK**]
$onlyIf[2==2;**DON'T FORGET TO ENABLE UNSTABLE MODE, OTHERWISE IT MAY NOT WORK**]
  `
}