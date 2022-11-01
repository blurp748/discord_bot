const { SlashCommandBuilder } = require('@discordjs/builders');
const voloStore = require('../store/store.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('volostop')
		.setDescription('Stop ping volodia'),
	async execute(interaction) {
        voloStore.voloCount.dispatch({ type: 'setFalse' })
        await interaction.reply("You're stopping Volostart :(");
	},
};