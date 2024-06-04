const express = require('express')
const db = require('./db')
const artistController = require('./controllers/artistController')
const localArtistController = require('./controllers/localArtistController')
const SongController = require('./controllers/songController')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')

const PORT = process.env.PORT || 3001

const app = express()
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(cors())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))