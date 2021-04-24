const Discord = require("discord.js");

exports.run = async (message, args) => {
    let embed = new Discord.MessageEmbed()
    .setTitle("Central de comandos")
    .setDescription("
        escolha a cartegoria:
     🛠 moderação
	 💰 Economia
	 📡 Info
	 😂 Diversão
    ")
    .setColor('#8A2BE2')
}