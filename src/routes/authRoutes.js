import express from 'express'
import appController from '../controllers/authController.js'

const router = express.Router()

router.get('/', appController.home)

export default router