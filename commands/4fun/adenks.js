const Discord = require('discord.js');
const superagent = require('superagent');
module.exports = {
    name: 'pies',
    description: 'zdjecie pieska',
    usage: '!pies',
    execute: async(message, args) => {
        let {body} = await superagent
        .get('https://random.dog/woof.json')

        let embed = new Discord.MessageEmbed()
        .setTitle('Pies')
        .setImage(body.url)
        .setFooter({text: `${message.author.tag}`, iconURL: `${message.author.avatarURL({ dynamic: true })}`})
        .setTimestamp();
        message.channel.send({ embeds: [embed] });
    }
}