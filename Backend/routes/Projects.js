var express = require('express');
var router = express.Router();
const projectHandler = require('../models/controllers/Projects')



//Methods and Controllers
router.get('/', projectHandler.fetchprojects);



module.exports = router;