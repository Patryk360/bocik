module.exports = {
    name: 'grob',
    description: 'wyswietla nagrobek',
    usage: '!grob',
    execute: async(message, args) => {
        let nick = args[0]; 
        let data = args.slice(1).join(" "); 
        if (!nick) return message.channel.send("Uzycie: !grob **<nick>** [data]"); 
        data = encodeURIComponent(data.trim());
        return message.channel.send(`http://www.tombstonebuilder.com/generate.php?top1=R.I.P&top2=&top3=${nick}&top4=${data}&sp=`);
    }
}