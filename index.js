const express = require('express')
const usuarioRoutes = require('./routes/usuarioRoutes')


const app = express()

app.use('/', usuarioRoutes)

const Port = 8080
app.listen( Port, () => {
   console.log(`El servedor esta escuchando en el puerto ${Port}`) 
})

