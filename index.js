const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const server = require("./server.js")
const firebase = require('firebase');
const banco = require("./banco.js")

const database = firebase.database();

client.on("message", function(message) {
  if (message.channel.type == "DM") return;
  if (message.author.bot) return;
  
  database.ref(`Usuarios/${message.author.id}`)
  .once("value").then(async function(db) {
    if (db.val() == null) {
      database.ref(`Usuarios/${message.author.id}`)
      .set ({
        xp: 0,
        level: 1,
        limite: 100,
        premiun: false,
        banco: 0,
        money: 10
      })
    } else {
        let geraXP = Math.floor(Math.random() * 25) + 1;
        let geralimite = Math.floor(Math.random() * 550) + 250;
        
      if (db.val().limite <= db.val().xp) {
        database.ref(`Usuarios/${message.author.id}`)
        .update ({
          xp: db.val().xp + geraXP,
          level: db.val().level + 1,
          limite: db.val().limite + geralimite,
          premiun: db.val().premiun,
          banco: db.val().banco,
          money: db.val().money
       })
      message.channel.send(`parabens ${message.author} vc passou para o nivel ${db.val().level+1}`)
      } else {
        database.ref(`Usuarios/${message.author.id}`)
        .update ({
          xp: db.val().xp + geraXP
        })
      }
    }
  })
})

client.on("ready", () => {
  let activities = [
      `Utilize ${config.prefix}help para obter ajuda`,
      `mas de ${client.guilds.cache.size} servidores!`,
      `vc sabiam que que eu sou irmã da Lolizinha😍`,
      `vcs sabiam que eu sou open soucer📂???`,
      `💕sempre sigam os seus sonhos pois eles são valiosos💕`,
      `vamos tomar um café?☕, mas vc que paga viu?`,
      `a minha documentação estar sendo feita para que todas as comunidades possa ver os meus códigos😶`
    ],
    i = 0;
  setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "WATCHING"
      }), 1000 * 60); 
  client.user
      .setStatus("dnd")
      .catch(console.error);
console.log("Estou Online!")
});

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
    console.error('Erro:' + err);
  }
});

client.on("message", message => {
    if (message.author.id === "675531712256801") {
        message.react("🎁")
    }
})

client.on("message", message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return
     
     if(message.content == '822903328995803177' || message.content == '822903328995803177') {
         return message.channel.send(`Opa, me chamou? ${message.author} o meu prefixo é ${prefix}, digite ${prefix}help para saber mais sobre os meuscomandos`)
         
     }
    
});


client.login(process.env.TOKEN);