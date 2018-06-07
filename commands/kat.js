const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

    let {body} = await superagent
    .get(`http://aws.random.cat//meow`);

    let katembed = new Discord.RichEmbed()
    .setColor("#ff9900")
    .setTitle("Kat🐱")
    .setImage(body.file);

    message.channel.send(katembed);

}

module.exports.help = {
    name: "kat"
}
