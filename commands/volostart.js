const { SlashCommandBuilder } = require('@discordjs/builders');
const voloStore = require('../store/store.js')
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('volostart')
		.setDescription('Start ping volodia'),
	async execute(interaction) {
        console.log(voloStore.voloCount.getState().value)
        voloStore.voloCount.dispatch({ type: 'setTrue' })
        let counter = 0;
        var intervalId = setInterval(async () => {
            if(voloStore.voloCount.getState().value){
                await interaction.channel.send('<@248156089596510210>');
                counter++;
            }else{
                clearInterval(intervalId);
            }
        },1000);
	},
};