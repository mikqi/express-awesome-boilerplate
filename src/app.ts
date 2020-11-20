import * as express from 'express'
import * as logger from 'morgan'
import * as bodyParser from 'body-parser'

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('hello world')
})

export default app
