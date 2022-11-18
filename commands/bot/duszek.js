const Discord = require('discord.js');
const Canvas = require('canvas');
module.exports = {
    name: 'duszek',
    usage: '!duszek',
    execute: async(message, args) => {
        message.channel.send({content: 'BUU https://tenor.com/view/cat-kitty-kitten-cute-pussy-cat-gif-15745491'});

    }
}