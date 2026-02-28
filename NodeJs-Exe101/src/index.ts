import express from 'express'
import { config } from 'dotenv'
import { connectDB } from './database/mongo.database'
import { createServer } from 'node:http'
import { generateFakeUsers } from './services/faker.service'
import cookieParser from 'cookie-parser'

config()
const app = express()
app.use(cookieParser())
const httpServer = createServer(app)
app.use(express.json())
const PORT = process.env.PORT || 3000

// Khởi tạo server
const startServer = async () => {
  await connectDB()
  // await generateFakeUsers(1)

  httpServer.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
}

startServer()
