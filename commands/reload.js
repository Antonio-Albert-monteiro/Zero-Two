exports.run = async (client, message, args) => {
    if (message.author.id != "675531712180256801") return message.channel.send("vc n tem permissão para usar esse comando")
    if (!args[0]) return message.channel
    send("diga o nome do comando")
    
    let comando = args[0].toLowerCase();
    
    try {
        delete require.cache[require.resolver(`../../commands/${comando}.js`)];
        client.commands.delete(comando)
        
        const pull = require(`../../commands/${comando.js}`);
        client.commands.set(comando, pull)
        
        return message.channel.send(`o comando ${comando} foi debugado com sucesso!!`)
    } catch (error) {
        return message.channel.send(`o comando ${comando} n pode ser debugado devido há: \n ${error.message}`)
    }
    
}
