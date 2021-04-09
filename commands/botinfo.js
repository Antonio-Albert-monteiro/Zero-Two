const Discord = require("discord.js");

exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('8A2BE2')
    .setDescription(`Olá ${message.author}, Abaixo está uma algumas informações sobre mim é os meus desemvolvedores:`)
    .setTimestamp()
    .setFooter(`Comando gerado por: ${message.author.username}`)
    .addFields(`<:pessoas:826048126023761940> meus desemvolvedores:`,message.author, false)
    message.channel.send(embed);
}