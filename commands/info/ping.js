const Discord = require('discord.js');
module.exports = {
    name: 'ping',
    description: 'pong',
    usage: '!ping',
    execute: async(message, args, client) => {
        var ping = Date.now() - message.createdTimestamp + " ms";
        const embed = new Discord.MessageEmbed()
        .setTitle('Ping')
        .addFields(
            {name: `ping wiadomosci`, value: `${message.createdTimestamp - message.createdTimestamp}ms`, inline: true},
            {name: 'ping:', value: `${ping}`, inline: true}
            )
        .setFooter({text: `${message.author.tag}`, iconURL: `${message.author.avatarURL({ dynamic: true })}`})
        .setTimestamp();
        message.channel.send({ embeds: [embed]});
    }
}