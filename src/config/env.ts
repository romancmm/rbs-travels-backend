import 'dotenv/config'

export const PORT = Number(process.env.PORT) || 4000
export const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey'
export const DATABASE_URL = process.env.DATABASE_URL || ''
