const Discord = require('discord.js');
const { ActionRowBuilder, Events, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
module.exports = {
    name: 'yt',
    usage: '!yt',
    execute: async(message, client, args) => {
        const embed = new Discord.EmbedBuilder()
        .setTitle('Współpraca yt')
        .setColor('RED')
        .setDescription('Wcisnij se guziczek i bedzie git');

        const buttons = new Discord.MessageActionRow().addComponents(
            new Discord.MessageButton()
            .setCustomId('yt')
            .setEmoji('🎞')
            .setStyle('DANGER')
        )
        message.channel.send({
            embeds: [embed],
            components: [buttons]
        })

	
    }
}