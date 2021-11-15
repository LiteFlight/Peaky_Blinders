const Discord = require('discord.js');

module.exports = {

 name: 'play',
 callback: async ({client, message, args}) => {
  const channel = client.channels.cache.get("");
     if (!channel) return console.error("The channel does not exist!");
        channel.join().then(connection => {}).then(() => message.delete({ timeout : 1000 }));
      }
};
