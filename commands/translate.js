const translate = require('@vitalets/google-translate-api');
const Discord = require('discord.js');
let langs = {
    "auto": "Automatic",
    "ar": "Arabe",
    "ho": "Holandes",
    "in": "Inglês",
    "en": "Inglês",
    "fr": "Frances",
    "al": "Alemão",
    "el": "Grego",
    "it": "Italiano",
    "ja": "Japones",
    "jw": "Javanes",
    "kn": "Kannada",
    "ko": "Coreano",
    "pt": "Portugues",
    "ro": "Romano",
    "ru": "Russo",
    "es": "Espanhol"
}
 exports.run = (client, message, args) => {
 
  if (!args[0]) {
    return message.channel.send(`Sintaxe: .translate en pt <texto>`)
  }
 
  let msg = args.slice(2).join(' ');
  translate(msg, { from: args[0], to: args[1] }).then(res => {
     let embed = new Discord.MessageEmbed()
      .setTitle(`Google Tradutor`)
      .setColor('8A2BE2')
      .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/d/db/Google_Translate_Icon.png')
      .setDescription(`Texto traduzido de: ` + "`" + `${langs[args[0]]}` + "`" + " para " + "`" + `${langs[args[1]]}` + "`")
      .addField('Texto original:', msg)
      .addField(`Texto traduzido:`, res.text)   
      .setTimestamp()
 
    message.channel.send(embed)
 
 
  }).catch(err => {
    message.channel.send('ops parece que deu algum erro tente verificar a sua ortografia')
  })
};
