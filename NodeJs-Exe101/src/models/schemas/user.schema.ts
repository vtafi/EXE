import { ObjectId, Schema } from 'mongoose'
export interface User {
  _id?: ObjectId
  name: string
  email: string
  password: string
  date_of_birth: Date
  phone: string
  role: string
  is_active: boolean
}
export const userSchema = new Schema<User>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    date_of_birth: { type: Date, required: true },
    phone: { type: String, required: true },
    role: { type: String, required: true },
    is_active: { type: Boolean, default: false }
  },
  { timestamps: true }
)
