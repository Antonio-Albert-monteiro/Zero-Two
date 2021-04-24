const Discord = require('discord.js');

exports.run = async (client, message, args) => {
	let embed = new Discord.MessageEmbed()
		.setTitle(`Central de comandos`)
		.setDescription(
			`diga de qual tipo de comandos você estar precisando de ajuda:
     🛠 utils
     📰 informação
     `)
		.setColor('#FF0020');
	message.channel.send(embed).then(msg => {
		msg.react('🛠');
		msg.react('📰');
		
		let filtro1 = (r, u) => r.emoji.name === '🛠' && u.id === message.author.id;
		let filtro2 = (r, u) => r.emoji.name === '📰' && u.id === message.author.id;

		let coletor = msg.createReactionCollector(filtro1);
		let coletor1 = msg.createReactionCollector(filtro2);

		coletor.on('collect', c => {
			let embed = new Discord.MessageEmbed()
				.setTitle(`Central de comandos`)
				.setDescription(`moderação`)
				.addFields(
                    { name: '📥 addlink', value: 'adiciona um link para ser monitorado', inline: false },
                    { name: '📤 remo', value: 'remove um link (em desenvolvimento)', inline: false },
                    { name: '📡 status', value: 'ver o status do seu link (em desenvolvimento)', inline: false },
                    { name: '🕗 uptime', value: 'ver a quanto tempo o bot ta on', inline: false },
                    { name: '📶 ping', value: 'ver o ping do bot', inline: false },
                    { name: '🆘 help', value: 'ver todos os meus comandos', inline: false}
				)
				.setColor('#FF0020');

			msg.edit(embed);
		});

		coletor1.on('collect', c => {
			let embed = new Discord.MessageEmbed()
				.setTitle(`informações do bot`)
				.setDescription(`info`)
				.setColor('#FF0020');

			msg.edit(embed);
		});
		});
	}