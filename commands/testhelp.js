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
    
    message.channel.send(embed).then(msg => {
        msg.react('🛠');
        msg.react('💰');
        msg.react('📡');
        msg.react('😂');
        
        let filtro1 = (r, u) => r.emoji.name === '🛠' && u.id === message.author.id;
		let filtro2 = (r, u) => r.emoji.name === '💰' && u.id === message.author.id;
		let filtro3 = (r, u) => r.emoji.name === '📡' && u.id === message.author.id;
		let filtro4 = (r, u) => r.emoji.name === '😂' && u.id === message.author.id;
		
		
    })
}