const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  const sayMessage = args.join(' ');
  message.delete().catch(O_o => {});
  
  const embed = new Discord.MessageEmbed()
  .setTitle(`comando novinho em folha🍃`)
  .setDescription(`\`${sayMessage}\``)
  .setFooter(`Enviado por ${message.author.username}`)
  .setColor('#8A2BE2')
  
 let channel = client.channels.cache.get("829724338759532565")
 channel.send(embed)
};