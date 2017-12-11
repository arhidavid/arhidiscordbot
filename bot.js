const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', function() {
    if (message.content === "$loop") { 
      var interval = setInterval (function () {
        bot.sendMessage(message.channel, "Please, note:
		This channel is for reporting in-game issues, such as problems with claims, animations, certain actions, characters getting stuck and other issues of type that you experienced during your gameplay.
Please, DO NOT post launcher related issues, connectivity issues, login issue or anything that isn't related to the in-game issues here. Those questons should be addressed to https://lifeisfeudal.zendesk.com/hc/en-us And of course, please, DO NOT spam.  Thank you!")
      }, 900 * 1000); 
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
