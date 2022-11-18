const Discord = require("discord.js");
const client = new Discord.Client({
    intents: [
      Discord.Intents.FLAGS.GUILDS,
      Discord.Intents.FLAGS.GUILD_MESSAGES,
      Discord.Intents.FLAGS.GUILD_MEMBERS,
      Discord.Intents.FLAGS.GUILDS,
      Discord.Intents.FLAGS.GUILD_BANS,
      Discord.Intents.FLAGS.GUILD_WEBHOOKS,
      Discord.Intents.FLAGS.GUILD_PRESENCES,
      Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
      Discord.Intents.FLAGS.GUILD_SCHEDULED_EVENTS,
      Discord.Intents.FLAGS.GUILD_INTEGRATIONS,
      //Discord.Intents.FLAGS.INVITE_CREATE,
    ]
});
const discordModals = require('discord-modals');
discordModals(client);

module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        const { createTranscript } = require('discord-html-transcripts');

        if(interaction.customId === 'ticket-create'){
            //if (interaction.guild.channels.cache.find(c => c.name == `ticket-${interaction.user.username}`)) {
                //return interaction.reply('zrobiles juz ticket');
            //};
            interaction.guild.channels.fetch()
            if(interaction.guild.channels.cache.find(c => c.name == `ticket-${interaction.user.username}`)) console.log('wykryto kanal o tej nazwie');//dokonczyc

            interaction.guild.channels.create(`ticket-${interaction.user.username}`, {
                type: 'text',
                permissionOverwrites: [
                    {
                        id: interaction.user.id,
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']
                    },
                    
                    {
                        id: interaction.guild.roles.everyone,
                        deny: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
                    },
                    {
                        id: '1041071473164554383',
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']
                    }
                ]
    
            }).then(async c  => {
    
                const tembed = new Discord.MessageEmbed()
                .setTitle(`${interaction.user.tag} utworzyl ticket`)
                .setFooter({text: `${interaction.user.tag}`, iconURL: `${interaction.user.avatarURL({ dynamic: true })}`})
                .setTimestamp();
                const button = new Discord.MessageActionRow()
                .setComponents(
                    new Discord.MessageButton()
                    .setCustomId('close-ticket')
                    .setLabel('Zamknij')
                    .setEmoji('🔒')
                    .setStyle('SECONDARY')
                );
    
                msg = await c.send({
                    embeds: [tembed],
                    components: [button]
                });
    
            })
        }

        if(interaction.customId === 'close-ticket'){
            
            if(!interaction.member.permissions.has('MANAGE_CHANNELS')){
                const embed = new Discord.MessageEmbed()
                .setTitle('Nie masz uprawnień do używania tego!')
                .setTimestamp()
                .setFooter({text: `${interaction.author.tag}`, iconURL: `${interaction.author.avatarURL({ dynamic: true })}`});
                return interaction.channel.send({ embeds: [embed] });
            }

            const transcript = await createTranscript(interaction.channel, {
                limit: -1,
                filename: `ticket-${interaction.user.username}.html`,
                saveImages: false
            });
            const cembed = new Discord.MessageEmbed()
            .setTitle('Zamknięto ticket')
            .setThumbnail(interaction.user.displayAvatarURL())
            .addFields(
                {name: 'Kanał:', value: `#ticket-${interaction.user.username}`, inline: true},
                {name: 'Użytkownik:', value: `${interaction.user.tag}`, inline: false}
            )
            .setColor('#db0000')
            .setTimestamp();

            client.channels.cache.get('1041070771914682469').send({
                files: [transcript],
                embeds: [cembed]
                
            })
            interaction.channel.delete();
        }
        const { Modal, TextInputComponent, SelectMenuComponent, showModal } = require('discord-modals');
        
        if(interaction.customId === 'yt'){
                
            const modal = new Modal()
	        .setCustomId('modal-customid')
	        .setTitle('Podanie o współprace YT')
	        
		    const ytname = new TextInputComponent()
			    .setCustomId('ytname')
			    .setLabel('Nazwa kanału')
			    .setStyle('SHORT')
			    .setPlaceholder('np. adenks kocha siusiaki')
			    .setRequired(true)

            const ytwhy =  new TextInputComponent()
                .setCustomId('ytwhy')
                .setLabel('Dlaczego mamy z tobą zawrzeć współprace?')
                .setStyle('PARAGRAPH')
                .setPlaceholder('Opowiedz cos o sobie')
                .setRequired(true)

            const ytlink = new TextInputComponent()
                .setCustomId('ytlink')
                .setLabel('Podaj link do kanału')
                .setStyle('SHORT')
                .setPlaceholder('Link')
                .setRequired(true)

	        modal.addComponents(ytname, ytlink, ytwhy);
            interaction.showModal(modal);

            //if (modal.customId === 'modal-customid') {
                //const ytname = modal.getTextInputValue('ytname');
                //console.log(`**${ytname}** `)
            //}
    
        }

        if(interaction.customId === 'anuluj-close'){
            if(!interaction.member.permissions.has('MANAGE_CHANNELS')){
                const embed = new Discord.MessageEmbed()
                .setTitle('Nie masz uprawnień do używania tego!')
                .setTimestamp()
                .setFooter({text: `${interaction.author.tag}`, iconURL: `${interaction.author.avatarURL({ dynamic: true })}`});
                return interaction.channel.send({ embeds: [embed] });
            }
            interaction.channel.bulkDelete(2);
            const aembed = new Discord.MessageEmbed()
            .setDescription('Anulowano zamknięcie ticketu')
            interaction.channel.send({ embeds: [aembed] });
        }

        //if(interaction.is)

        const collector = interaction.channel.createMessageComponentCollector({
            max: "1", // The number of times a user can click on the button
            time: "-1", // The amount of time the collector is valid for in milliseconds,
        });
        
        //collector.on('collect', i => {
            //const embed = new Discord.MessageEmbed()
            //.setTitle(message.author.tag+'Utworzył ticket');

            //tchannel.send({ embeds: [embed], components: [button]});
        //})

        //collector.on('end', i => {
            //console.log(`Zamknięto #ticket-${interaction.user.username}`);
        //})
        


    }
}