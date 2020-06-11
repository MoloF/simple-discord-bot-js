const { MessageEmbed } = require('discord.js');

module.exports = (message) => {
	const commandsList = Object.keys(commands).map((command) => {
		return {
			value: commandSeparate + command,
			name: commands[command].info || 'Не задокументировано',
		};
	});

	const embed = new MessageEmbed()
		.setTitle('Команды сервера')
		.setDescription('Доступные команды сервера')
		.setColor('RANDOM')
		.addFields(...commandsList);

	message.channel.send(embed);
};

module.exports.info = 'Справка команд';
