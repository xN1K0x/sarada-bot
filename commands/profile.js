const Discord = require("discord.js");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
    if(!coins[message.author.id]){
        coins[message.author.id] = {
            coins: 0
        };
    }

    let uCoins = coins[message.author.id].coins;
    let picon = message.author.displayAvatarURL
    let profileEmbed = new Discord.RichEmbed()
    .setTitle("Profile")
    .setColor("#15f153")
    .setThumbnail(picon)
    .addField("Username", message.author.username)
    .addField("Coins", uCoins)
    .addField("Joined At", message.member.joinedAt)
    .addField("Server", message.guild.name);

    message.channel.send(profileEmbed);
}

module.exports.help = {
    name: "profile"
}
