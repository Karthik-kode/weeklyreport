var express = require('express');
var router = express.Router();
const authHandler = require("../models/controllers/Auth")

//Methods and Controllers
router.post('/login' , authHandler.auth)

module.exports = router;