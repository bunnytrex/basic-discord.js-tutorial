const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('non-embed')
        .setDescription('Command Description'),
    async execute(interaction, client) {
      // You can add functions
        
            return interaction.reply({ content: `Text`, ephemeral: false });
        }
    },
};
