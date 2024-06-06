const express = require('express')
const db = require('./db')
const artistController = require('./controllers/artistController')
const localArtistController = require('./controllers/localArtistController')
const songController = require('./controllers/songController')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')

const PORT = process.env.PORT || 3003

const app = express()
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(cors())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
  })
  
  app.get('/', (req, res) => {
    res.send('This is our root page!')
  })
  
  
  app.get('/artist', artistController.getAllArtists)
  app.get('/localArtist', localArtistController.getAllLocalArtists)
  app.get(`/song`, songController.getAllSongs)
  
  app.get('/song/artist/:artistId', songController.getSongByArtist)
  app.get('/artist/:id', artistController.getArtistById)
  app.get(`/song/:id`, songController.getSongById)

  
  app.get(`/song/search/:searchTerm`, songController.getSongByWord)


  // delete 
  app.delete(`/artist/:id`, artistController.deleteArtist)
  app.delete(`/song/:id`, songController.deleteSong)

  
  // update 
  app.put(`/artist/:id`, artistController.updateArtist)
  app.put(`/song/:id`, songController.updateSong)
 
  
  app.post(`/artist`, artistController.createArtist)
  app.post(`/song`, songController.createSong)
