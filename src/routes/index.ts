import { Hono } from 'hono'
import authRoutes from './auth.routes'
import { userRouter } from './user.routes'

const routes = new Hono()

routes.route('/auth', authRoutes)
routes.route('/users', userRouter)

routes.get('/', (c) => c.text('🚀 Travel Agency API running'))

export default routes
