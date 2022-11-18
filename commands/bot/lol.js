const Discord = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('lol')
        .setDescription('slashkomenda!'),
    async execute(interaction) {
        await interaction.reply('MIMI!');
    },
};