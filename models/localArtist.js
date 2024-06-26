const { Schema } = require('mongoose')

const LocalArtist = new Schema(
  {
    about: { type: String, required: true },
    musicStyle: { type: String, required: true },
    location: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = LocalArtist