const { Schema } = require('mongoose')

const SongSchema = new Schema(
  {
    album: { type: String, required: true },
    title: { type: String, required: true },
    topSong: {type: Boolean, required: true},
    description: {type: String, required: true},
    releaseDate: { type: String, required: true},
    artistId: { type: Schema.Types.ObjectId, ref: `Artist`},
    url: {type: String, required: true}
  },
  { timestamps: true }
)

module.exports = SongSchema;