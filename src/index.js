import express from 'express'
import appRoutes from './routes/authRoutes.js'

const app = express()

const PORT = process.env.PORT || 3007

//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//Configuración de Express-FileUpload


//Rutas
app.use('/', appRoutes)

app.listen(PORT, ()=>{
    console.log(`🚀 Server running on port http://localhost:${PORT}`)
})