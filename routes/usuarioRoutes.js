const express = require('express')
const {
       formularioLogin,
       formularioRegistro, } = require('../controllers/ususarioController.js')

const router = express.Router();

router.get('/login', formularioLogin)
router.get('/registro', formularioRegistro)


module.exports = router
