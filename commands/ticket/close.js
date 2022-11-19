const Discord = require('discord.js');
const AsciiTable = require('ascii-table');
const { createTranscript } = require('discord-html-transcripts');
module.exports = {
    name: 'close',
    description: 'close',
    usage: '!close',
    execute: async(message, args) => {

        const kanal = client.channels.cache.get('1036251615755251835');

        if(!message.member.permissions.has('MANAGE_CHANNELS')){
            const embed = new Discord.EmbedBuilder()
            .setTitle('Nie masz uprawnień do używania tej komendy!')
            .setTimestamp()
            .setFooter({text: `${message.author.tag}`, iconURL: `${message.author.avatarURL({ dynamic: true })}`});
            message.channel.send({ embeds: [embed] });
        }else if(message.member.permissions.has('MANAGE_CHANNELS')){

            const tembed = new Discord.EmbedBuilder()
                //.setTitle(`${message.author.tag}`)
                .setDescription('Czy napewno usunąć kanał?')
                //.setColor('#060fbf')
                .setFooter({text: `${message.author.tag}`, iconURL: `${message.author.avatarURL({ dynamic: true })}`})
                .setTimestamp();
                const button = new Discord.MessageActionRow()
                .setComponents(
                    new Discord.MessageButton()
                    .setCustomId('close-ticket')
                    .setLabel('Zamknij')
                    .setEmoji('🔒')
                    .setStyle('SECONDARY'),
                
                    new Discord.MessageButton()
                    .setCustomId('anuluj-close')
                    .setLabel('Anuluj')
                    .setEmoji('❌')
                    .setStyle('SECONDARY')
                )
    
                msg = await message.channel.send({
                    embeds: [tembed],
                    components: [button]
                });
        }

        //message.channel.delete();
    }
}