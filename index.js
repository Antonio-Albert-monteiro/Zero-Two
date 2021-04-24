const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const server = require("./server.js")
const firebase = require('firebase');
const banco = require("./banco.js")

const database = firebase.database();

client.on("guildMemberAdd", async (member) => {
  let guild = await client.guilds.cache.get("816830052795809802");
  let channel = await client.channels.cache.get("816831474475991060");
  if (guild != member.guild) {
      return console.log("mas um membro, mas que pena que n foi no principal");
   } else {
      let embed = await new Discord.MessageEmbed()
      .setColor("#8A2BE2")
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(`Boas-vindas`)
      .setImage("https://imgur.com/DMOfs3L.gif")
      .setDescription(`**${member.user}**, seja  bem-vindo(a) ao servidor **${guild.name}**! Atualmente estamos com **${member.guild.memberCount} membros**,va para <#822511287173906452> e divirta-se! :heart:`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setFooter("Seja bem vindo")
      .setTimestamp()

    channel.send(embed);
  }
});

client.on("guildMemberRemove", async (member) => {
    let guild = await client.guilds.cache.get("816830052795809802");
    let channel = await client.channels.cache.get("822400247925964811");
    if (guild != member.guild) {
        return console.log("Algum saiu de algum server. Mas não é nesse, triste");
    } else {
        let embed = await new Discord.MessageEmbed()
        .setColor("#8A2BE2")
        .setAuthor(member.user.tag, member.user.displayAvatarURL())
        .setTitle(`Adeus!`)
        .setImage("https://imgur.com/Q7GquIE.gif")
        .setDescription(`**${member.user.username}**, saiu do servidor!, é triste mas temos que continuar sem ele(a) :broken_heart:`)
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
        .setFooter("espero que um dia ele(a) volte 😭")
        .setTimestamp();

       channel.send(embed);
  }
});

client.on("guildCreate", (guild, message) => {
    let canal = client.channels.cache.get('816842081045315594');
    let embedaddguilda = new Discord.MessageEmbed()
    .setColor('8A2BE2')
    .setTitle(`Adicionado`)
    .setDescription(`Fui adicionado no servidor \n**${guild.name}** \nid do server: ${guild.id} \nTotal de membros: ${guild && guild.memberCount} membros.\nestamos agora em ${client.guilds.cache.size} servers!`)
    
    canal.send(embedaddguilda).then(msg => {
        msg.react('👏');
    });
})

client.on("guildDelete", (guild, message) => {
    let canal = client.channels.cache.get('816842081045315594');
    let embedaddguilda = new Discord.MessageEmbed()
    .setColor('8A2BE2')
    .setTitle(`BYE...`)
    .setDescription(`infelismente Alguem me tirou da server: ${guild.name} que tinha ${guild.memberCount} membros! agora estou em ${client.guilds.cache.size} servers`)
    
    canal.send(embedaddguilda).then(msg => {
        msg.react('✊');
    });
})

client.on("message", message => {
  if (message.channel.type == "DM") return;
  if (message.author.bot) return;
  
  database.ref(`Xp/${message.author.id}`)
  .once("value").then(async function(db) {
    if (db.val() == null) {
      database.ref(`Xp/${message.author.id}`)
      .set ({
        xp: 0,
        level: 1,
        limite: 100
      })
    } else {
        let geraXP = Math.floor(Math.random() * 25) + 1;
        let geralimite = Math.floor(Math.random() * 550) + 250;
        
      if (db.val().limite <= db.val().xp) {
        database.ref(`Xp/${message.author.id}`)
        .update ({
          xp: db.val().xp + geraXP,
          level: db.val().level + 1,
          limite: db.val().limite + geralimite
       })
      message.channel.send(`parabens ${message.author} vc passou para o nivel ${db.val().level+1}`)
      } else {
        database.ref(`Xp/${message.author.id}`)
        .update ({
          xp: db.val().xp + geraXP
        })
      }
    }
  })
})

client.on("ready", () => {
    let status = [
        {name: `Utilize ${config.prefix}help para obter ajuda`, type: "PLAYING"},
        {name: `estamos em mas de ${client.guilds.cache.size} servidores!`, type: "STREAMING"},
        {name: `vcs sabiam que eu sou open soucer📂??`, type: "STREAMING"},
        {name: `💕sempre sigam os seus sonhos pois eles são valiosos💕`, type: "LISTENING"},
        {name: `vamos tomar um café mas vc que paga viu?`, type: "LISTENING"},
        {name: `a minha documentação estar sendo feita para que todas as comunidades possa ver os meus códigos😶`, type: "STREAMING"},
        {name: `tenha fé em deus é vc vc conguir tudo que guer`, type: "WATCHING"}
    ]
    function setStatus() {
        let statusale = status[Math.floor(Math.random() * status.length)]
        let nam = statusale.name;
        let typ = statusale.type;
        client.user.setActivity({name: `${nam}`, type: `${typ}`})
    }
    setStatus();
    setInterval(() => setStatus(), 120000)
    client.user
        .setStatus("dnd")
        .catch(console.error);
})

client.on('message', message => {
    if (message.author.bot) return;
    if (message.channel.type == 'dm') return;
    if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
    if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;
    
    const args = message.content
    .trim().slice(config.prefix.length)
    .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
        message.reply(`o comando ${command} não existe`)
        console.error('Erro:' + err)
    }
});

client.login(process.env.TOKEN);