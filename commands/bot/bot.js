module.exports = {
    name: 'nig',
    usage: 'bot',
    execute: async(message, args, client) => {
        message.channel.send(`tyle czarnuchuw jest ${message.guild.memberCount}`);
    }
}