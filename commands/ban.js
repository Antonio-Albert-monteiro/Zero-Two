const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
	if(message.member.hasPermission("BAN_MEMBERS")){
		if(message.guild.me.hasPermission("BAN_MEMBERS")){
			const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(member => member.username === args[0] || member.tag === args[0]);
			
			if(!user || !args[0]){
				message.channel.send("Insira o nome/id/Menção de um usuário valido!!")
			}else{
				let reason = args.slice(1).join(" ");
				
				if(!reason){
					reason = "Nenhuma razão de banimento informada!"
				}
				const banido = message.guild.members.cache.get(user.id)
				banido.ban({
					reason: `Banido por ${message.author.tag} \n\n Motivo: ${reason}`
				}).then(() => {
					message.channel.send("O usuário foi banido com sucesso!")
				}).catch(err => {
					message.channel.send("Eu não tenho permissão para banir esse usuário.")
				})
				
			}
			
		}else{
			message.channel.send("**Eu não tenho permissão para executar esse comando!**")
		}
	}else{
		message.channel.send("**Você nao tem permissão para executar esse comando.**")
	}
}