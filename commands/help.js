const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let helpembed = new Discord.RichEmbed()
    .setDescription("~Help~")
    .setColor("#0000FF")
    .addField("Money 💸", "coins, pay, more comming soon...")
    .addField("Random", "ping, serverinfo, help")
    .addField("Image", "kat, doggo, more comming soon...")
    .addField("Staff", "kick, ban, tempmute")
    .addField("Shop", "Type ..shop for information.")
    .addField("Server", message.guild.name);

    message.author.send(helpembed);
    message.channel.send("Look in your DM's.");

}

module.exports.help = {
    name: "help"
}
