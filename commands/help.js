const Discord = require('discord.js');

exports.run = async (client, message, args) => {
	let embed = new Discord.MessageEmbed()
		.setTitle(`Central de comandos`)
		.setDescription(`
		    escolha a cartegoria:
	 🛠 moderação
	 💰 Economia
	 📡 Info
	 😂 Diversão
	 `)
		.setColor('#8A2BE2');
	message.channel.send(embed).then(msg => {
		msg.react('🛠');
		msg.react('💰');
		msg.react('📡');
		msg.react('😂');
		
		let filtro1 = (r, u) => r.emoji.name === '🛠' && u.id === message.author.id;
		let filtro2 = (r, u) => r.emoji.name === '💰' && u.id === message.author.id;
		let filtro3 = (r, u) => r.emoji.name === '📡' && u.id === message.author.id;
		let filtro4 = (r, u) => r.emoji.name === '😂' && message.author.id;
		
		
		let coletor = msg.createReactionCollector(filtro1);
		let coletor1 = msg.createReactionCollector(filtro2);
		let coletor2 = msg.createReactionCollector(filtro3);
		let coletor3 = msg.createReactionCollector(filtro4);

		coletor.on('collect', c => {
			let embed = new Discord.MessageEmbed()
				.setTitle(`Central de comandos`)
				.setDescription("moderação")
				.addFields(
                    { name: "Ban", value: "Bani um usuario do server" },
                    { name: "kick", value: "Kicka um usuario para fora do server" },
                    { name: "lock", value: "Fecha um canal" },
                    { name: "unlock", value: "Destrava um canal" },
                    { name: "clear", value: "Limpa mensagens do canal" },
                    { name: "say", value: "Fechado por motivos de segurança" },
                    { name: "emoji", value: "mostar informações sobre o emoji" }
				)
				.setColor('#8A2BE2');

			msg.edit(embed);
		});

		coletor1.on('collect', c => {
			let embed = new Discord.MessageEmbed()
				.setTitle(`Central de comandos`)
				.setDescription("
				    Economia
				em desemvolvimento
				")
			 )
				.setColor('#8A2BE2');

			msg.edit(embed);
		});
		
		coletor2.on('collect', c => {
		    let embed = new Discord.MessageEmbed()
		        .setTitle("Central de comandos")
		        .setDescription("Info")
		        .setColor('#8A2BE2')
		        .addFields(
		            { name: "Ping", value: "mostra o ping do bot" },
                    { name: "Botinfo", value: "em manutenção" },
                    { name: "Serveinfo", value: "mostra informações do server" }
		        )
		})
		
		coletor3.on('collect', c => {
		    let embed = new Discord.MessageEmbed()
		        .setTitle("Central de comandos")
		        .setDescription("Diversão")
		        .setColor('#8A2BE2')
		        .addFields(
		            { name: "Avatar", value: "Mostra o avatar do usuario" },
                    { name: "clima", value: "mostar o clima" },
                    { name: "covid", value: "mostar os status da covid-19 pelo mundo" },
                    { name: "kiss", value: "beija um usuario" },
                    { name: "Translate", value: "faz tradução" }
		        )
		})
		
		});
	}