import { TokenType, UserVerifyStatus } from '~/constants/enum'
import { signToken } from '~/utils/jwt'

export const authService = {
  async login(email: string, password: string) {},
  async signAccessToken({ user_id, verify }: { user_id: string; verify: UserVerifyStatus }) {
    return signToken({
      payload: { user_id, verify, token_type: TokenType.AccessToken },
      privateKey: process.env.JWT_SECRET_ACCESS_TOKEN as string,
      options: { expiresIn: process.env.EXPIRES_IN_ACCESS_TOKEN as any }
    })
  },
  async signRefreshToken({ user_id, verify }: { user_id: string; verify: UserVerifyStatus }) {
    return signToken({
      payload: { user_id, verify, token_type: TokenType.RefreshToken },
      privateKey: process.env.JWT_SECRET_REFRESH_TOKEN as string,
      options: { expiresIn: process.env.EXPIRES_IN_REFRESH_TOKEN as any }
    })
  }
}
