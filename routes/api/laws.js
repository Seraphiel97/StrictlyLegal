const express = require('express');
const router = express.Router();
const lawsCtrl = require('../../controllers/api/laws');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/getAllLaws', lawsCtrl.getAllLaws)

router.post('/create', ensureLoggedIn, lawsCtrl.createLaw)

router.post('/getResponse', ensureLoggedIn, lawsCtrl.getResponse)

router.put('/updateLaw', ensureLoggedIn, lawsCtrl.updateLaw)

router.delete('/deleteLaw', ensureLoggedIn, lawsCtrl.deleteLaw)

module.exports = router