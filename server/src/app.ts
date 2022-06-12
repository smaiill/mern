import express, { Application, Request, Response } from 'express'
import usersRoutes from './routes/users.routes'
import cookieParser from 'cookie-parser'

const app: Application = express()

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/users', usersRoutes)

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'niiy.',
  })
})

export default app
