import express from 'express'
import appController from '../controllers/authController.js'

const router = express.Router()

router.get('/', appController.home) //Mostrar la pagina principal

router.get('/carga', appController.carga) //Mostrar el formulario

export default router