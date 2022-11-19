const Discord = require('discord.js');
const { WebhookClient } = require('discord.js');
module.exports = {
    name: 'web',
    description: 'web',
    usage: '!web',
    execute: async(message, args, client) => {
        let mes = args.join(" ");
        //message.channel.createWebhook({
            //name: 'nazwa',
        //}).then(webhook => console.log(`Stworzono ${webhook}`))
            //.catch(console.error);

        const webhooks = await message.channel.fetchWebhooks();
        const webhook = webhooks.find(wh => wh.token);

        const embed = new Discord.EmbedBuilder()
            .setTitle('Sex?')
            .addFields(
                {name: `Propozycje`, value: `${mes}`, inline: false}
            )
            .setColor("FUCHSIA");

        webhook.send({
            username: message.author.username,
            avatarURL: message.author.avatarURL(),
            embeds: [embed],
        });

        const tak = '✅';
        const nie = '❌';
        
        let messagembed = await webhook.send({ embeds: [embed]});
        messagembed.react(tak);
        messagembed.react(nie);
    }
}