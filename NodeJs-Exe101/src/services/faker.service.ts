import { faker } from '@faker-js/faker'
import UserModel from '../models/user.model'

export const generateFakeUsers = async (count: number) => {
  try {
    const users = []
    for (let i = 0; i < count; i++) {
      console.log('user' + i)
      users.push({
        name: faker.person.fullName(),
        email: 'trantafi204@gmail.com',
        password: '20052004Loi@',
        date_of_birth: faker.date.birthdate({ min: 18, max: 60, mode: 'age' }),
        phone: faker.phone.number(),
        role: faker.helpers.arrayElement(['User', 'Admin', 'Moderator']),
        is_active: faker.datatype.boolean()
      })
    }

    // Insert vào database
    const result = await UserModel.insertMany(users)
    console.log(`✅ Inserted ${result.length} fake users into DB_EXE`)
    return result
  } catch (error) {
    console.error('❌ Error inserting fake users:', error)
    throw error
  }
}
