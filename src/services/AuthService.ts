import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { prisma } from '../config/db'
import { JWT_SECRET } from '../config/env'

export class AuthService {
 static async register({ name, email, password }) {
  const existing = await prisma.user.findUnique({ where: { email } })
  if (existing) throw new Error('Email already exists')

  const hashed = await bcrypt.hash(password, 10)
  const user = await prisma.user.create({
   data: { name, email, password: hashed },
  })
  return user
 }

 static async login({ email, password }) {
  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) throw new Error('Invalid email or password')

  const valid = await bcrypt.compare(password, user.password)
  if (!valid) throw new Error('Invalid credentials')

  const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '7d' })
  return token
 }
}
