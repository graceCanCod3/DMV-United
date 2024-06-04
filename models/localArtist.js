const { Schema } = require('mongoose')

const LocalArtistSchema = new Schema(
  {
    about: { type: String, required: true },
    musicStyle: { type: String, required: true },
    location: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = LocalArtistSchema