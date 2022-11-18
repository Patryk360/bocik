const Discord = require('discord.js');
module.exports = {
    name: 'kick',
    description: 'kick',
    usage: '!kick',
    execute: async(message, args, client) => {
        const buser = message.mentions.members.first();
        const breason = args.join(' ').slice(22);
        const bu = new Discord.MessageEmbed()
        .setTitle('Nie znaleziono takiego użytkownika!')
        .setColor('#db0000')
        .setFooter({text: `${message.author.tag}`, iconURL: `${message.author.avatarURL({ dynamic: true })}`})
        .setTimestamp();
        if(!buser) message.channel.send({ embeds: [bu] });

        const aaa = new Discord.MessageEmbed()
        .setTitle('Nie możesz wyrzucić samego siebie!')
        .setColor('#db0000')
        .addFields(
            { name: 'ID:', value: message.author.id, inline: false},
            {name: 'Nazwa Użytkownika:', value: message.author.tag, inline: false}
            )
        .setFooter({text: message.author.tag})
        .setTimestamp();
        if(buser.id === message.author.id) return message.channel.send({embeds: [aaa] });

        const bperm = new Discord.MessageEmbed()
        .setTitle('Nie posiadasz permisji!')
        .setColor('#db0000')
        .addFields(
            { name: 'ID:', value: message.author.id, inline: false},
            {name: 'Nazwa Użytkownika:', value: message.author.tag, inline: false}
            )
        .setFooter({text: `${message.author.tag}`})
        .setTimestamp();
        if(!message.member.permissions.has('KICK_MEMBERS')) return message.channel.send({ embeds: [bperm] });

        const adperm = new Discord.MessageEmbed()
        .setTitle('Nie możesz zbanować tej osoby!')
        .setColor('#db0000')
        .addFields(
            { name: 'ID:', value: message.author.id, inline: false},
            {name: 'Nazwa Użytkownika:', value: message.author.tag, inline: false}
            )
        .setFooter({text: `${message.author.tag}}`})
        .setTimestamp();
        if(buser.permissions.has('KICK_MEMBERS')) return message.channel.send({ embeds: [adperm] });

        const Banuser = new Discord.MessageEmbed()
        .setTitle('Kick')
        .addFields(
            { name: 'Wyrzucony użytkownik:', value: `${buser} ID: ${buser.id}`, inline: false },
            { name: 'Wyrzucony przez:', value: `<@${message.author.id}> ID: ${message.author.id}`, inline: false},
            { name: 'Powód:', value: `${breason}`, inline: false}
        )
        .setFooter({text: `${message.author.tag}`, iconURL: `${message.author.avatarURL({ dynamic: true })}`})
        .setTimestamp();
        message.channel.send({ embeds: [Banuser] });
        buser.kick({reason: breason});
    }
}