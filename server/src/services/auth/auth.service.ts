import _PasswordService from '../misc/password.service'
import userModel from '@models/user.model'
import { JWTPayload } from 'typings/auth.types'
import JWT from 'jsonwebtoken'

const TOKEN_MAX_AGE = 3 * 24 * 60 * 60 * 500 // 1.5 day.

export default class _AuthService {
  constructor() {}

  static async createToken(payload: JWTPayload) {
    const token = await JWT.sign(
      { payload },
      process.env.SECRET_KEY as string,
      {
        expiresIn: TOKEN_MAX_AGE,
      }
    )

    return token
  }

  static logUser(email: string, password: string) {
    return new Promise(async (resolve, reject) => {
      const user = await userModel.findOne({
        email,
      })

      if (!user) return reject('user not found !')

      const passwordMatched = _PasswordService.comparePassword(
        password,
        user.password
      )

      if (!passwordMatched) return reject('incorrect password !')

      const token = await this.createToken({
        _id: user._id,
      })

      resolve({
        token,
        TOKEN_MAX_AGE,
        _id: user._id,
      })
    })
  }
}
