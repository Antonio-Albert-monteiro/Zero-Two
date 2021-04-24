const Discord = require("discord.js");
const firebase = require("firebase");
const banco = require("./banco.js");

const database = firebase.database()

exports.run = async (message, args) => {
    database
    .ref(`Economia/${message.author.id}`)
    .once("value").then(async function(db) {
        function casull() {
            database
            .ref(`Economia/${message.author.id}`)
            .set({
                money: 0,
                banco: 0
                timer: true
            })
           message.channel.send(`${message.author}, parece que o seu banco n avia sido setado, tente novamente agora`)
        }
        function cliont() {
            let timr;
            function oi() {
                let timr = setTimeout(roy(), 86400000);
            }
            function roy() {
                database
                .ref(`Economia/${message.author.id}`)
                .update({
                    timer: true
                })
            }
        }
        const codaily = {
            "1080",
            "550",
            "757",
            "839",
            "130",
            "376",
            "397",
            "694"
        }
        
        let geraDaily = codaily[Math.floor(Math.random() * codaily.length)]
        if (db.val() === null) {
            casull();
        } else if(db.val().timer === true) {
            database
            .ref(`Economia/${message.author.id}`)
            .update({
                money: db.val().money + geraDaily,
                timer: false
            })
            cliont();
           message.channel.send(`Parabéns ${message.author}, o seu daily de hoje foi de ${geraDaily}`)
        } else {
            message.channel.send(`vc ja coletou o seu daily de hoje voute amanhã`)
        }
    })
    
    
}