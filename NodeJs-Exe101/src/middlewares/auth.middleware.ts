import { checkSchema } from 'express-validator'
import { userMessages } from '~/constants/messages'
import UserModel from '~/models/user.model'
import { hashPassword } from '~/utils/cypto'
import { validate } from '~/utils/validation'
export const loginValidator = validate(
  checkSchema(
    {
      email: {
        isEmail: {
          errorMessage: userMessages.EMAIL_REQUIRED
        },

        trim: true,
        custom: {
          options: async (value, { req }) => {
            const user = await UserModel.findOne({ email: value, password: hashPassword(req.body.password) }).exec()
            if (user === null) {
              throw userMessages.EMAIL_OR_PASSWORD_INCORRECT
            }
            req.user = user
            return true
          }
        }
      },
      password: {
        notEmpty: {
          errorMessage: userMessages.PASSWORD_REQUIRED
        },
        isString: {
          errorMessage: userMessages.PASSWORD_INCORRECT
        },
        isLength: {
          options: { min: 6, max: 50 },
          errorMessage: userMessages.PASSWORD_LIMIT
        }
      }
    },
    ['body']
  )
)
