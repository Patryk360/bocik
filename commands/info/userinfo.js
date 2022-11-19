const Discord = require('discord.js');
module.exports = {
    name: 'userinfo',
    description: 'userinfo',
    usage: '!userinfo',
    execute: async(message, args) => {
        const member = message.mentions.members.first() || message.author;
        //const role = member.roles.map(r => r).join(', ') || 'none';
        //.filter(r=>r.id !== message.guild.id)
        
        

        const embed = new Discord.EmbedBuilder()
        .setTitle('Informacja o użytkowniku')
        .setThumbnail(member.displayAvatarURL())
        .addFields(
            {name: 'Nazwa użytkownika:', value: member.tag, inline: true},
            {name: 'ID:', value: member.id, inline: false},
            //{name: 'Role:', value: `${role}`, inline: true}
        );
        message.channel.send({ embeds: [embed] });
    }
}