const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setTitle(`Central de comandos`)
    .setDescription(`aperte em uma reação pra ver tal comandos 
     <:ticket_1:821034996693205002> moderação
     😎 diversão
     😍 informação
     😆 utils`)
    .setColor("RANDOM")    
    message.channel.send(embed).then(msg => {
      msg.react("😏")
      msg.react("😎")
      msg.react("😍")
      msg.react("😆")

      let filtro1 = (r, u) => r.emoji.name === '😏' && u.id === message.author.id;
      let filtro2 = (r, u) => r.emoji.name === '😎' && u.id === message.author.id;
      let filtro3 = (r, u) => r.emoji.name === '😍' && u.id === message.author.id;
      let filtro4 = (r, u) => r.emoji.name === '😆' && u.id === message.author.id;

      let coletor = msg.createReactionCollector(filtro1);
      let coletor2 = msg.createReactionCollector(filtro2);
      let coletor3 = msg.createReactionCollector(filtro3);
      let coletor4 = msg.createReactionCollector(filtro4);

      coletor.on("collect", c => {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Comandos de moderação`)
        .setDescription(`Moder`)
        .setColor("RANDOM")
        
        msg.edit(embed)
      })

      coletor2.on("collect", c => {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Comandos de diversão`)
        .setDescription(`Diversão`)
        .setColor("RANDOM")

        msg.edit(embed)
      })

      coletor3.on("collect", c => {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Comandos de informação`)
        .setDescription(`Info`)
        .setColor("RANDOM")
        
        msg.edit(embed)
      })

      coletor4.on("collect", c => {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Comandos de utils`)
        .setDescription(`Utils`)
        .setColor("RANDOM")
        
        msg.edit(embed)
      })
    })
  }
