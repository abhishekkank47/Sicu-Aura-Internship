import express from 'express'
import { loginController, registerController } from '../controllers/authControllers.js'

const authRoutes = express.Router()

// REGISTER ROUTE
authRoutes.post('/', registerController)

// LOGIN ROUTE
authRoutes.post('/sign-up', loginController)


export default authRoutes