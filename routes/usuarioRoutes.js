const express = require('express')
const { formularioLogin } = require('../controllers/ususarioController.js')

const router = express.Router();

router.get('/login', formularioLogin)


module.exports = router
