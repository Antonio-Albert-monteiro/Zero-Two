const axios = require('axios');
const { MessageEmbed } = require('discord.js')

exports.run = async (client, message, args) => {
        const baseUrl = "https://corona.lmao.ninja/v2";

        let url, response, corona;

        try {
            url = args[0] ? `${baseUrl}/countries/${args[0]}`:`${baseUrl}/all`
            response = await axios.get(url)
            corona = response.data
        } catch (error) {
            return message.channel.send(`***${args[0]}*** doesn't exist, or data isn't being collected`)
        }

        const embed = new MessageEmbed()
            .setTitle(args[0] ? `${args[0].toUpperCase()} Stats` : 'Status da covid-19 pelo mundo')
            .setColor('#8A2BE2')
            .setThumbnail(args[0] ? corona.countryInfo.flag : 'https://imgur.com/6pJOQIr.gif')
            .addFields(
                {
                    name: 'Total de casos:',
                    value: corona.cases.toLocaleString(),
                    inline: true
                },
                {
                    name: 'Total de mortes:',
                    value: corona.deaths.toLocaleString(),
                    inline: true
                },
                {
                    name: 'Total de recuperados:',
                    value: corona.recovered.toLocaleString(),
                    inline: true
                },
                {
                    name: 'Casos ativos:',
                    value: corona.active.toLocaleString(),
                    inline: true
                },
                /*{
                    name: '\u200b',
                    value: '\u200b',
                    inline: true
                },*/
                {
                    name: 'Casos críticos:',
                    value: corona.critical.toLocaleString(),
                    inline: true
                },
                {
                    name: 'recuperados de hoje:',
                    value: corona.todayRecovered.toLocaleString().replace("-", ""),
                    inline: true
                },
                {
                    name: 'mortes hoje:',
                    value: corona.todayDeaths.toLocaleString(),
                    inline: true
                })

        await message.channel.send(embed)
}