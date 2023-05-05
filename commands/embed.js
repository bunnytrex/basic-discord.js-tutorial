const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('embed')
        .setDescription('Comand Description'),
    async execute(interaction, client) {

            const commandEmbed = new EmbedBuilder()
            .setTitle(`Title`)
            .setColor('Random') //Colour Code
//.setDescription(`Description`)
            .addFields(
                { 
                    name: `Text`, 
                    value: `Something`, 
                    inline: false 
                },
            )
            .setTimestamp() //Tiimestamps it, remove line if needed.
            .setFooter({ text: ``}); //Footer for the bottom of embed
            return interaction.reply({ content: `Optional, remove content if not needed (Adds a message above embed).`, embeds: [commandEmbed]}, ephemeral: false });
        }
    },
};
