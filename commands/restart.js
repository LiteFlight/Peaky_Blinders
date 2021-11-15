const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
require('dotenv').config()

module.exports = {

name: 'restart',
 callback: async ({client, message, args}) => {
    if (message.author.id !== "577095101608886322") return false;
    console.log("Бот перезапускается!")
    client.destroy();
    client.login(process.env.TOKEN);

const embed = new MessageEmbed()
.setColor('RANDOM')
.setTitle('Перезапуск')
.setAuthor('Кай - Всемогущий')
.setDescription(`Вы успешно перезапустили бота!`)
.setThumbnail('https://i.imgur.com/AfFp7pu.png')
.setTimestamp()
.setFooter('Технический Администратор, Андре Мориарти');

message.channel.send(embed);
console.log("Бот был успешно перезапущен!");
}};

