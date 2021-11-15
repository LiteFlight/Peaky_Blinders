const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = {

 name: 'warn',
 callback: async ({client, message, args}) => {
  const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
   if (!args[0]) return message.channel.send('Где-то допущена ошибка!');

    const embed = new MessageEmbed()
    .setColor('RANDOM')
    .setDescription(`Модератор <@${message.author.id}> выдал предупреждение <@${member.id}>, причине ${args[1]} `)
    .setTimestamp()
    .setFooter('Технический Администратор, Андре Мориарти');

    message.channel.send(embed);
}
};
