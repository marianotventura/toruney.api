import express from 'express'
import { ENV_CONFIG } from './config'

const app = express()
app.use(express.json())
app.listen(ENV_CONFIG.app.port, () => {
  console.log(`listening on port: ${ENV_CONFIG.app.port}`)
})
