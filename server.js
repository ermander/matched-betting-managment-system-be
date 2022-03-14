require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const cors = require('cors')
const keys = require('./config/environments/keys')
const scrapersEndpointsRoutes = require('./scrapers endpoints/routes/loadRoutes')
const oddsMatchersEndpoints = require('./odds matchers endpoints/routes/loadRoutes')

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json({ limit: '50mb' }))

const http = require('http').createServer(app)

const DEFAULT_PORT = 5000
const port = keys.PORT || DEFAULT_PORT

http.listen(port, () => {
  const environment = keys.NODE_ENV
  console.log(
    `Server running on port ${port} in the ${environment} environment`
  )

  mongoose.connect(
    keys.MONGODB_COMPASS_CONNECTION_STRING,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
    (err) => {
      if (err) {
        logger.error('Error connection to DB')
      }
    }
  )

  const { connection } = mongoose
  connection.once('open', () => {
    console.log('DB connection made')
    scrapersEndpointsRoutes.loadRoutes(app)
    oddsMatchersEndpoints.loadRoutes(app)
  })
})
