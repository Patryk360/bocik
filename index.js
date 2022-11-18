const Discord = require("discord.js");
const fs = require("fs");
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

client.commands = new Discord.Collection();
//const ascii = require('ascii-table');
///let table = new ascii("Komendy");
//table.setHeading("Nazwa", "Status");

const commandfolder = fs.readdirSync("./commands");
for(const folder of commandfolder) {

    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));

    for(const file of commandFiles){
        
        const command = require(`./commands/${folder}/${file}`);
        client.commands.set(command.name, command);

        if(command.name){
            //table.addRow(file, '✅');
            //console.log(file,'✅');
            console.log('✅|', file);
        }else{
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
    try{
        command.execute(message, args)
    }catch (error){
        console.error(error);
        console.log('ta komenda nie dziala');
    }
});


client.login("MTA0MTA2NzQ3ODI1MzU3MjIyNg.G2pIob.hgMlxIS6z2XVMyp6JVQoMSEvKCvWxNWQaRCnCY");