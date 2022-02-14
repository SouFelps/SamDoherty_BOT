module.exports = {
  name: "coleta",
  code:`
$globalCooldown[1m;Espere 1 minuto para trabalhar novamente!]
$setGlobalUserVar[dinheiro;$sum[$getGlobalUserVar[dinheiro;$authorID];$random[50;100]];$authorID]
 **|** <@$authorID>, hoje você ganhou $random[50;100] **DinheiroSemNome**! continue coletando o daily diariamente! `
}