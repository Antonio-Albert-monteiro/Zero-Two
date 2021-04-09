const Discord = require('discord.js');
const firebase = require('firebase');

var firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: "https://two-95941412-default-rtdb.firebaseio.com",
    projectId: "two-95941412",
    storageBucket: "two-95941412.appspot.com",
    messagingSenderId: "406947911581",
    appId: "1:406947911581:web:37820556d354849e540174"
  };
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