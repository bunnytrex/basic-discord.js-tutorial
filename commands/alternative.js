const { SlashCommandBuilder, EmbedBuilder, MessageAttachment } = require('discord.js');

const subjectInfo = {
  '8ball': 'Ask the Magic 8ball a question, preferably yes and no, and it will give you an answer.', 
};

module.exports = {
  data: new SlashCommandBuilder()
    .setName('maths')
    .setDescription('Search our data for maths subject help.')
    .addStringOption(option => 
      option.setName('topic')
        .setDescription('Topic - You can find what topics we have on /topics maths')
        .setRequired(true)
    ),
  async execute(interaction) {
    const commandName = interaction.options.getString('command');

   if (commandName in subjectInfo) {
      const commandEmbed = new EmbedBuilder()
      .setColor('Random')
      .setTitle(`Selected Subject: ${commandName}`)
    .setDescription(subjectInfo[commandName])
    .setFooter({ text: `Footer here`});

      await interaction.reply({ embeds: [commandEmbed], ephemeral: false });
    } else {
      await interaction.reply({ content: 'Invalid command provided.', ephemeral: true});
    }
    },
};
