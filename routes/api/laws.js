const express = require('express');
const router = express.Router();
const lawsCtrl = require('../../controllers/api/laws');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/getAllLaws', lawsCtrl.getAllLaws)

router.post('/create', ensureLoggedIn, lawsCtrl.createLaw)

module.exports = router