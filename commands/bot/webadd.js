const Discord = require('discord.js');
const { WebhookClient } = require('discord.js');
module.exports = {
    name: 'webadd',
    description: 'webadd',
    usage: '!webadd',
    execute: async(message, args, client) => {

        message.channel.createWebhook({
            name: 'Some-username',
            avatar: 'https://i.imgur.com/AfFp7pu.png',
        })
            .then(webhook => console.log(`Created webhook ${webhook}`))
            .catch(console.error);
    }
}