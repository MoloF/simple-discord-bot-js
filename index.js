const { Client, MessageAttachment } = require('discord.js');
const client = new Client();
global.client = client;

global.commandSeparate = '!';
const token = 'NzIwNTU0MTA0MTE1NTYwNDg4.XuHtVg.hjrMoImyx2u7KfP9u_T64U3WZV8';

client.login(token);

const commands = require('./commands/index');

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
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
