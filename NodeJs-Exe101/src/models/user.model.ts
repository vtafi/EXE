import { model } from 'mongoose'
import { userSchema, User } from './schemas/user.schema'

const UserModel = model<User>('User', userSchema)
export default UserModel
