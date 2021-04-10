const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  const sayMessage = args.join(' ');
  message.delete().catch(O_o => {});
  
  let channel = client.channels.cache.get("829724338759532565")  
  channel.send(`\`${sayMessage}\``);
};