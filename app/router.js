// Import des modules express et express.Router
const express = require('express');
const router = express.Router();

const mainController = require('./controllers/mainController')

router.get('/', mainController.indexPage)
router.get('/detail/:id',mainController.detailPage);
router.get('/types',mainController.typesPage);
router.get('/type/:id', mainController.typePage);


// Export du module router
module.exports = router;