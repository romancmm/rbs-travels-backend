import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { prisma } from '../config/db'
import { JWT_SECRET } from '../config/env'
import { generateToken } from '../utils/jwt'

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
  const existingUser = await prisma.user.findUnique({ where: { email } })
  if (existingUser) throw new Error('Email already exists')

  const hashedPassword = await bcrypt.hash(password, 10)
  const user = await prisma.user.create({
   data: { name, email, password: hashedPassword },
  })

  const token = generateToken({ id: user.id, email: user.email })
  return { user, token }
 }

 // 🧩 LOGIN
 static async login({ email, password }: { email: string; password: string }) {
  if (!email || !password) throw new Error('Email and password are required')

  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) throw new Error('Invalid email or password')

  const valid = await bcrypt.compare(password, user.password)
  if (!valid) throw new Error('Invalid email or password')

  const token = generateToken({ id: user.id, email: user.email })

  return { token, user }
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
