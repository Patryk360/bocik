const Discord = require('discord.js');
module.exports = {
    name: 'clear',
    description: 'clear',
    usage: '!clear',
    execute: async(message, args) => {
        const ilosc = args.join(' ').slice(0);
        const cperm = new Discord.MessageEmbed()
        .setTitle('Nie posiadasz permisji!')
        .setColor('#db0000')
        .addFields(
            { name: 'ID:', value: message.author.id, inline: false},
            {name: 'Nazwa Użytkownika:', value: message.author.tag, inline: false}
            )
        .setFooter({text: `${message.author.tag}`})
        .setTimestamp();
        if(!message.member.permissions.has('MANAGE_MESSAGES')) return message.channel.send({ embeds: [cperm] });
        message.channel.bulkDelete(ilosc);
        const embed = new Discord.MessageEmbed()
        .addFields(
            {name: 'Ilość usuniętych wiadomości:', value: `${ilosc}`, inline: false},
            {name: 'Nazwa Użytkownika:', value: message.author.tag, inline: false}
            )
        .setTimestamp();
        message.channel.send({embeds: [embed] });
    }
}