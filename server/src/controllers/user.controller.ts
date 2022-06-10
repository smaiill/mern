import { NextFunction, Request, Response } from 'express'
import UserAuth from '../services/user/user.service'

const register = async (req: Request, res: Response, next: NextFunction) => {
  const { username, email, password } = req.body

  await UserAuth.register(res, {
    email,
    username,
    password,
  })
}

const login = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body

  UserAuth.login({
    email,
    password,
  })
}

export { login, register }
