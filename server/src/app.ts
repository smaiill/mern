import './paths' // for paths alias.
import express, { Application, NextFunction, Request, Response } from 'express'
import usersRoutes from './routes/users.routes'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import { Tracer } from './utils/tracer' // METHODS TRACER !

const app: Application = express()

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  })
)
app.use(Tracer)
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/users', usersRoutes)

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'niiy.',
  })
})

// !
// TODO: catch error !
// !

export default app
