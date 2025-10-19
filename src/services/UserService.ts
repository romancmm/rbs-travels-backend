import { prisma } from '@/config/db'

export class UserService {
 static async getAll() {
  return "Janina"
 }

 static async getById(id: number) {
  return prisma.user.findUnique({
   where: { id },
   select: { id: true, name: true, email: true, role: true, createdAt: true },
  })
 }

 static async update(id: number, data: any) {
  const user = await prisma.user.findUnique({ where: { id } })
  if (!user) throw new Error('User not found')

  return prisma.user.update({
   where: { id },
   data,
   select: { id: true, name: true, email: true, role: true, updatedAt: true },
  })
 }

 static async delete(id: number) {
  const user = await prisma.user.findUnique({ where: { id } })
  if (!user) throw new Error('User not found')

  return prisma.user.delete({ where: { id } })
 }
}
