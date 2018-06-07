const Discord = require("discord.js");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
    let c = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!c) return message.channel.send("Can't find user.");
    if(!coins[c.id]){
        coins[c.id] = {
            coins: 0
        };
    }

    let uCoins = coins[c.id].coins;

    let coinEmbed = new Discord.RichEmbed()
    .setAuthor(c)
    .setColor("#00FF00")
    .addField("💸", uCoins);

    message.channel.send(coinEmbed);
}

module.exports.help = {
    name: "coins"
}
