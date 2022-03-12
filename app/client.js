// Import du module postgres
const {Client} = require('pg');

// création d'une nouvelle instance client de connection à la base de donnée 
const client = new Client();

client.connect();

module.exports = client;