import UserModel from '../../models/user.model'
import { UserAuthRT, UserAuthLT } from 'typings/user.types'
import { logger } from '../../utils/logger'
import { Response } from 'express'

export default class _UserService {
  constructor() {}

  static async register(
    res: Response,
    { username, email, password }: UserAuthRT
  ): Promise<void> {
    try {
      const user = await UserModel.create({
        username,
        email,
        password,
      })
      res.statusCode = 200
      res.send({
        status: 'ok',
      })
    } catch (error) {
      logger.error(`can't create user: ${error}`)
      res.statusCode = 400
      res.send({
        status: 'error',
        error,
      })
    }
  }

  static login({ email, password }: UserAuthLT) {
    console.log(email, password)
  }
}
