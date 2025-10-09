import { Context } from 'hono'
import { AuthService } from '../services/AuthService'
import { successResponse, errorResponse } from '../utils/response'

export class AuthController {
 static async register(c: Context) {
  try {
   const data = await c.req.json()
   const user = await AuthService.register(data)
   return successResponse(c, user, 'User registered successfully')
  } catch (err: any) {
   return errorResponse(c, err.message, 400)
  }
 }

 static async login(c: Context) {
  try {
   const data = await c.req.json()
   const token = await AuthService.login(data)
   return successResponse(c, { token }, 'Login successful')
  } catch (err: any) {
   return errorResponse(c, err.message, 401)
  }
 }
}
