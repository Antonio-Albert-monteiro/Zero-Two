const Discord = require('discord.js');
const firebase = require('firebase');
const banco = require("./banco.js");

const database = firebase.database();

exports.run = async (client, message, args) => {
    database.ref(`Usuarios/${message.author.id}`)
    .once("value").then(async function(db) {
        if (isNaN(db.val().money)) {
            database.ref(`Usuarios/${message.author.id}`)
            .update ({
                money: 0
            })
        } else {
            let geraDaily = Math.floor(Math.random() * 1082) + 560;
            
            if (true) {
                database.ref(`Usuarios/${message.author.id}`)
                .update ({
                    money: db.val().money + geraDaily
                })
               message.channel.send(`parabens ${message.author} você quanhou ${geraDaily}reais`)
            } else {
                message.channeal.send(`ops n foi posivel coletar o seu daily`)
            }
        }
    })
}