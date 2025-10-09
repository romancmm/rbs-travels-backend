import { Context } from 'hono'
import { AuthService } from '../services/AuthService'
import { successResponse, errorResponse } from '../utils/response'

export class AuthController {
 // ✅ REGISTER
 static async register(c: Context) {
  try {
   const body = await c.req.json()
   const result = await AuthService.register(body)
   return successResponse(c, result, 'User registered successfully')
  } catch (error: any) {
   return errorResponse(c, error.message, 400)
  }
 }

 // ✅ LOGIN
 static async login(c: Context) {
  try {
   const body = await c.req.json()
   const result = await AuthService.login(body)
   return successResponse(c, result, 'Login successful')
  } catch (error: any) {
   return errorResponse(c, error.message, 401)
  }
 }

 // ✅ PROFILE
 static async getProfile(c: Context) {
  try {
   const userId = c.get('userId')
   const result = await AuthService.getProfile(userId)
   return successResponse(c, result)
  } catch (error: any) {
   return errorResponse(c, error.message, 404)
  }
 }
}
