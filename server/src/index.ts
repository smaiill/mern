import { logger } from './utils/logger'
import './utils/loadEnv'
import app from './app'
import './config/db'

app.listen(process.env.PORT ?? 8080, () =>
  logger.info(`Started application on port: ${process.env.PORT ?? 8080}`)
)
