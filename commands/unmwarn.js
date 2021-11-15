const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = {

 name: 'unwarn',
 callback: async ({client, message, args}) => {
  const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
   if (!args[0]) return message.channel.send('Где-то допущена ошибка!');

    const embed = new MessageEmbed()
    .setColor('RANDOM')
    .setDescription(`Пользователю <@${member.id}> был снят warn модератором <@${message.author.id}>. Причине ${args[1]} `)
    .setTimestamp()
    .setFooter('Технический Администратор, Андре Мориарти');

    message.channel.send(embed);
}
};
