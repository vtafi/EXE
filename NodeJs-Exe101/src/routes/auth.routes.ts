import { Router } from 'express'
import { loginValidator } from '~/middlewares/auth.middleware'

const authRouter = Router()
authRouter.post('/login', loginValidator, )
export default authRouter
