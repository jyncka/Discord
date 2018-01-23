const Discord = require('discord.js');
const promoteBot = new Discord.Client();
const auth = require('./auth.json');

promoteBot.on('ready', () => {
	console.log('Promote Bot ready!');
});

function getHelpText() {
	var embed = {
		color: 3447003,
		title: "Promote-bot Help",
		description: "Below is a list of things I can do.",
		fields: [{
			name: '!badges',
			value: 'Display all available badges.',
		},
		{
			name: '!display [user]',
			value: 'Display badges for a user.'
		},
		{
			name: '!promote [user]',
			value: 'Promote user to next tier.'
		},
		{
			name: '!demote [user]',
			value: 'Demote user to lower tier.'
		}]
	}
	
	return embed;
}

function getAllRoles(roles) {
	console.log(roles);

	var embed = {
		color: 3447003,
		title: "Server Roles",
		description: "These are the roles available.",
		fields: [{
			name: '!badges',
			value: 'Display all available badges.',
		},
		{
			name: '!display [user]',
			value: 'Display badges for a user.'
		},
		{
			name: '!promote [user]',
			value: 'Promote user to next tier.'
		},
		{
			name: '!demote [user]',
			value: 'Demote user to lower tier.'
		}]
	}

	return embed;
}

function getBadges() {
	var embed = {
		color: 3447003,
		title: "Promote-bot Help",
		description: "Below is a list of things I can do.",
		fields: [{
			name: '!badges',
			value: 'Display all available badges.',
		},
		{
			name: '!display [user]',
			value: 'Display badges for a user.'
		},
		{
			name: '!promote [user]',
			value: 'Promote user to next tier.'
		},
		{
			name: '!demote [user]',
			value: 'Demote user to lower tier.'
		}]
	}
}

promoteBot.on('message', message => {
	if (message.content.startsWith('!')) {
	
		var cmd = message.content.replace('!', '').split(' ');
		var action = cmd[0];

		switch(action) {
			case 'badges':
				message.reply('Available Badges');
				break;
			case 'display':
				var user = cmd[1];
				message.channel.send(user + ' has been awarded:', {reply: ''});
				break;
			case 'promote':
				var userName = cmd[1];
				var roleName = cmd[2];

				console.log(userName);
				var userId = message.guild.members.find("displayName", userName).id;

				try {
					var role = message.guild.roles.find("name", roleName);
					var allRoles = getAllRoles(message.guild.roles);

					if (role) {
						message.channel.send('Got role, thank you.');
					} else {
						message.channel.send("Sorry, I couldn't find that role. Here's a list of roles on the server: ");
						// console.log(allRoles);
					}
				} catch(ex) {
					console.log(ex);
				}

				// message.channel.send(userName + ' has been promoted to ' + roleName);
				break;
			case 'demote':
				var user = cmd[1];
				var level = cmd[2];
				message.channel.send(user + ' has been demoted.');
				break;
			case 'help':
				var res = getHelpText();
				message.channel.send({embed: res});
			break;
		}
	}
});

promoteBot.login(auth.promoteToken);