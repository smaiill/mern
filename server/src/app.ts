import express, { Application, Request, Response } from 'express'
import usersRoutes from './routes/users.routes'

const app: Application = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/users', usersRoutes)

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'niiy.',
  })
})

export default app
