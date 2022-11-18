const Discord = require('discord.js');
const fs = require('fs');
module.exports = {
    name: 'set',
    description: 'set',
    usage: '!set',
    execute: async(message, args, client) => {
        let opcja = args[0];
        let jd = args.slice(1);
        
        const zembed = new Discord.MessageEmbed()
        .setTitle('Złe użycie!')
        .setColor('#db0000')
        .setDescription('Użyj `!set help`, aby się dowiedzieć więcej')
        if(!args[0]) return message.reply({ embeds: [zembed] });

        const hembed = new Discord.MessageEmbed()
        .setTitle('Ustawienia ID')
        .setColor('#060fbf')
        .setDescription('Użycie: !set <opcja> <id>')
        .addFields(
            { name: 'LogChannel', value: 'logc', inline: false },
            { name: 'TicketChannel', value: 'tcreate', inline: false },
            { name: 'TicketMessage', value: 'tmes', inline: false}

        )
        .setFooter({text: `${message.author.tag}`, iconURL: `${message.author.avatarURL({ dynamic: true })}`})
        .setTimestamp();
        if(args[0]=='help') return message.channel.send({embeds: [hembed]});
        


        let logc = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
        logc[message.guild.id] = {
            LogsChannel: args.slice(1)
        };
        if(opcja === 'logc') {
            const lemebed = new Discord.MessageEmbed()
            .setTitle('Ustawienie kanału od logów')
            .setDescription(`Pomyślnie zmieniono id na: ${jd}`)
            .setFooter({text: `${message.author.tag}`, iconURL: `${message.author.avatarURL({ dynamic: true })}`})
            .setTimestamp();
            message.channel.send({ embeds: [lemebed] });

            fs.writeFile('./config.json', JSON.stringify(logc), (err) => {
                if(err) console.log(err)
            });
            console.log(`${opcja} został ustawiony na: ${jd}`);
        }
    }
}