import express from 'express'

const app = express()
// inteprete de objetos
app.use(express.json())
app.listen(8080,() => { console.log('Escuchando puerto 8080!!') })

const fraseInicial = ['Frase','Inicial']

app.get('/api/personas',(req, res) => {
    res.status(400).send('Hola')
})

app.post('/api/personas',(req, res) => {
    res.send('Hola post')
})

app.put('/api/personas',(req, res) => {
    res.send('Hola put')
})

app.delete('/api/personas',(req, res) => {
    res.send('Hola delete')
})

app.get('/api/frase',(req,res)=>{
    res.json({
        frase:fraseInicial.join(' ')
    })
})

app.get('/api/palabra/:pos',(req,res)=>{
    const inidicePalabra = parseInt(req.params.pos) -1
    res.json({
        buscada:fraseInicial[inidicePalabra]
    })
})

app.post('/api/palabras',(req,res)=>{
    const palabra = req.body.palabra
    fraseInicial.push(palabra)
    res.json({
        agregada:palabra,
        pos:fraseInicial.length
    })
})

app.put('/api/palabras',(req,res)=>{
    const indicePalabra = parseInt(req.body.pos) -1
    const palabra = req.body.palabra
    const anterior = fraseInicial[indicePalabra]
    fraseInicial[indicePalabra] = palabra
    res.json({
        actualizada:palabra,
        anterior: anterior,
        pos:indicePalabra
    })
})

app.delete('/api/palabras/:pos',(req,res)=>{
    const indicePalabra = parseInt(req.body.pos) -1
    const [borrada] = fraseInicial.slice(indicePalabra, 1)
    res.json({
        borrada 
    })
})