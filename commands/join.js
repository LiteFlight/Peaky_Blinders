const Discord = require('discord.js');

module.exports = {

 name: 'join',
 callback: async ({client, message, args}) => {
  const channel = client.channels.cache.get("908447533657911366");
     if (!channel) return console.error("The channel does not exist!");
        channel.join().then(connection => {}).then(() => message.delete({ timeout : 1000 }));
      }
};
