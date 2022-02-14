module.exports = ({
name: "avatar",
code:`$if[$message!=server]
$title[:camera_with_flash: — $username[$findmember[$message;yes]]]
$description[]
$image[$userAvatar[$findmember[$message;yes]]]
$color[ORANGE]
$elseif[$message==server]
$title[$servername's server icon]
$description[$addfield[Avatar links;[PNG]($replaceText[$servericon;webp;png]) | [WEBP]($replaceText[$servericon;png;webp]) | [JPEG]($replaceText[$replaceText[$servericon;webp;jpeg];png;jpeg]);no]]
$image[$servericon]
$color[ORANGE]
$endelseif
$endif`})
