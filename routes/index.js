var express = require('express');
var router = express.Router();
const {index, respuesta} = require('../controllers/indexController')
const { body } = require('express-validator');

const validaciones = [
  body('inputName').notEmpty().withMessage("El nombre es obligatorio"),
  body('inputColor').notEmpty(),
  body('inputEmail').notEmpty().isEmail().withMessage('Ingresá un email válido'),
  body('inputEdad').notEmpty().isInt().withMessage('Ingresa un numero válido')
]

/* GET home page. */
router
  .get('/', index)
  .post('/', validaciones, respuesta)

module.exports = router;
