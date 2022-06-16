import { NextFunction, Request, Response } from 'express'
import JWT from 'jsonwebtoken'
export default class AuthMiddlwares {
  constructor() {}

  static checkUserId(req: Request, res: Response, next: NextFunction) {
    const userToken = req.cookies?.jwt

    if (userToken) {
      JWT.verify(
        userToken,
        process.env.SECRET_KEY as string,
        (err: JWT.VerifyErrors | null, decodedToken: any) => {
          if (err) {
            req.userID = null
            res.status(401).json({ message: 'Token is not valid' })
            return
          }

          req.userID = decodedToken.payload._id
          next()
        }
      )
    }
  }
}
