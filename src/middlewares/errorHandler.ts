import { Context } from 'hono'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'

export const errorHandler = (err: any, c: Context) => {
 console.error('Global Error:', err)

 if (err instanceof PrismaClientKnownRequestError) {
  return c.json({ success: false, message: 'Database error occurred.' }, 500)
 }

 if ('status' in err && err.status === 401) {
  return c.json({ success: false, message: 'Unauthorized' }, 401)
 }

 return c.json(
  { success: false, message: err.message || 'Internal server error' },
  500,
 )
}
