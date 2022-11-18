const Discord = require('discord.js');
module.exports = {
    name: 'modalSubmit',
    async execute(modal) {
        if (modal.customId === 'modal-customid') {

            //let cate = modal.guild.channels.cache.find((c) => c.name === "yt" && c.type === "GUILD_CATEGORY")
            //if (!cate) return modal.followUp('nie znaleziono kategorii')
        
            const ytlink = modal.getTextInputValue('ytlink');
            const ytname = modal.getTextInputValue('ytname');
            const ytwhy = modal.getTextInputValue('ytwhy');
            
            //modal.reply({
                //content: `#podanie-yt-${modal.user.username}`,
                //ephemeral: true
            //});
        
           modal.guild.channels.create(`podanie-yt-${modal.user.username}`, {
                type: 'text',
                permissionOverwrites: [
                    {
                        id: modal.user.id,
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']
                    },
                    
                    {
                        id: modal.guild.roles.everyone,
                        deny: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
                    },
                    {
                        id: '1041071473164554383',
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']
                    }
                ]
        
            }).then(async c  => {
                modal.reply({
                    content: `Podanie zostało utworzone! <#${c.id}>`,
                    ephemeral: true,
                    setTimeout: '5000'
                })

                const tembed = new Discord.MessageEmbed()
                .setTitle(`${modal.user.tag} utworzyl podanie o współprace YouTube`)
                .setURL(ytlink)
                .setColor('RED')
                .addFields(
                    {name: 'Nazwa Kanału:', value: ytname, inline: false},
                    {name: 'Link', value: ytlink, inline: false},
                    {name: 'Dlaczego mamy z tobą zawierać współprace?', value: ytwhy, inline: false}
                    )
                .setFooter({text: `${modal.user.tag}`, iconURL: `${modal.user.avatarURL({ dynamic: true })}`})
                .setTimestamp();
                const button = new Discord.MessageActionRow()
                .setComponents(
                    new Discord.MessageButton()
                    .setCustomId('close-ticket')
                    .setLabel('Zamknij')
                    .setEmoji('🔒')
                    .setStyle('SECONDARY'),
        
                );
        
                msg = await c.send({
                    embeds: [tembed],
                    components: [button]
                });
        
            })
            }
    }
}