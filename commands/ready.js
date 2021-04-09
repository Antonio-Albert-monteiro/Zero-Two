const Discord = require("discord.js");
const ms = require("ms");

exports.run = async (client, message, args) => {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply("Não tem permissão para esse comando!")
    if (!message.guild.me.hasPermission('ADMINISTRATOR')) return message.reply("Não tenho permissão administrativas!")
    //embeds
    const embed9 = new Discord.MessageEmbed()
    .setTitle("Bolsa de Valores")
    .setDescription("carregando...")
    
    const embed10 = new Discord.MessageEmbed()
    .setDescription("oooiii")
    .addField(
      "bolsa de valores",
      "carregado"
    )
    //aleatorios
    const hmin = [
    '10m',
    '5m',
    '11m',
    '4m'
    ]
    //functions
    var Msg = await message.channel.send(embed9)
    let funi;
    function oi1() {
        let ale = Math.floor(Math.random() * 4) + 0;
        let mi = ms(hmin[ale]);
        funi = setInterval(oi2, mi)
        console.log(mi)
    }
    function oi2() {
        Msg.edit(embed10);
    }
    oi1();
};