const Discord = require('discord.js');
module.exports = {
    name: 'timeout',
    description: 'timeout',
    usage: '!timeout',
    execute: async(message, args) => {
        const time = args.join(' ').slice(22);
        const member = message.mentions.members.first();

        const tperm = new Discord.MessageEmbed()
        .setTitle('Nie posiadasz permisji!')
        .setColor('#db0000')
        .addFields(
            {name: 'Nazwa Użytkownika:', value: message.author.tag, inline: false},
            {name: 'ID:', value: message.author.id, inline: false}
            )
        .setFooter({text: `${message.author.tag}`})
        .setTimestamp();
        if(!message.member.permissions.has('MODERATE_MEMBERS')) return message.channel.send({ embeds: [tperm] });

        const bu = new Discord.MessageEmbed()
        .setTitle('Nie znaleziono takiego użytkownika!')
        .setColor('#db0000')
        .setFooter({text: `${message.author.tag}`, iconURL: `${message.author.avatarURL({ dynamic: true })}`})
        .setTimestamp();
        if(!member) message.channel.send({ embeds: [bu] });

        const tembed = new Discord.MessageEmbed()
        .setTitle('Nie podano czasu!')
        .addFields(
            {name: 'Długość przerwy:', value: '1min, 5min, 1h, 1d', inline: true}
        )
        .setColor('#db0000')
        .setFooter({text: `${message.author.tag}`, iconURL: `${message.author.avatarURL({ dynamic: true })}`})
        .setTimestamp();
        if(!time) return message.channel.send({ embeds: [tembed] });

        const aaa = new Discord.MessageEmbed()
        .setTitle('Nie możesz wysłać samego siebie na przerwę!')
        .setColor('#db0000')
        .addFields(
            {name: 'Nazwa Użytkownika:', value: message.author.tag, inline: false},
            {name: 'ID:', value: message.author.id, inline: false}
            )
        //.setFooter({text: message.author.tag})
        .setTimestamp();
        if(member.id === message.author.id) return message.channel.send({embeds: [aaa] });

        const embed = new Discord.MessageEmbed()
        .setTitle('Wysłano na przerwę!')
        .addFields(
            {name: 'Nazwa Użytkownika:', value: `${member}`, inline: true},
            {name: 'ID:', value: member.id, inline: true},
            {name: 'Czas:', value: time, inline: false}
            )
        .setFooter({text: message.author.tag})
        .setTimestamp();

        if(time === '1min'){
            member.timeout(60_000); 
            message.channel.send({embeds: [embed] });
            return;
        }
        if(time === '5min'){
            member.timeout(300000); 
            message.channel.send({embeds: [embed] });
            return;
        }
        if(time === '1h'){
            member.timeout(3600000); 
            message.channel.send({embeds: [embed] });
            return;
        }
        if(time === '1d'){
            member.timeout(86400000); 
            message.channel.send({embeds: [embed] });
            return;
        }
    }
}