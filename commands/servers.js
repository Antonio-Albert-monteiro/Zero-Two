const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "guilds",
  description: "View all guilds the bot is in",
  category: "owner",
  botOwnersOnly: true,
 
  run: (client, message) => {
    message.delete().catch(O_o => {});
    const guilds = client.guilds.cache;
    let avatar = message.author.displayAvatarURL({format: 'png'});

    const embed = new MessageEmbed()
      .setThumbnail(avatar)
      .setTitle(`Servidores que estou`)
      .setColor("8A2BE2")
      .setFooter(message.author.tag);

    let description = "";
    guilds.forEach((guild) => {
      description += `**${guild.name}**\nId: ${guild.id}\n\n\n`;
    });

    embed.setDescription(description);

    message.channel.send({ embed });
  },
};