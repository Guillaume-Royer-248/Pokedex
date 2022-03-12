const { nextTick } = require("process");
const {
    getAllPokemon,
    getOnePokemonById,
    getAllTypes,
    getOnePokemonByType
} = require("../dataMapper")

const mainController = {

    indexPage: (req, res) => {

        getAllPokemon((error, pokemons) => {
            if (error) {
                req.error = error;
                res.stratus(500).send("erreur 50");
            } else {
                res.render("index", {
                    pokemons
                });
            };

        });

    },

    detailPage: (req, res) => {
        const id = Number(req.params.id);

        getOnePokemonById(id, (error, pokemon) => {
            if (error) {
                req.error = error;
                res.stratus(500).send("erreur 50");
            } else {
                // console.log(pokemon[0].nom)
                res.render("detail", {
                    pokemon
                });
            };
        })
    },


    typesPage: (req, res) => {

        getAllTypes((error, types) => {

            if (error) {
                req.error = error;
                res.stratus(500).send("erreur 50");
            } else {
                // console.log(pokemon[0].nom)
                res.render("types", {
                    types
                });
            };

        })

    },

    typePage: (req, res) => {

        const id = Number(req.params.id);

        getOnePokemonByType(id, (error, pokemons) => {

            if (error) {
                req.error = error;
                res.stratus(500).send("erreur 50");
            } else {

                // console.log(pokemon)
                res.render("type", {
                    pokemons
                });
            };
        })

    }


};


module.exports = mainController;