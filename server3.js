const express = require('express');
const fs = require('fs');
const {
  response
} = require('express');
const app = express();

const contents = fs.readFileSync("country.json");
const jsonContent = JSON.parse(contents);

let peperoniRegion = [];
let peperoniSubRegion = []
let peperoniCurrencies = [];
app.use(express.urlencoded({
  extended: true
}));

app.get('/country/:name', function (request, reponse) {
  reponse.status(200);
  for (let i = 0; i < jsonContent.length; i++) {
    if (request.params.name.toUpperCase() == jsonContent[i].name.toUpperCase()) {
      reponse.json(jsonContent[i]);
    }
  }
  reponse.status(404);
  reponse.send('Tu sais pas écrire batard');
});

app.get('/regions/:regionName', function (request, reponse) {
  reponse.status(200);
  peperoni = [];
  for (let i = 0; i < jsonContent.length; i++) {
    if (request.params.regionName.toUpperCase() == jsonContent[i].region.toUpperCase()) {
      peperoniRegion.push(jsonContent[i].name);
    }
  }
  if (peperoniRegion.length != 0) {
    reponse.json(peperoniRegion);
  } else {
    reponse.status(404);
    reponse.send('Tu sais pas écrire batard');
  }
});

app.get('/subregions/:subregionName', function (request, reponse) {
  reponse.status(200);
  peperoniSubRegion = [];
  for (let i = 0; i < jsonContent.length; i++) {
    if (request.params.subregionName.toUpperCase() == jsonContent[i].subregion.toUpperCase()) {
      peperoniSubRegion.push(jsonContent[i].name);
    }
  }

  if (peperoniSubRegion.length != 0) {
    reponse.json(peperoniSubRegion);
  } else {
    reponse.status(404);
    reponse.send('Tu sais pas écrire batard');
  }

});

app.get('/currencies/:currency', function (request, reponse) {
  reponse.status(200);
  peperoniCurrencies = [];
  for (let i = 0; i < jsonContent.length; i++) {
    if (request.params.currency.toUpperCase() == jsonContent[i].currencies[0].name.toUpperCase()) {
      peperoniCurrencies.push(jsonContent[i].name);
    }
  }

  if (peperoniCurrencies.length != 0) {
    reponse.json(peperoniCurrencies);
  } else {
    reponse.status(404);
    reponse.send('Tu sais pas écrire batard');
  }

});
 

app.put('/countries/:countryName', function (request, reponse) {
  reponse.status(200);
  // let countryName = request.params.countryName

  let tableau = [];
  for (let i = 0; i < jsonContent.length; i++) {
    if (request.params.countryName.toUpperCase() == jsonContent[i].name.toUpperCase()) {
      let clef = Object.keys(request.body);
      let vtff = jsonContent[i];

      for (e = 0; e < clef.length; e++) {
        vtff[clef[e]] = request.body[clef[e]]

        vtff[clef[e]]

      }
    }

    let stringy = JSON.stringify(jsonContent);
    fs.writeFileSync("country.json", stringy);
    reponse.send(jsonContent[i]);


    // reponse.send("Bonsoir");
  }
});

app.delete('/countriesDelete/:countryName', function (request, reponse) {
      reponse.status(200);

          const countryName = request.params.countryName.toUpperCase(); 
          const result = jsonContent.filter( e => e.name.toUpperCase() !== countryName);

        reponse.send('Bonsoir');

      console.log(result);

    });

    app.listen(1339, function () {
      console.log('Tu es connecté ENCORE, t\'aime bien trainer ici !');
    });





    // console.log(newContent);
    // fs.writeFileSync('country.json', (JSON.stringify(newContent)), 'utf8');
    // reponse.json(jsonContent);