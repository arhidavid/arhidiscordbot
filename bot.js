const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') { 
      var interval = setInterval (function () {
        message.channel.send("Dear feudalists! Please, note that this channel is for reporting in-game issues only, such as problems with claims, animations, certain actions, characters getting stuck and other issues of type that you experienced during your gameplay. Please, DO NOT post launcher related issues, connectivity issues, login issue or anything that isn't related to the in-game issues here. You can address those questions to https://lifeisfeudal.zendesk.com/hc/en-us And of course, please, DO NOT spam. Thank you and have a good game!")
      }, 9 * 1000); 
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
