const Discord = require('discord.js');
module.exports = {
    name: 'avatar',
    description: 'avatar',
    usage: '!avatar',
    execute: async(message, args) => {
        const member = message.mentions.members.first() || message.author;

        const embed = new Discord.MessageEmbed()
        .setTitle('Avatar URL')
        .setURL(member.displayAvatarURL())
        //.setAuthor(member.tag, member.avatarURL({dynamic: false, size: 512}))
        .setImage(member.displayAvatarURL({dynamic: false, size: 512}))
        .setFooter({text: `${message.author.tag}`, iconURL: `${message.author.avatarURL({ dynamic: false })}`})
        .setTimestamp();
        message.channel.send({ embeds: [embed] });
    }
}