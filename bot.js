const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});
var enabled = 1;
client.on('message', message => {
    if (enabled === 1) { 
		var interval = setInterval (function () {
			message.channel.send("Dear feudalists! \nPlease, note that this channel is for reporting in-game issues only, such as problems with claims, animations, certain actions, characters getting stuck and other issues of type that you experienced during your gameplay. \nPlease, DO NOT post launcher related issues, connectivity issues, login issue or anything that isn't related to the in-game issues here. You can address those questions to https://lifeisfeudal.zendesk.com/hc/en-us \nAnd of course, please, DO NOT spam. Thank you and have a good game!") && message.channel.send ("When reporting an issue, please specify whether it's happening on EU or NA region, thank you. \nAdditionally, solutions for some issues present in current build can be found in \"pinned messages\". Thank you!")
      }, 20 * 1000,
		client.on('message', message => {
			if (enabled === 0) { 
				var interval = clearInterval (); 
											}
										})); 
									}
								});
client.login(process.env.BOT_TOKEN);
