const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
	let user = message.author;
	let logo = '';
	if (!args[0]) {
		const msg = await message.channel.send(
			new MessageEmbed()
				.setColor('#7c2ae8')
				.setTitle(`Como posso te ajudar?`)
				.addField(
					'Ajuda e Informações',
					'Reaja com ❗ para saber um pouco mais de mim e como posso lhe ser útil.'
				)
				.addField(
					'Comandos',
					'Reaja com ⚙️ para obter ajuda sobre **Comandos** para criação de bots em JavaScript.'
				)
				.addField(
					'Eventos',
					'Reaja com 🛠️ para obter ajuda sobre **Eventos** para criação de bots em JavaScript.'
				)
				.addField(
					'Miscelâneas',
					'Reaja com ⚠️ para obter exemplos variados e informações extras sobre programação.'
				)

				.setThumbnail(logo)
				.setFooter('rtr', logo)
				.setTimestamp(message.createdAt)
		);

		const emojis = [
			'❗', // Ajuda
			'⚙️', //Comando
			'🛠️',
			'⚠️' // Evento
		];

		for (const i in emojis) {
			await msg.react(emojis[i]);
		}

		const filter = (r, u) => r.me && u.id === message.author.id;
		const collector = msg.createReactionCollector(filter, {
			max: 10,
			time: 60 * 1000
		});
		collector.on('collect', async (r, u) => {
			switch (r.emoji.name) {
				case '❗':
					await msg.edit(
						new MessageEmbed()
							.setTitle(`Informações:`)
							.setThumbnail(logo)
							.setColor('#7c2ae8')
							.setDescription(
								'Yo! Eu estou aqui para ajudá-los em dúvidas diversas sobre o Discord, desde configuração de servidores até criação de bots em **JavaScript**.'
							)
							.addField('Nada')
							.addField(
								'Comandos',
								'Reaja com ⚙️ para obter ajuda sobre Comandos para criação de bots em JavaScript ou escreva **h!help comandos**.'
							)
							.addField(
								'Eventos',
								'Reaja com ⚠️ para obter ajuda sobre Eventos para criação de bots em JavaScript ou escreva **h!help eventos**.'
							)
							.addField(
								'Miscelâneas',
								'Reaja com <:atention:722995387857633351> para obter exemplos e informações acerca de programação em JavaScript ou escreva **h!help misc**.'
							)
							.setFooter('ere', logo)
							.setTimestamp(message.createdAt)
					);
					r.users.remove(user.id);
					break;

				case '⚙️':
					await msg.edit(
						new MessageEmbed()
							.setTitle(`Comandos:`)
							.setThumbnail(logo)
							.setColor('#7c2ae8')
							.setDescription(
								`Abaixo está uma lista de comandos que você pode adicionar em seu bot, utilize-os no chat destinado a comandos para mais informações sobre como colocá-los em seu bot.`
							)
							.addField(
								'⚙️ Comandos Disponíveis:',
								'`h!ping`, `h!say`, `h!clear`, `h!uptime`, `h!kiss`, `h!avatar`, `h!emoji`, `h!coinflip`, `h!color`, `h!ideia`, `h!antiraid`.'
							)
							.setFooter('ere', logo)
							.setTimestamp(message.createdAt)
					);
					r.users.remove(user.id);
					break;

				case '⚠️':
					await msg.edit(
						new MessageEmbed()
							.setTitle(`Eventos:`)
							.setThumbnail(logo)
							.setColor('#7c2ae8')
							.setDescription(
								`Abaixo está uma lista de eventos que você pode adicionar em seu bot, utilize-os no chat destinado a comandos para mais informações sobre como colocá-los em seu bot.`
							)
							.addField(
								'⚙️ Eventos Disponíveis:',
								'`h!handler`, `h!status`, `h!inviteblock`, `h!timer`, `h!welcome`, `h!goodbye`.'
							)
							.setFooter('ere', logo)
							.setTimestamp(message.createdAt)
					);
					r.users.remove(user.id);
					break;

				case '🛠️':
					await msg.edit(
						new MessageEmbed()
							.setTitle(`Miscelâneas:`)
							.setThumbnail(logo)
							.setColor('#7c2ae8')
							.setDescription(
								`Abaixo está uma lista de informações e exemplos para lhe ajudar na programação de bots em JavaScript.`
							)
							.addField(
								'<:atention:722995387857633351> Miscelâneas:',
								'`h!verifybot`, `h!invisible`, `h!font`.'
							)
							.setFooter('ere', logo)
							.setTimestamp(message.createdAt)
					);
					r.users.remove(user.id);
					break;
			}
		});
	} else if (args[0].toLowerCase() == 'comandos') {
		const embedA = new MessageEmbed()
			.setTitle(`Comandos:`)
			.setThumbnail(logo)
			.setColor('#7c2ae8')
			.setDescription(
				`Abaixo está uma lista de comandos que você pode adicionar em seu bot, utilize-os no chat destinado a comandos para mais informações sobre como colocá-los em seu bot.`
			)
			.addField(
				'⚙️ Comandos Disponíveis:',
				'`h!ping`, `h!say`, `h!clear`, `h!uptime`, `h!kiss`, `h!avatar`, `h!emoji`, `h!coinflip`, `h!color`, `h!ideia`, `h!antiraid`.'
			)
			.setFooter('ere', logo)
			.setTimestamp(message.createdAt);
		return message.channel.send(embedA);
	} else if (args[0].toLowerCase() == 'eventos') {
		const embedB = new MessageEmbed()
			.setTitle(`Eventos:`)
			.setThumbnail(logo)
			.setColor('#7c2ae8')
			.setDescription(
				`Abaixo está uma lista de eventos que você pode adicionar em seu bot, utilize-os no chat destinado a comandos para mais informações sobre como colocá-los em seu bot.`
			)
			.addField(
				'⚙️ Eventos Disponíveis:',
				'`h!handler`, `h!status`, `h!inviteblock`, `h!timer`, `h!welcome`, `h!goodbye`.'
			)
			.setFooter('ere', logo)
			.setTimestamp(message.createdAt);
		return message.channel.send(embedB);
	} else if (args[0].toLowerCase() == 'misc') {
		const embedC = new MessageEmbed()
			.setTitle(`Miscelâneas:`)
			.setThumbnail(logo)
			.setColor('#7c2ae8')
			.setDescription(
				`Abaixo está uma lista de informações e exemplos para lhe ajudar na programação de bots em JavaScript.`
			)
			.addField(
				'<:atention:722995387857633351> Miscelâneas:',
				'`h!verifybot`, `h!invisible`, `h!font`.'
			)
			.setFooter('ere', logo)
			.setTimestamp(message.createdAt);
		return message.channel.send(embedC);
	} else {
		const embedD = new MessageEmbed()
			.setColor('#7c2ae8')
			.setDescription(
				'**' +
					message.author.username +
					' a sintaxe está incorreta.**\n**Exemplo:** `h!help comandos` | `eventos` | `misc`'
			);
		return message.channel.send(embedD);
	}
};
