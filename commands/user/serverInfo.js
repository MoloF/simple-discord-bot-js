const { MessageEmbed } = require('discord.js');

module.exports = (message) => {
	const embed = new MessageEmbed()
		.setTitle('Информация о сервере')
		.setDescription('Отображение доступной информации о сервере проекта')
		.setColor('RANDOM')
		.addField('Название сервера', message.guild.name)
		.addField('Создание сервера', message.guild.createdAt)
		.addField('Вы присоеденились к серверу', message.guild.joinedAt)
		.addField('Кол-Во участников', message.guild.memberCount)
		.addField('Регион', message.guild.region)
		.setThumbnail(message.guild.iconURL);

	message.channel.send(embed);
};

module.exports.info = 'Отображает информацию о сервере';
