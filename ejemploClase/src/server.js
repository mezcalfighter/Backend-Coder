import express from 'express'
import usersApiRouter from './routes/usersApiRouter.js'
import usersWebRouter from './routes/usersWebRouter.js'
const PORT = 8080

const app = express()
app.use('/api/users', usersWebRouter)
app.use('/api/users', useApiRouter)

app.listen(PORT,()=>{
    console.log('conectado')
})