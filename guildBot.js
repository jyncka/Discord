const Discord = require('discord.js');
const guildBot = new Discord.Client();
const auth = require('./auth.json');

guildBot.on('ready', () => {
	console.log('Guild Bot ready');
});

guildBot.on('message', message => {
	if (message.content.startsWith('!')) {
		var cmd = message.content.split(' ');
		var action = cmd[0];

		switch(action) {
			case 'addRole':
				var name = cmd[1];
				var color = cmd[2];
				message.guild.createRole(
				{
					name: 'Seargent',
					color: '#FFFFFF'
				});
				break;
		}
	}
	message.guild.createRole('sergeant', 'test');
});

guildBot.login(auth.guildToken);

