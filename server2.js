const express = require('express');
const fs = require('fs');
const app = express();
const contents = fs.readFileSync("country.json");
const jsonContent = JSON.parse(contents);

app.get('/', function (request, reponse) {
    reponse.status(200);
    reponse.send('Bienvenue ! Je t\'ai pas déjà demandé d\'enlever tes chaussure ? ');
});

app.get('/all', function (error, reponse) {
    reponse.status(200);
    reponse.json(jsonContent)
});

app.get('/names/all/loop', function (error, reponse) {
    reponse.status(200);
    const tableauPays = [];
    jsonContent.forEach(function (pays) { 
        tableauPays.push(pays.name);
    });
    reponse.json(tableauPays);
});

app.get('/names/all/map', function (error, reponse) {
    reponse.status(200);
    
    const map1 = jsonContent.map(pays => {
        return pays.name
    });
    reponse.json(map1);
    console.log(map1);
});

app.get('/capitals/all/loop', function (error, reponse) {
    reponse.status(200);
    const tableauPays = [];
    jsonContent.forEach(function (pays) { 
        tableauPays.push(pays.capital);
    });
    reponse.json(tableauPays);
});

app.get('/capitals/all/map', function (error, reponse) {
    reponse.status(200);
    
    const map1 = jsonContent.map(pays => pays.capital );
    reponse.json(map1);
    console.log(map1);
});

app.listen(1338, function () {
    console.log('Tu es connecté deuxième édition !');
});