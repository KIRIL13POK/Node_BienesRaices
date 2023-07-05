const express = require('express')

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ msg: 'Hola Mundo en express'})
});

router.post('/', (req,res) => {
    res.json({ msg: 'Respuesta tipo post'})
})


module.exports = router
