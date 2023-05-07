const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('embed')
        .setDescription('Command Description'),
    async execute(interaction, client) {
        const commandEmbed = new EmbedBuilder()
            .setTitle(`Title`)
            .setColor('RANDOM') // 'RANDOM' should be uppercase
            //.setDescription(`Description`)
            .addFields(
                { 
                    name: `Text`, 
                    value: `Something`, 
                    inline: false 
                },
            )
            .setTimestamp()
            .setFooter({ text: ``});
        return interaction.reply({ content: `Optional, remove content if not needed (Adds a message above embed).`, embeds: [commandEmbed], ephemeral: false });
    },
};
