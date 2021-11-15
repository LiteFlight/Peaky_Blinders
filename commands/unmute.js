const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = {

 name: 'unmute',
 callback: async ({client, message, args}) => {
  const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
   if (!args[0]) return message.channel.send('Где-то допущена ошибка!');
  const role = message.guild.roles.cache.find(role => role.id === "908754997813067797");
  await member.roles.remove(role);

    const embed = new MessageEmbed()
  .setColor('RANDOM')
  .setDescription(`Пользователю <@${member.id}> был снят mute модератором <@${message.author.id}>. Причине ${args[1]} `)
  .setTimestamp()
  .setFooter('Технический Администратор, Андре Мориарти');

    message.channel.send(embed);
}
};