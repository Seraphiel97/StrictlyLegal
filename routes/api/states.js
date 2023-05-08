const express = require('express');
const router = express.Router();
const statesCtrl = require('../../controllers/api/states');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/getAll', ensureLoggedIn, statesCtrl.getAll)

module.exports = router