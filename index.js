const express = require('express')
const usuarioRoutes = require('./routes/usuarioRoutes.js')


const app = express()
/*
Habilitar Pug: 
1-Se indica el motor del plantillas a utilizar.
2-Se indica el directorio donde se almacenarán las plantillas.*/                      
app.set('view engine', 'pug');
app.set('views', './views');

//Csrpeta Publica

app.use(express.static('public'));


app.use('/auth', usuarioRoutes)



const Port = 8080
app.listen( Port, () => {
   console.log(`El servedor esta escuchando en el puerto ${Port}`) 
})

