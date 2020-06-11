module.exports = (message, args) => {
	if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('у Вас нет прав!');

	const botmessage = args.join(' ');

	message.channel.send(botmessage);
};

module.exports.info = 'Повторяет ваше сообщение';
