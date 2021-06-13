var express = require('express');
var router = express.Router();
const facultController = require('./controllers')
const FacultySchema = require('../schema')
const ValidateApiSchema  = require('../middlewares')
/* GET home page. */
router.get('/', facultController.get);
router.get('/:id', facultController.get);
router.post('/',ValidateApiSchema(FacultySchema), facultController.create);
router.put('/:id',ValidateApiSchema(FacultySchema), facultController.update)
router.delete('/:id', facultController.delete)


module.exports = router;
