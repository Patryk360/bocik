const Discord = require('discord.js');
module.exports = {
    name: 'eval',
    description: 'eval',
    usage: '!eval',
    execute: async(message, args) => {
        const clean = text => {
            if (typeof(text) === "string")
              return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
            else
                return text;
          }
    
          let evalembed = new Discord.EmbedBuilder()
          .setDescription("Nie masz dostępu do tej komendy!")
          .setDescription("Tylko Właściciel bota ma dostęp do tej komendy.");
    
          if(message.author.id !== "527054609840340992") return message.channel.send({embeds: [evalembed]});
          try {
            const code = args.join(" ");
            let evaled = eval(code);
       
            if (typeof evaled !== "string")
              evaled = require("util").inspect(evaled);
       
            //message.channel.send(clean(evaled), {code:"xl"});
            message.channel.send(clean(evaled));
        } catch (err) {
            message.channel.send(`\`\`\`ERROR\`\`\`\`\`\`xl\n${clean(err)}\n\`\`\``);
        }
    }
}