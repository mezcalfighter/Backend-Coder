import express, {json} from 'express'
import { inMemoryManager } from '../managers/InMemoryManager.js'
import Persona from './Persona.js'

const app = express()

app.use(express.json()) // para recibir json en el cuerpo de la peticion
app.use(express.urlencoded({extended:true}))  // Esto para recibir datos desde un forumario porque los envia via url

app.get('/api/personas/:dni',(req,res)=>{
    const dniBuscado = req.params.dni
    const persona = inMemoryManager.recuperarUnoSegunIdentificado({campo:'dni',valor:dniBuscado})
    res.json(persona)
})

app.get('/api/personas',(req,res)=>{
    const ciudadN = req.query.ciudad
    let personas
    if(ciudadN){
        personas = inMemoryManager.recuperarTodoSegunCriterio({campo:'ciudad',valor:ciudadN})
    }else{
        personas = inMemoryManager.recuperarTodoSegunCriterio()
    }
    res.json(personas)
})

app.post('/api/personas',(req,res)=>{
    try{
        const datosPersona = req.body
        const persona = new Persona(datosPersona)
        const personaGuardada = inMemoryManager.guardar(persona)
        res.status(201).json(personaGuardada)
    }catch(error){
        res.status(400).json({msg:error.message})
    }
})
//app.put('/',)
//app.delete('/',)

const PORT = 8080
app.listen(PORT,()=>{
    console.log(`Conectado y escuchando en el puerto ${PORT}`)
})
