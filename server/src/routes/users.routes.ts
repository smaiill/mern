import { NextFunction, Request, Response, Router } from 'express'
import * as userController from '@controllers/user.controller'
import _AuthService from '@services/auth/auth.service'

const router = Router()

router.post('/register', (req: Request, res: Response, next: NextFunction) =>
  userController.register(req, res, next)
)
router.post('/login', (req: Request, res: Response, next: NextFunction) =>
  userController.login(req, res, next)
)

router.post('/jwtid', (req: Request, res: Response, next: NextFunction) => {
  _AuthService
    .validateToken(req.cookies.jwt ?? null)
    .then((userId) => {
      res.status(200).send(userId)
    })
    .catch((err) => {
      res.status(401).send(err)
    })
})

export default router
