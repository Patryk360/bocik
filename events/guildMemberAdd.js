const Discord = require('discord.js');
const Canvas = require('canvas');
module.exports = {
    name: 'guildMemberAdd',
    async execute(member, client) {

        console.log(member.user.tag+ 'Dołączył na server!');

        const channel = client.channels.cache.get('1042188070537134130');
        if (!channel) return console.warn('nie ma kanalu do powitań!!');

        const canvas = Canvas.createCanvas(700, 250);
        const ctx = canvas.getContext('2d');

        const background = await Canvas.loadImage('./hhoney.jpg');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
        ctx.drawImage(avatar, 25, 25, 150, 150);

        ctx.strokeStyle = '#74037b';
        ctx.strokeRect(0, 0, canvas.width, canvas.height);
        
        ctx.font = '28px sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.fillText('Powitajmy na serwerze,', canvas.width / 2.5, canvas.height / 3.5);
        
        ctx.font = '42px sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);
        
        ctx.beginPath();
        ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.clip();

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'canvas.png');

        channel.send({files: [attachment]})
        
    }
}