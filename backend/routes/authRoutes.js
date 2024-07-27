import express from 'express'
import { registerController } from '../controllers/authControllers.js'

const authRoutes = express.Router()

// REGISTER ROUTE
authRoutes.post('/', registerController)


export default authRoutes