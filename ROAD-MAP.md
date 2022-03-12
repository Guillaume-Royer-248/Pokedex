# Liste des actions réalisées

## Temps du projet

|       Date            | Début |  Fin  |  Temps  |
|:---------------------:|-------|-------|---------|
|04/12/2021             | 16:39 | 17:33 |  00:54  |
|**Total du 04/12/2021**|       |       |**00:54**|
|05/12/2021             | 09:36 | 10:28 |  00:52  |
|                       |	11:16	| 12:00 |  00:44  |
|                       | 13:05 | 13:50 |	 00:45  |
|                       |	17:00 |	18:30 |	 01:30  |
|**Total du 05/12/2021**|       |       |**03:51**|
|11/12/2021             |	07:42 | 09:13 |  01:31  |
|                       |	15:23 |	15:45 |  00:22  |
|                       |	18:00 |	19:00 |	 01:00  |
|**Total du 11/12/2021**|       |			  |**02:53**|
|12/12/2021             |	07:50 |	09:27 |	 01:37  |
|**Total du 12/12/2021**|       |			  |**01:37**|
|                       |       |       |         |
|**TOTAL GENERAL**			|       |       |**09:15**|

 
## Config de la BDD PostgresSQL

### Création du user et de la base

- Connection à psql : `sudo -i -u postgres psql`
- Création de l'utilisateur : `CREATE ROLE pokedex WITH LOGIN ENCRYPTED PASSWORD 'pokedex';`
- Vérification de la présence du user : `\du`
- Création de la base :  `CREATE DATABASE pokedex OWNER pokedex;`
- Vérification de la présence de la base : `\l`
- Sortir de psql :`\q`

### Chargement de la base

- Import des tables et des données (ouvrir un terminal dans le dossier ou se trouve le fichier sql) : `psql -U pokedex -d pokedex -f pokedex.sql`
- tapper le mot de passe du user pokedex

### Vérification de la BDD

- retourner dans la base pour vérifier si les tables sont ok : `psql -U pokedex -d pokedex`
- voir les tables de la base : `\dt`
- voir les données dans la table pokemon : `SELECT * FROM pokemon;`
- sortir de la table : `\q`
- voir les données dans la table pokemon : `SELECT * FROM pokemon_type;`
- sortir de la table : `\q`
- voir les données dans la table pokemon : `SELECT * FROM type;`

## Initialisation du serveur

### mise en place de npm

Mise en place de npm : `npm i`
ajout du fichier actions.md dans le .gitignore

### Installation des packages

Installation de node, express : `npm i node, express`
Installation de dotenv : `npm i dotenv`
Installation de ejs : `npm i ejs`
Installation de node-dev : `npm i node-dev`
Installation de pg (postgres) : `npm i pg`
Initialisation de npm : `npm init -y`

### Initialisation des fichiers du server

Création du fichier index.js :

```javascript
//Permet de lire les données du .env
require('dotenv').config();

const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();

app.listen(PORT, ()=>{
    console.log(`Listening on port : ${PORT}, http://localhost:${PORT}/`);
});
```

Ajout du fichier .env :

```javascript
PORT = 3000
```

Modification du packjage.json :

```json
"scripts": {
    "start": "node-dev ."
  },
```

Démarrage du serveur : `npm start`

### Mise en place de la structure du serveur

- Création du dossier app
  
#### Le router

- Dans app, ajout du fichier router.js
- Paramétrage du router dans le fichier index.js :

```javascript
const router = require('./app/router');
const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(router);
```

- Paramétrage du router dans le fichier router.js :

```javascript
const express = require('express');
const router = express.Router();

module.exports = router;
```

#### Le moteur de rendu EJS

- Ajout du dossier views dans app et du sous dossier partials
- Dans le dossier views, ajout du fichier index.ejs
- Dans le sous dossier partials, ajourt des fichiers header.ejs et footer.ejs
- Paramétrage de ejs dans le fichier index .ejs :

```javascript
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static( "./public" ));
```

#### Les controllers

- Dans le dossier app ajout du dosier controllers
- Ajout du premier controller : mainController.js
- Dans le ficher router.js, appel de ce main controller :

 ```javascript
 const mainController = require('./controllers/mainController');
 ```

- Dans le fichier mainController, préparation de la structure :

```javascript
const mainController ={

};

module.exports = mainController;
```

#### Connection du projet à la base de données

- Ajout du fichier client.js
- Paramétrage du module :
  
```javascript
const {Client} = require('pg');
const client = new Client();

client.connect();

module.exports = client;
```

#### Le dataMapper

- création du fichier dataMapper.js
- Configuration du dataMapper :

```javascript
const client = require('./client');

const dataMapper = {

};

module.exports = dataMapper;
```

Les méthodes du dataMapper seront appelées dans les différents controllers `const {methode1, methode2, ...} = require ('../dataMapper')

## Création des vues

Chaque page est d'abord créée en HTML afin de bien régler le CSS

Initialisatrion du fichier index.html :
- link to reset.css
- link to style.css
- ajout de la police Bree Serif de Goolge Fonts

Ensuite les pages html sont transformées en vues ejs et factorisées (création des partials header et footer)
Elles seront dynamisées lors de la mise en place des routers, controllers et dataMappers.

