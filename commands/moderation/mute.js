const Discord = require('discord.js');
module.exports = {
    name: 'mute',
    usage: '!mute',
    execute: async(message, args, client) => {

        const channel = client.channels.cache.get('1042558174881906748');
        //const channel = client.guild.channels.chache.get('name', 'logi');
        if (!channel) return console.log('nie ma kanalu do powitań!!');

        const buser = message.mentions.members.first();
        const breason = args.join(' ').slice(22);
        const bu = new Discord.MessageEmbed()
        .setTitle('Nie znaleziono takiego użytkownika!')
        .setColor('#db0000')
        .setFooter({text: `${message.author.tag}`, iconURL: `${message.author.avatarURL({ dynamic: true })}`})
        .setTimestamp();
        if(!buser) message.channel.send({ embeds: [bu] });

        const aaa = new Discord.MessageEmbed()
        .setTitle('Nie możesz zmutować samego siebie!')
        .setColor('#db0000')
        .addFields(
            {name: 'Nazwa Użytkownika:', value: message.author.tag, inline: false},
            {name: 'ID:', value: message.author.id, inline: false}
            )
        //.setFooter({text: message.author.tag})
        .setTimestamp();
        if(buser === message.author.id) return message.channel.send({embeds: [aaa] });

        buser.roles.add('1042556609244692592');

        const embed = new Discord.MessageEmbed()
        .setTitle('Zmutowano')
        .setThumbnail(buser.avatarURL({dynamic: true}))
        .addFields(
            {name: 'Nazwa Użytkownika:', value: buser.user.tag, inline: false},
            {name: 'ID', value: buser.id, inline: false},
        )
        .setTimestamp();

        channel.send({
            embeds: [embed],
        });
    }
}