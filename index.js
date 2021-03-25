const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const server = require("./server.js")
const firebase = require('firebase');

var firebaseConfig = {
    apiKey: process.env.apikey,
    authDomain: "two-95941412.firebaseapp.com",
    databaseURL: "https://two-95941412-default-rtdb.firebaseio.com",
    projectId: "two-95941412",
    storageBucket: "two-95941412.appspot.com",
    messagingSenderId: "406947911581",
    appId: "1:406947911581:web:37820556d354849e540174"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

client.on("message", function(message) {
  if (message.channel.type == "DM") return;
  if (message.author.bot) return;
  
  database.ref(`Servidores/${message.guild.id}/${message.author.id}`)
  .once("value").then(async function(db) {
    if (db.val() == null) {
      database.ref(`Servidores/${message.guild.id}/${message.author.id}`)
      .set ({
        xp: 0,
        level: 1,
        limite: 100,
        premiun: false
      })
    } else {
        let geraXP = Math.floor(Math.random() * 25) + 1;
        let geralimite = Math.floor(Math.random() * 550) + 250;
        
      if (db.val().limite <= db.val().xp) {
        database.ref(`Servidores/${message.guild.id}/${message.author.id}`)
        .update ({
          xp: db.val().xp + geraXP,
          level: db.val().level + 1,
          limite: db.val().limite + geralimite,
          premiun: db.val().premiun
       })
      message.channel.send(`parabens ${message.author} vc passou para o nivel ${db.val().level+1}`)
      } else {
        database.ref(`Servidores/${message.guild.id}/${message.author.id}`)
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
      `${client.guilds.cache.size} servidores!`,
      `${client.channels.cache.size} canais!`,
      `${client.users.cache.size} usuários!`
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
    console.error('Erro:' + err);
  }
});

client.on("message", message => {
if (message.author.bot) return;
if (message.channel.type == 'dm')
return
if(message.content == '822903328995803177' || message.content == '822903328995803177') {
return message.channel.send(`Opa, me chamou? ${message.author} o meu prefixo é ${prefix}, digite ${prefix}help para saber mais sobre os meuscomandos`)
}
});


client.login(process.env.TOKEN);
