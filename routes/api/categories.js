const express = require('express');
const router = express.Router();
const categoriesCtrl = require('../../controllers/api/categories');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/getAllCategories', ensureLoggedIn, categoriesCtrl.getAllCategories)

module.exports = router