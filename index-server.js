const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const config = require('./config.json');

const { Client, MessageAttachment } = require('discord.js');
const client = new Client();

global.client = client;
global.commandSeparate = config.separate;

client.login(config.token);

app.use(express.static('public'));
app.use(bodyParser.json());

app.listen(config.port, () => console.log(`Сервер запущен http://localhost:${config.port}`));

const commands = require('./commands/index');

client.on('ready', () => {
	const hasServer = client.guilds.cache.get(config.server);
	if (!hasServer) {
		console.log('Бот отключен, не найден заданный сервер.');
		client.destroy();
	}
	console.log(`Бот запущен: ${client.user.tag}!`);

	const hasChannel = hasServer.channels.cache.get(config.channel);

	app.post('/', (req, res) => {
		if (hasChannel && req.body['value']) hasChannel.send(req.body.value);
		res.send('OK');
	});
});

client.on('message', (msg) => {
	if (msg.author.bot) return;

	const messageArray = msg.content.split(' ');

	const commandWithSeparate = messageArray[0];

	if (commandWithSeparate.indexOf(commandSeparate) === -1) return;

	const command = commandWithSeparate.replace('!', '');

	const args = messageArray.slice(1, messageArray.length);

	commands(msg, command, args);
});
