const express = require('express')

const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

const Port = 8080
app.listen( Port, () => {
   console.log(`El servedor esta escuchando en el puerto ${Port}`) 
})


