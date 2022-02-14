module.exports = ({
 name: 'hack',
 usage: 'Hack <user id | name | mention>',
 description: 'Hack a user',
 cooldown: '3s',
 code: `
 **Iniciando um Hack perigoso em $username[$findUser[$message;no]]__**

 $editIn[2s;[▗] Hacking $username[$findUser[$message;no]];[▖] Tenho o token do usuário: **$randomString[15]**;[▘] E-mail do usuário: **$replaceText[$username[$findUser[$message;no]]; ;_;-1]@gmail.com**;[▝] Senha: **$randomString[8]**;[▗] Contatos recentes: **$username[$randomUserID]**;[▖] Palavra mais usada: **$randomText[meme;lol;não;lmao;chato;bruh;caralho;PQP;ban;se fuder;bruh;A]**;[▘] Mensagem dm mais recente: **$randomText[Oi;bye;Ok;Tá]**;[▝] Hackeando registros médicos;[▗] Hackeando Email (bypassed 2FA too);[▘] 50% Hack Completo;[▖] Injetando versão mais recente de Corona na conta;[▘] Hacking conta microsoft;[▝] Senha Microsoft: **$randomText[ZapIsZap@Zap.com;IAmNoob@gmail.com;ByeBye@ok.co.in;$replaceText[$username; ;_;-1]IsSmart@yahoo.com]**;[▗] Verificando a conta de jogos do usuário;[▖] Jogos $randomText[Fortnite(....);Subway Surfers;Temple Run;Clash of Clans;Roblox;Brawl Stars;Minecraft;Pubg];[▘] Hacking conta Epic Games;[▝] Conta Epic games hackeada e deletada;[▝] Haking 99% completo......;
[▗] Discord IP: **$numberSeparator[$random[100000000;900000000];.]**;**O hack perigoso, nocivo e arriscado em $username[$findUser[$message;no]] está 100% completo!**]

 $onlyIf[$findUser[$message;no]!=;{newEmbed:{description: Invalid Args
Usw:
\`hack < id | nome | menção>\`}{color:RED}}]

$cooldown[$commandInfo[hack;cooldown];{newEmbed:{description: Espere %time% para hackear novamente}{color:ORANGE}}]
`
}); 