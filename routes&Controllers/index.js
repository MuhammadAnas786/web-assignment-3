var express = require('express');
var router = express.Router();
const facultController = require('./controllers')

/* GET home page. */
router.get('/', facultController.get);

module.exports = router;
