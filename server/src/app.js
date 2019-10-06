import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'

import routes from './routes'

export const apiPrefix = '/api/'



const app = express()

app.use(morgan(jsonFormat, { stream: loggerStream }))

app.use(bodyParser.json({ limit: '20mb' }))
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }))


app.use(apiPrefix, routes)

export default app