import db from 'mongoose'
import { logger } from '@utils/logger'

db.connect(process.env.DB_URL as string, {})
  .then(({ connections }) =>
    logger.info(`DB: [${connections[0].name}] connected with succes !`)
  )
  .catch((err) => {
    logger.error(`Couldn't connect the DB: ${err}`)
  })

db.set('debug', process.env.NODE_ENV === 'production' ? false : true)
