import { Context } from 'hono'

export const successResponse = (c: Context, data: any, message = 'Success') => {
 return c.json({ success: true, message, data })
}

export const errorResponse = (c: Context, message = 'Error', status = 400) => {
 return c.json({ success: false, message }, status)
}
