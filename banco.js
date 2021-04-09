const firebase = require("firebase");

var firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: "https://two-95941412-default-rtdb.firebaseio.com",
    projectId: "two-95941412",
    storageBucket: "two-95941412.appspot.com",
    messagingSenderId: "406947911581",
    appId: "1:406947911581:web:37820556d354849e540174"
  };
  
 // Initialize Firebase
firebase.initializeApp(firebaseConfig);