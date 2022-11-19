const { ButtonStyle } = require('discord.js');
const Discord = require('discord.js');
module.exports = {
    name: 'ready',
    async execute(client) {
        console.log(`${client.user.tag} działa ✅`);

        let statuses = [
            `prefix: !`,
            `RAAAAAA!`,
            `OGMC.PL`,
            `:3`
        ]
        client.user.setStatus('dnd');
        setInterval(function() {
            let status = statuses[Math.floor(Math.random() * statuses.length)];
            //client.user.setActivity(status, {type: "STREAMING", url: "https://twitch.tv/Strendable"});
            client.user.setActivity(status, {type: 'WATCHING'});
    
        }, 5000)
    }
}