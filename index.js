// Import de express
require('dotenv').config();

const express = require('express');

const router = require('./app/router.js');

const PORT = process.env.PORT || 3000;
// Déclaration de l'utilisation de express
const app = express();

// Utilisation du moteur de rendu EJS
app.set('view engine', 'ejs');
app.set('views', './app/views');
// Pour la methode POST du router
app.use(express.urlencoded({ extended: true}));
// Localisation des fichiers statiques du projet
app.use(express.static( "./public" ));

app.use(router);

app.listen(PORT, ()=>{
    console.log(`Listening on port : ${PORT}, http://localhost:${PORT}/`);
});