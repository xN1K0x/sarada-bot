const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    

    if(!args[1]) return message.reply("You need to type at least 2 words to use in the slogan.");
    let replies = [`Think unforgettable ${args}`, `The number one source for everything ${args}`, `Experienced in ${args}`, `Raising the bar for ${args} distinction`, `We do top-notch ${args}`, `The veteran ${args} people`, `We believe in amazing ${args}`, `The fine art of ${args}`, `We take pride in our ${args}`, `The good ${args} artisans`, `The number one source for ${args}`, `Raising the bar for dynamite ${args}`, `The ${args} authority`, `The accomplished ${args} virtuosos`, `Believers in fine ${args}`, `We know our ${args}`, `We take pride in wondrous ${args}`, `Beyond ${args}`];

    let result = Math.floor((Math.random() * replies.length));
    
    let sloganembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#FF9900")
    .addField("Your slogan", replies[result]);

    message.channel.send(sloganembed);

}

module.exports.help = {
    name: "slogan"
}
