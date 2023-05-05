module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Successfully logged in as ${client.user.tag}!`);
        client.user.setStatus('online'); // online/dnd/invisible/idle
        const { ActivityType } = require('discord.js');
        client.user.setActivity('Activity / What it is doing', { type: ActivityType.Watching }); //Listening/Watching/Competing
	},
};
