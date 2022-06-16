import { NextFunction, Request, Response } from 'express'
import _UserService from '@services/user/user.service'

const register = async (req: Request, res: Response, next: NextFunction) => {
  const { username, email, password } = req.body

  await _UserService.register(res, {
    email,
    username,
    password,
  })
}

const login = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body

  _UserService.login(req, res, {
    email,
    password,
  })
}

export { login, register }
