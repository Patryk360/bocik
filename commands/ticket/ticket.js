const Discord = require('discord.js');
const client = new Discord.Client({
    intents: [
      Discord.Intents.FLAGS.GUILDS,
      Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});
module.exports = {
    name: 'ticket',
    description: 'ticket',
    usage: '!ticket',
    execute: async(message, args) => {
        message.delete(100);

        //const tchannell = client.channels.cache.get('1033839158952734720');//ustaw to chuju
        //if(!tchannell) console.log('nie ma kanalu do tworzenia ticketow');

        const tembed = new Discord.MessageEmbed()
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