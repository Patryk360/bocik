const Discord = require('discord.js');
const Canvas = require('canvas');
module.exports = {
    name: 'canvas',
    description: 'canvas',
    usage: '!canvas',
    execute: async(message, args) => {
        const canvas = Canvas.createCanvas(700, 250);
        const ctx = canvas.getContext('2d');

        const background = await Canvas.loadImage('./hhoney.jpg');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        const avatar = await Canvas.loadImage(message.member.user.displayAvatarURL({ format: 'jpg' }));
        ctx.drawImage(avatar, 25, 25, 150, 150);

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'canvas.png');

        message.channel.send({files: [attachment]})

    }
}