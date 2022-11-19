const Discord = require('discord.js');

module.exports = {
    name: 'ankieta',
    description: 'ankieta',
    usage: '!ankieta',
    execute: async(message, args) => {
        const kanal = message.guild.channels.cache.find(channel => channel.name === 'ankiety');
        if(!kanal) {
            message.channel.send('Nie znaleziono kanału "ankiety"');
            return;
        }
        let mes = args.join(" ");
        const tak = '✅';
        const nie = '❌';
        const embed = new Discord.EmbedBuilder()
        .setTitle('Nowa ankieta')
        .addFields(
            {name: `Propozycja`, value: `${mes}`, inline: false}
            )
        .setFooter({text: `${message.author.tag}`, iconURL: `${message.author.avatarURL({ dynamic: true })}`})
        .setTimestamp();

        let messagembed = await kanal.send({ embeds: [embed]});
        messagembed.react(tak);
        messagembed.react(nie);
    }
}