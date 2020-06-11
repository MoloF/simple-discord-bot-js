const admin = require('./admin/index');
const user = require('./user/index');

global.commands = Object.assign({}, admin, user);

Object.keys(commands).forEach((command) => console.log(`Команда: ${command}`));

module.exports = (message, command, args) => {
	const commandFunction = commands[command];

	commandFunction && commandFunction(message, args);
};
