import mongoose from 'mongoose'
import { config } from 'dotenv'

config()

const mongoURI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@nodejs.fwsxclm.mongodb.net/?appName=NodeJS`
export async function connectDB() {
  try {
    await mongoose.connect(mongoURI, {
      dbName: 'DB_EXE'
    })
    console.log(`✅ Connected to MongoDB Atlas via Mongoose! ${process.env.DB_NAME}`)
  } catch (err) {
    console.error('❌ MongoDB connection error:', err)
  }
}
