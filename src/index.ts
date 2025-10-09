import { Hono } from 'hono'
import { swaggerUI } from '@hono/swagger-ui'
import routes from './routes'
import swaggerDocument from '../docs/swagger.json'

const app = new Hono()

// Register routes
app.route('/', routes)

// Swagger UI setup
app.get(
 '/docs',
 swaggerUI({
  url: '/docs/swagger.json',
 }),
)

export default app

// Start server with Bun
// if (import.meta.main) {
Bun.serve({
 port: 3000,
 fetch: app.fetch,
})
console.log('Server running on http://localhost:3000')
console.log('Swagger UI available at http://localhost:3000/docs')
