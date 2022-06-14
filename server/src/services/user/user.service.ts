import UserModel from '@models/user.model'
import { UserAuthRT, UserAuthLT } from 'typings/user.types'
import { logger } from '@utils/logger'
import { Request, Response } from 'express'
import _AuthService from '../auth/auth.service'

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

  static login(req: Request, res: Response, { email, password }: UserAuthLT) {
    _AuthService
      .logUser(email, password)
      .then(({ token, TOKEN_MAX_AGE, _id }: any) => {
        res.statusCode = 200
        res.cookie('jwt', token, { httpOnly: true, maxAge: TOKEN_MAX_AGE })
        res.json({
          _id,
        })
      })
      .catch((err) => {
        res.statusCode = 400
        res.send(err)
      })
  }
}
