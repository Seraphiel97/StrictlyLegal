const express = require('express');
const router = express.Router();
const statesCtrl = require('../../controllers/api/states');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/getAllStates', statesCtrl.getAllStates)

module.exports = router