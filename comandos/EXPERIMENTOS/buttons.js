module.exports = (bot) => {
	bot.onMessage({
		guildOnly: false, 
		respondToBot: false
	});
	bot.onInteractionCreate();
}