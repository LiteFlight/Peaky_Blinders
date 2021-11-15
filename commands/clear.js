const Discord = require('discord.js');

module.exports = {

 name: 'clear',
 callback: async ({client, message, args}) => {

    if (!args[0]) return message.channel.send('Укажите кол-во удаленных сообщений!');
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`Удалено: ${args[0]} сообщений.`)
        .then((msg) => msg.delete({ timeout : 5000 }));
    });
    }
};