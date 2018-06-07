const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Can't find user.");
    let bReason = args.join(" ").slice(22);
    if(!bReason) return message.channel.send("Can't find reason.");
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("This command can only be used by staff.");
    if(bUser.hasPermission("ADMINISTRATOR")) return message.channel.send("You can't ban this user.");

    let banembed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#0000")
    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
    .addField("banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);

    let banChannel = message.guild.channels.find(`name`, "logs");
    if(!banChannel) return message.channel.send("Can't find 'logs' channel.");

    message.guild.member(bUser).ban(bReason);
    banChannel.send(banembed);

}

module.exports.help = {
    name: "ban"
}
