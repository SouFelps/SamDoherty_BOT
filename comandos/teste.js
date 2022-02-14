module.exports = [{
name: "buttons",
code: `Butões
$addButton[1;Link;link;https://discord.com/;false]
$addButton[1;Perigo;danger;danger;false]`
}, {
name: "primary",
type: "interaction",
prototype: "button",
code: `$interactionReply[Voce selecionou o primeiro botão(blurple)]`
}, {
name: "secondary",
type: "interaction",
prototype: "button",
code: `$interactionReply[Voce selecionou o segundo botão(gray)]`
}]