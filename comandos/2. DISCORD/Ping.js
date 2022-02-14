module.exports= {
	name: 'Ping',
  type: "interaction",
  prototype: "slash",
	code: `
$interactionReply[
  **🕖 | Uptime:** \` $uptime \`  
**📡 | BOT Ping:** \` $ping \`     
**🌎 | Shard:** \` $shardID \`]     
`
}
