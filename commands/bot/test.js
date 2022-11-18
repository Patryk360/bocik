const Discord = require('discord.js');
module.exports = {
    name: 'test',
    usage: '!test',
    async execute(message, args, client) {
        //message.guild.channels.fetch()
        //client.channels.cache.get('1042558174881906748').send('test');

        client.channels.fetch('1042558174881906748')
        .then(channel => console.log(channel.name))
        .catch(console.error);
        //if(client.channels.cache.get('1042558174881906748')) console.log('wykryto kanal o tej nazwie');

        //kanal.send({
            //content: 'test',
        //});
    }
}