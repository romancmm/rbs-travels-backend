import { Hono } from 'hono'
import { AuthController } from '../controllers/AuthController'
import { authMiddleware } from '../middlewares/authMiddleware'

const authRoutes = new Hono()

authRoutes.post('/register', AuthController.register)
authRoutes.post('/login', AuthController.login)
authRoutes.get('/profile', authMiddleware, AuthController.getProfile)

export default authRoutes
