import { Context } from 'hono'
import type { StatusCode } from 'hono/utils/http-status'

export const successResponse = (c: Context, data: any, message = 'Success') => {
 return c.json({ success: true, message, data })
}

export const errorResponse = (
 c: Context,
 message = 'Error',
 status: StatusCode = 400,
) => {
 return c.json({ success: false, message }, status as any)
}
