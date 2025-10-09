import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import routes from '../routes'
import { errorHandler } from '../middlewares/errorHandler'

export const app = new Hono()

app.use('*', cors())
app.use('*', logger())

app.route('/', routes)
app.onError(errorHandler)
