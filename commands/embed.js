const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('embed')
        .setDescription('Command Description'),
    async execute(interaction, client) {
      // You can add functions

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
