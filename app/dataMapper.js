// Appel du client pour connection à la BDD
const client = require("./client");

const dataMapper = {

    getAllPokemon: (callback) => {
        const query = {
            text : "SELECT * FROM pokemon"
        };
        client.query(query, (error, result)=>{
            if (error) {
                console.log(error);
                callback(error,null);
            } else {
                // console.log(result.rows)
                callback(error, result.rows);
            }
        });

    },

    getOnePokemonById: (id, callback) =>{

        const query ={
            text : "SELECT * FROM pokemon INNER JOIN pokemon_type ON pokemon.numero = pokemon_type.pokemon_numero INNER JOIN type ON pokemon_type.type_id = type.id WHERE numero = $1",
            values : [id]
        };
        client.query(query, (error, result)=>{
            if (error) {
                console.log(error);
                callback(error,null);
            } else {
                // console.log(result.rows);
                callback(error, result.rows);
            }
        });
    },

    getAllTypes: (callback) =>{

        const query ={
            text : "SELECT * FROM type"
        }

        client.query(query, (error,result)=>{
            if (error) {
                console.log(error);
                callback(error,null);
            } else {
                // console.log(result.rows);
                callback(error, result.rows);
            }
        })

    },

    getOnePokemonByType: (id, callback) =>{

        const query ={
            text : "SELECT * FROM pokemon_type INNER JOIN pokemon ON pokemon_type.pokemon_numero = pokemon.numero INNER JOIN type ON pokemon_type.type_id = type.id WHERE type_id = $1",
            values : [id]
        };
        
        client.query(query, (error, result)=>{
            if (error) {
                console.log(error);
                callback(error,null);
            }else {
                console.log(result.rows);
                callback(error, result.rows);
            }
        });
    },


};

module.exports = dataMapper;