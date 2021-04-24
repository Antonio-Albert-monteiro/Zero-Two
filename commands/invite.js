const { MessageEmbed } = require("discord.js");
const client = require('discord.js');

exports.run = async function (client, message, args) {
    
    var permissions = 37080128;
    
    let invite = new MessageEmbed()
    .setTitle(`Invite ${client.user.username}`)
    .setDescription(`vc estar me chamando para o seu sever? aqui estar o meu link de Invite  \n\n [Invite Link](https://discord.com/oauth2/authorize?client_id=822903328995803177&scope=bot&permissions=8)`)
    .setURL(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=${permissions}&scope=bot`)
    .setColor('#8A2BE2')
    return message.channel.send(invite);
}
