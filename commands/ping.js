const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Check your ping bro'),
	async execute(interaction) {
        const timeTaken = interaction.createdTimestamp - Date.now();
        await interaction.reply('Pong! This message had a latency of '+ timeTaken +'ms.');
	},
};