const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.DirectMessageReactions,
        Discord.GatewayIntentBits.GuildBans,
        Discord.GatewayIntentBits.GuildInvites,
        Discord.GatewayIntentBits.GuildMessageTyping,
        Discord.GatewayIntentBits.GuildScheduledEvents,
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.DirectMessageTyping,
        Discord.GatewayIntentBits.GuildEmojisAndStickers,
        Discord.GatewayIntentBits.GuildMembers,
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.GuildVoiceStates,
        Discord.GatewayIntentBits.MessageContent,
        Discord.GatewayIntentBits.DirectMessages,
        Discord.GatewayIntentBits.GuildIntegrations,
        Discord.GatewayIntentBits.GuildMessageReactions,
        Discord.GatewayIntentBits.GuildPresences,
        Discord.GatewayIntentBits.GuildWebhooks
    ]
});

client.commands = new Discord.Collection();
//const ascii = require('ascii-table');
///let table = new ascii("Komendy");
//table.setHeading("Nazwa", "Status");

const commandfolder = fs.readdirSync("./commands");
for(const folder of commandfolder) {

    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));

    for(const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`);
        client.commands.set(command.name, command);

        if(command.name){
            //table.addRow(file, '✅');
            //console.log(file,'✅');
            console.log('✅|', file);
        } else {
            //table.addRow(file, `❌`);
            //console.log(file, `❌ -> cos sie zesrało`);
            console.log('❌|', file);
            continue;
        }
    }
}
//console.log(table.toString());
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
  const event = require(`./events/${file}`);
    client.on(event.name, (...args) => event.execute(...args, client));
};

const prefix = "!";

client.on('messageCreate', async message => {
    
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if(!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);
    try {
        command.execute(message, args, client);
    } catch (error) {
        console.error(error);
        console.log('ta komenda nie dziala');
    }
});

client.login("");