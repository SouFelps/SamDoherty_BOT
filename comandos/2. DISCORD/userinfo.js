module.exports = {
  name: "userinfo",
  code:`$title[<:emoji_1:922917814183014431> **❘** Dream — Informações do usuário]
$description[
📝 **— Nome e Tag:** \`$userTag[$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1]]\`   

📆 **— conta criada:** \`$formatdate[$creationdate[$finduser[$message[1]]];DD] de $replacetext[$replacetext[$replacetext[$replacetext[$replacetext[$replacetext[$replacetext[$replacetext[$replacetext[$replacetext[$replacetext[$replacetext[$formatdate[$creationdate[$finduser[$message[1]]];MM];12;dezembro];11;novembro];10;outubro];9;setembro];8;agosto];7;julho];6;junho];5;maio];4;abril];3;março];2;fevereiro];1;janeiro], $formatdate[$creationdate[$finduser[$message[1]]];YYYY HH:mm] $replacetext[$replacetext[$replacetext[$replacetext[$replacetext[$replacetext[$replacetext[$replacetext[$replacetext[$replacetext[$replacetext[$replacetext[$replacetext[$replacetext[$replacetext[$creationdate[$finduser[$message[1]];time];years;anos];year;ano];months;meses];month;mes];weeks;semanas];week;semana];days;dias];day;dia];hours;horas];hour;hora];minutes;minutos];minute;minuto];and;e];seconds;segundos];second;segundo]\`   

$color[ORANGE]
$footer[$username;$authorAvatar]
$addTimestamp
$suppressErrors[**🔌 — Algo deu extremamente errado!**]
$image[$userAvatar[$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1]]]
`
}
