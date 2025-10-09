import { Context, Next } from 'hono'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config/env'
import { errorResponse } from '../utils/response'

export const authMiddleware = async (c: Context, next: Next) => {
  try {
    const header = c.req.header('Authorization')
    if (!header) return errorResponse(c, 'No token provided', 401)

    const token = header.replace('Bearer ', '')
    const decoded = jwt.verify(token, JWT_SECRET) as { id: string }

    c.set('userId', decoded.id)
    await next()
  } catch (error: any) {
    return errorResponse(c, 'Invalid or expired token', 401)
  }
}
