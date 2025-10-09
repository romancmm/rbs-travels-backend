// import { Hono } from 'hono';
// const router = new Hono();
// // Example route
// router.get('/', (c) => c.json({ message: 'Welcome to the Travel Agency API!' }));
// export default router;

import { Hono } from 'hono'
import authRoutes from './auth.routes'
import bookingRoutes from './booking.routes'
import destinationRoutes from './destination.routes'

const routes = new Hono()

routes.route('/auth', authRoutes)
routes.route('/booking', bookingRoutes)
routes.route('/destinations', destinationRoutes)

export default routes
