module.exports = [{
    name: 'RPS',
  aliases: ["RockPaperScissors", "RPaperS", "SPR"],
  usage: 'RPS',
  description: 'Play rps game',
  category: 'Fun',
  example: 'RPS',
  cooldown: '5s',
    code: `
  $title[1;RPS]
  $color[1;$getVar[Color]]
  $description[1;<a:RPS:912172451654430782> Click rock, paper or scissors on button!]
  $footer[1;Cosmos v$getvar[Version]]
  $globalcooldown[$commandinfo[Ping;cooldown];{newEmbed:{timestamp:ms}{author:Cooldown!:$authorAvatar}{color:$getvar[Color]}{description:<a:Timer:910115421854781440> Please wait %time%!}]
  $addButton[1;Scissors;success;Scissors;no;911083958920437779]
  $addButton[1;Paper;success;Paper;no;911083889898979389]
  $addButton[1;Rock;success;Rock;no;911083959083991070]
`
}, {
name: "Rock",
type: "interaction",
prototype: "button",
code: `
$djsEval[console.log(d.data.interaction.values)]
$interactionUpdate[;{newEmbed:{title:You choose rock!}{color:$getvar[Color]}{description:<a:RPS:912172451654430782> Result:
$randomtext[
**You win!**
<a:RPS_Rock:911083959083991070> Vs <a:RPS_Scissors:911083958920437779>
;
**You lose!**
<a:RPS_Rock:911083959083991070> Vs <a:RPS_Paper:911083889898979389>
;
**Tie!**
<a:RPS_Rock:911083959083991070> Vs <a:RPS_Rock:911083959083991070>
]}{footer:Cosmos v$getvar[Version]};{actionRow:{button:Rock:3:Rock:true:<a:RPS_Rock:911083959083991070>}:{button:Paper:3:Paper:true:<a:RPS_Paper:911083889898979389>}:{button:Scissors:3:Scissors:true:<a:RPS_Scissors:911083958920437779>}};;;yes]
`
},{
name: "Paper",
type: "interaction",
prototype: "button",
code: `
$djsEval[console.log(d.data.interaction.values)]
$interactionUpdate[;{newEmbed:{title:You choose paper!}{color:$getvar[Color]}{description:<a:RPS:912172451654430782> Result:
$randomtext[
**You win!**
<a:RPS_Paper:911083889898979389> Vs <a:RPS_Rock:911083959083991070>
;
**You lose!**
<a:RPS_Paper:911083889898979389> Vs <a:RPS_Scissors:911083958920437779>
;
**Tie!**
<a:RPS_Paper:911083889898979389> Vs <a:RPS_Paper:911083889898979389>
]}{footer:Cosmos v$getvar[Version]};{actionRow:{button:Rock:3:Rock:true:<a:RPS_Rock:911083959083991070>}:{button:Paper:3:Paper:true:<a:RPS_Paper:911083889898979389>}:{button:Scissors:3:Scissors:true:<a:RPS_Scissors:911083958920437779>}};;;yes]
`
}, {
name: "Scissors",
type: "interaction",
prototype: "button",
code: `
$djsEval[console.log(d.data.interaction.values)]
$interactionUpdate[;{newEmbed:{title:You choose scissors!}{color:$getvar[Color]}{description:<a:RPS:912172451654430782> Result:
$randomtext[
**You win!**
<a:RPS_Scissors:911083958920437779> Vs <a:RPS_Paper:911083889898979389>
;
**You lose!**
<a:RPS_Scissors:911083958920437779> Vs <a:RPS_Rock:911083959083991070>
;
**Tie!**
<a:RPS_Scissors:911083958920437779> Vs <a:RPS_Scissors:911083958920437779>
]}{footer:Cosmos v$getvar[Version]};{actionRow:{button:Rock:3:Rock:true:<a:RPS_Rock:911083959083991070>}:{button:Paper:3:Paper:true:<a:RPS_Paper:911083889898979389>}:{button:Scissors:3:Scissors:true:<a:RPS_Scissors:911083958920437779>}};;;yes]
`
}];