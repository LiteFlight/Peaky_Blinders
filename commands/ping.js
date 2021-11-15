const Discord = module.require("discord.js");
const { MessageEmbed } = require('discord.js');
const fs = require("fs");

module.exports = {
    name: 'ping',
    callback: async ({client,message,args,prefix}) => {
    const ping = new Date(message.createdTimestamp);
    const timeTaken = Date.now() - message.createdTimestamp;

    const embed = new MessageEmbed()
    .setColor("#9ACD32")
    .setTitle("Ответ.")
    .setDescription(`🏓 ${timeTaken}ms`);
    
    message.channel.send(embed);

}
}