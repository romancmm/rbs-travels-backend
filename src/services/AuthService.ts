import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { prisma } from '../config/db'
import { JWT_SECRET } from '../config/env'

export class AuthService {
 // 🧩 REGISTER
 static async register({
  name,
  email,
  password,
 }: {
  name: string
  email: string
  password: string
 }) {
  if (!name || !email || !password) throw new Error('All fields are required')

  const existing = await prisma.user.findUnique({ where: { email } })
  if (existing) throw new Error('Email already exists')

  const hashed = await bcrypt.hash(password, 10)
  const user = await prisma.user.create({
   data: { name, email, password: hashed },
  })

  const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '7d' })

  return {
   token,
   user: { id: user.id, name: user.name, email: user.email },
  }
 }

 // 🧩 LOGIN
 static async login({ email, password }: { email: string; password: string }) {
  if (!email || !password) throw new Error('Email and password are required')

  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) throw new Error('Invalid email or password')

  const valid = await bcrypt.compare(password, user.password)
  if (!valid) throw new Error('Invalid email or password')

  const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '7d' })

  return {
   token,
   user: { id: user.id, name: user.name, email: user.email },
  }
 }

 // 🧩 PROFILE
 static async getProfile(userId: string) {
  const user = await prisma.user.findUnique({
   where: { id: userId },
   select: { id: true, name: true, email: true, createdAt: true },
  })
  if (!user) throw new Error('User not found')
  return user
 }
}
