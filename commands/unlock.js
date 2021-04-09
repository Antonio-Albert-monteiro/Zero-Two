const Discord = require("discord.js");

exports.run = async (client, message, args) => {

  let motivo = args.slice(" ").join(" ")
  if(!motivo) motivo = "Motivo não Informado"
      let avatar = message.author.avatarURL({ dynamic: true, format: "gif", size: 1024 });
            if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        const embed = new Discord.MessageEmbed()
        .setDescription(`${message.author}, Você não tem permissão para usar este comando.`)
        return message.channel.send(embed);
      }
    message.delete();
    message.channel.createOverwrite(message.guild.id, {
        SEND_MESSAGES: true,
        VIEW_CHANNEL: true
    })
    const embed = new Discord.MessageEmbed()
    .setTitle('CHAT DESTRANCADO')
    .setDescription(`Este chat foi desmutado.`)
    .addField('Trancar:', '(Coloque seu prefix aqui)', true)
    .addField('Trancado por:', `${message.author}`, true)
    .addField('Motivo:', motivo)
    .setTimestamp()
    .setThumbnail(avatar)
    .setColor('#8A2BE2')
    message.channel.send(embed);
    
}
