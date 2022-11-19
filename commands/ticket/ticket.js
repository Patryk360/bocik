const Discord = require('discord.js');
module.exports = {
    name: 'ticket',
    description: 'ticket',
    usage: '!ticket',
    execute: async(message, args) => {
        message.delete(100);

        //const tchannell = client.channels.cache.get('1033839158952734720');//ustaw to chuju
        //if(!tchannell) console.log('nie ma kanalu do tworzenia ticketow');

        const tembed = new Discord.EmbedBuilder()
        .setTitle('Tickets')
        .setDescription('Wcisnij przycisk, aby utworzyć ticket');
        const buttons = new Discord.MessageActionRow().addComponents(
            new Discord.MessageButton()
            .setCustomId('ticket-create')
            .setEmoji('📩')
            .setStyle('PRIMARY')
        )
        message.channel.send({
            embeds: [tembed],
            components: [buttons]
            //files: [transcript]
        })
    }
}