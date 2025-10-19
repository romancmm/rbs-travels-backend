import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import routes from '../routes'
import { errorHandler } from '@/middlewares/errorHandler'
import { errorMiddleware } from '@/middlewares/errorMiddleware'

export const app = new Hono()

app.use('*', cors())
app.use('*', logger())
app.use('*', errorMiddleware)

app.route('/api/v1/', routes)
app.onError(errorHandler)
