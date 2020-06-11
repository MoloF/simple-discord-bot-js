module.exports = (message, args) => {
	if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('у Вас нет прав!');

	const messageDeleteCount = +args[0];
	if (!messageDeleteCount) return message.reply('Укажите количество удаляемых сообщений');

	if (messageDeleteCount > 100) return message.reply('Укажите значение ≤ 100');
	if (messageDeleteCount < 1) return message.reply('укажите значение ≥ 1');

	message.channel.bulkDelete(messageDeleteCount).then(() => {
		message.channel.send(`Удалено ${messageDeleteCount} сообщений`);
	});
};

module.exports.info = 'Удаляет сообщения на канале';
