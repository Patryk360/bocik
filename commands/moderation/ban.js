const Discord = require('discord.js');
module.exports = {
    name: 'ban',
    description: 'ban',
    usage: '!ban',
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
        .setTitle('Nie możesz zbanować samego siebie!')
        .setColor('#db0000')
        .addFields(
            {name: 'Nazwa Użytkownika:', value: message.author.tag, inline: false},
            {name: 'ID:', value: message.author.id, inline: false}
            )
        //.setFooter({text: message.author.tag})
        .setTimestamp();
        if(buser === message.author.id) return message.channel.send({embeds: [aaa] });

        const bperm = new Discord.MessageEmbed()
        .setTitle('Nie posiadasz permisji!')
        .setColor('#db0000')
        .addFields(
            {name: 'Nazwa Użytkownika:', value: message.author.tag, inline: false},
            {name: 'ID:', value: message.author.id, inline: false}
            )
        //.setFooter({text: `${message.author.tag}`})
        .setTimestamp();
        if(!message.member.permissions.has('BAN_MEMBERS')) return message.channel.send({ embeds: [bperm] });

        const adperm = new Discord.MessageEmbed()
        .setTitle('Nie możesz zbanować tej osoby!')
        .setColor('#db0000')
        //.addFields(
            //{name: 'Nazwa Użytkownika:', value: buser, inline: false},
            //{name: 'ID:', value: buser.id, inline: false}
            //)
        .setFooter({text: `${message.author.tag}`})
        .setTimestamp();
        if(buser.permissions.has('BAN_MEMBERS')) return message.channel.send({ embeds: [adperm] });

        const Banuser = new Discord.MessageEmbed()
        .setTitle('Ban')
        .addFields(
            { name: 'Zbanowany użytkownik:', value: `${buser} ID: ${buser.id}`, inline: false },
            { name: 'Zbanowany przez:', value: `<@${message.author.id}> ID: ${message.author.id}`, inline: false},
            { name: 'Powód:', value: `${breason}`, inline: false}
        )
        .setFooter({text: `${message.author.tag}`, iconURL: `${message.author.avatarURL({ dynamic: true })}`})
        .setTimestamp();
        message.channel.send({ embeds: [Banuser] });
        buser.ban({days: 1, reason: breason});
    }
}