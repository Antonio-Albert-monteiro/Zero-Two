const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
	if(message.member.hasPermission("KICK_MEMBERS")){
		if(message.guild.me.hasPermission("KICK_MEMBERS")){
			const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(member => member.username === args[0] || member.tag === args[0]);
			
			if(!user || !args[0]){
				message.channel.send("Insira o nome/id/Menção de um usuário valido!!")
			}else{
				let reaso = args.slice(1).join(" ");
				
				if(!reaso){
					reaso = "Nenhuma razão de kick informada!"
				}
				const banido = message.guild.members.cache.get(user.id)
				banido.kick({
							reason: `Banido por ${message.author.tag} \n\n Motivo: ${reaso}`
				}).then(() => {
					message.channel.send("O usuário foi chutado com sucesso!")
				}).catch(err => {
					message.channel.send("Eu não tenho permissão para dar kick nesse usuário.")
				})
				
			}
			
		}else{
			message.channel.send("**Eu não tenho permissão para executar esse comando!**")
		}
	}else{
		message.channel.send("**Você nao tem permissão para executar esse comando.**")
	}
}