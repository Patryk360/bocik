const Discord = require('discord.js');
const superagent = require('superagent');
module.exports = {
    name: 'kot',
    description: 'zdjecie kotka',
    usage: '!kot',
    execute: async(message, args) => {
        let {body} = await superagent
        .get('http://aws.random.cat//meow')

        let embed = new Discord.MessageEmbed()
        .setTitle('Kotek')
        .setImage(body.file)
        .setFooter({text: `${message.author.tag}`, iconURL: `${message.author.avatarURL({ dynamic: true })}`})
        .setTimestamp();
        message.channel.send({ embeds: [embed] });
    }
}