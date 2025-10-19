import { serve } from '@hono/node-server'
import { connectDB } from '../config/db'
import { app } from './app'

connectDB()
const port = Number(process.env.PORT) || 4000
console.log(`🚀 Server running at http://localhost:${port}`)

serve({ fetch: app.fetch, port })
