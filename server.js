const express = require('express');
const app = express();


app.get('/', function (request, reponse) {
    reponse.status(200);
    reponse.send('Bienvenue ! Enlève tes chaussures par contre !');
});

app.get('/teachersName', function (request, reponse) {
    reponse.status(200);
    reponse.send('{thomas: "Thomas Jamais", alban: "Alban Meurice"}');
});


app.listen(1337, function () {
    console.log('Tu es connecté !');
});






