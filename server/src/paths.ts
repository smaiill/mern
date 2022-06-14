import 'module-alias/register'
import { addAliases } from 'module-alias'

addAliases({
  '@services': `${__dirname}/services`,
  '@common': `${__dirname}/common`,
  '@config': `${__dirname}/config`,
  '@controllers': `${__dirname}/controllers`,
  '@middlwares': `${__dirname}/middlwares`,
  '@models': `${__dirname}/models`,
  '@routes': `${__dirname}/routes`,
  '@utils': `${__dirname}/utils`,
})
