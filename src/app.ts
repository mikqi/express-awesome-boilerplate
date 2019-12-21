const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('hello world')
})

export default app
