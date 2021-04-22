const express = require('express')
const app = express()

const { config } = require('./config/index')
const moviesApi = require('./routes/movies')

const { logErrors, errorHandler, wrapErrors } = require('./utils/middleware/errorHandlers')
const notFoundHandler = require('./utils/middleware/notFoundHandler')

app.use(express.json())

moviesApi(app)

app.use(notFoundHandler)

app.use(logErrors)
app.use(wrapErrors)
app.use(errorHandler)

app.listen(config.port, () => {
    console.log(`Listening 127.0.0.1:${config.port}`)
})