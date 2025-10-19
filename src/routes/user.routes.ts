import { UserController } from '@/controllers/UserController'
import { Hono } from 'hono'

export const userRouter = new Hono()

userRouter.get('/', UserController.getAll)
userRouter.get('/:id', UserController.getById)
userRouter.put('/:id', UserController.update)
userRouter.delete('/:id', UserController.delete)
