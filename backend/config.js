import dotenv from 'dotenv'

dotenv.config()

export const PORT = 3000
export const MONGODB_URL = process.env.DB_CONN
export const JWT_TOKEN = process.env.JWT_SECRET