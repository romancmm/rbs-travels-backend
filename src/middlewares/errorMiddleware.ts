import { Context, Next } from 'hono'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'

export const errorMiddleware = async (c: Context, next: Next) => {
  try {
    await next()
  } catch (err: any) {
    console.error('Caught in middleware:', err)

    if (err instanceof PrismaClientKnownRequestError) {
      return c.json({ success: false, message: 'Database error occurred.' }, 500)
    }

    return c.json({ success: false, message: err.message || 'Internal server error.' }, 500)
  }
}
