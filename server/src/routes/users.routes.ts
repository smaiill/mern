import { NextFunction, Request, Response, Router } from 'express'
import * as userController from '@controllers/user.controller'

const router = Router()

router.post('/register', (req: Request, res: Response, next: NextFunction) =>
  userController.register(req, res, next)
)
router.post('/login', (req: Request, res: Response, next: NextFunction) =>
  userController.login(req, res, next)
)

export default router
