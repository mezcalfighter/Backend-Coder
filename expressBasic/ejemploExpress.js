const express = require('express')

function controladorSaludos(req, res){
    res.end(`Hola amigo ${req.params.nombre} !!`)       
}

function controladorChau(req,res){
    res.end(`Lamento que te vayas ${req.query.nombre} .. adios`)
}

function controladorProbando(req,res){
    console.log(req)
    res.end('probando 1...2....3...')
    // Enviar objeto
    // res.send({producto:'silla'})
}

const app = express()

app.get('/saludos/:nombre', controladorSaludos)
app.get('/chau',controladorChau)
app.get('/probando',controladorProbando)

const puerto = 8080
app.listen(puerto, () => {console.log('Conectado!')})