import { Request } from 'express'
import { ParamsDictionary } from 'express-serve-static-core'
import { LoginRequestBody } from '~/models/requests.ts/auth.requests'
import cookie from 'cookie'
export const loginController = async (req: Request<ParamsDictionary, any, LoginRequestBody>, res: Response) => {
    
}
