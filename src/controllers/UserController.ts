import type { Context } from 'hono'
import { UserService } from '@/services/UserService'
import { successResponse, errorResponse } from '@/utils/response'

export class UserController {
 /**
  * Get all users
  */
 static async getAll(c: Context) {
  try {
   const users = await UserService.getAll()
   return successResponse(c, users, 'Users fetched successfully')
  } catch (error: any) {
   return errorResponse(c, error.message || 'Failed to fetch users')
  }
 }

 /**
  * Get user by ID
  */
 static async getById(c: Context) {
  try {
   const id = Number(c.req.param('id'))
   if (!id) return errorResponse(c, 'User ID is required', 400)

   const user = await UserService.getById(id)
   if (!user) return errorResponse(c, 'User not found', 404)

   return successResponse(c, user, 'User fetched successfully')
  } catch (error: any) {
   return errorResponse(c, error.message || 'Failed to fetch user')
  }
 }

 /**
  * Update user profile
  */
 static async update(c: Context) {
  try {
   const id = Number(c.req.param('id'))
   const body = await c.req.json()
   const updatedUser = await UserService.update(id, body)

   return successResponse(c, updatedUser, 'User updated successfully')
  } catch (error: any) {
   return errorResponse(c, error.message || 'Failed to update user')
  }
 }

 /**
  * Delete a user
  */
 static async delete(c: Context) {
  try {
   const id = Number(c.req.param('id'))
   if (!id) return errorResponse(c, 'User ID is required', 400)

   await UserService.delete(id)
   return successResponse(c, null, 'User deleted successfully')
  } catch (error: any) {
   return errorResponse(c, error.message || 'Failed to delete user')
  }
 }
}
