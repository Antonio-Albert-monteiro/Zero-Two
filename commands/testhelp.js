const Discord = require("discord.js");

exports.run = async (message, args) => {
    let embed = new Discord.MessageEmbed()
    .setTitle("Central de comandos")
    .setDescription("
        escolha a cartegoria:
     🛠 Moderação
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
		
		let coletor = msg.createReactionCollector(filtro1);
		let coletor1 = msg.createReactionCollector(filtro2);
		let coletor2 = msg.createReactionCollector(filtro3);
		let coletor3 = msg.createReactionCollector(filtro4);
		
		coletor.on('collect', c => {
		    let embed = new Discord.MessageEmbed()
		    .setTitle("Central de comandos")
		    .setDescription("Moderação")
		    .setColor('#8A2BE2')
		    .addFields(
		        { name: "ban", value: `bani um usuario` },
		        { name: "kick", value: `kicka um usuario para fora do server` },
		        { name: "lock", value: `fecha um canal` },
		        { name: "unlock", value: `desbloquea um canal` }
		    )
		   msg.edit(embed);
		})
		
		coletor1.on('collect', c => {
		    let embed = new Discord.MessageEmbed()
		    .setTitle("Central de comandos")
		    .setDescription("Economia")
		    .setColor('#8A2BE2')
		    .addFields(
		        { name: "daily", value: `em desemvolvimento` },
		        { name: "work", value: `em desemvolvimento` },
		        { name: "dep all", value: `em desemvolvimento` },
		        { name: "rank", value: `em desemvolvimento` },
		        { name: "carteira", value: `em desemvolvimento` },
		        { name: "aposta", value: `em desemvolvimento` },
		        { name: "loja", value: `em desemvolvimento` }
		    )
		   msg.edit(embed);
		})
    })
}