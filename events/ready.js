module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Operational! Logged in as ${client.user.tag}!`);
        client.user.setStatus('online'); // online/dnd/invisible/idle
        const { ActivityType } = require('discord.js');
        client.user.setActivity('Watching over CostaBlox.', { type: ActivityType.Watching }); //Listening/Watching/Competing
	},
};