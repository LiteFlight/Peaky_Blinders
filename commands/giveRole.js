const Discord = require('discord.js');

module.exports = {

 name: 'giveRole',
 callback: async ({client, message, args}) => {
  const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
   if (!args[0]) return message.channel.send('не указанно данных!');
  const role = message.guild.roles.cache.find(role => role.id === "908569379988455424");
  await member.roles.add(role);
   message.channel.send('Пользователь получил роль!');

  }
};