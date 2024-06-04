const { Schema } = require('mongoose')

const ArtistSchema = new Schema(
  {
    name: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    merch: {type: Boolean, required: true},
    bio: {type: String, required: true},
    genre: { type: String, required: true },
    image: { type: String, required: true},
    url: { type: String, required: true},
    genreId: { type: Schema.Types.ObjectId, ref: `localArtist`}
  },
  { timestamps: true }
)

module.exports = ArtistSchema;