const Discord = require('discord.js');
module.exports = {
    name: 'help',
    description: 'help',
    usage: '!help',
    execute: async(message, args, client) => {
        //let bicon = client.user.displayAvatarURL({ dynamic :true });
        const embed = new Discord.MessageEmbed()
        .setTitle('Komendy bota:')
        //.setThumbnail(client.displayAvatarURL({dynamic: false, size: 512}))
        .setColor("#0000")
        .addFields(
            {name: '4fun:', value: 'avatar, grob, kot, pies', inline: true},
            {name: 'O Bocie', value: 'ping, help'},
            {name: 'Info:', value: 'userinfo, botinfo'},
            {name: 'Moderacyjne:', value: 'ban, kick, timeout'},
            {name: 'TicketSystem:', value: 'ticket, close'}
        )
        //.setAuthor('Autor:', message.author.avatarURL({ dynamic: true }))    
        .setTimestamp()
        .setFooter({text: `${message.author.tag}`, iconURL: `${message.author.avatarURL({ dynamic: true })}`});
        message.channel.send({ embeds: [embed] });
    }
}