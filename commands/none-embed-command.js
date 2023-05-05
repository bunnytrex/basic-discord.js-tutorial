const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('none-embed')
        .setDescription('Comand Description'),
    async execute(interaction, client) {
      // You can add functions
            return interaction.reply({ content: `Text`, ephemeral: false });
        }
    },
};
