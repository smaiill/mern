import { NextFunction, Request, Response } from 'express'
import { logger } from './logger'

const Tracer = (req: Request, res: Response, next: NextFunction) => {
  if (process.env.NODE_ENV == 'development') {
    logger.warn(`${req.method} | ${req.url}`)
  }

  next()
}

export { Tracer }
