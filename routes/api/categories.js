const express = require('express');
const router = express.Router();
const categoriesCtrl = require('../../controllers/api/categories');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/getAll', ensureLoggedIn, categoriesCtrl.getAll)

module.exports = router