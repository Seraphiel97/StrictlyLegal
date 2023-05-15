const express = require('express');
const router = express.Router();
const categoriesCtrl = require('../../controllers/api/categories');

router.get('/getAllCategories', categoriesCtrl.getAllCategories)

module.exports = router