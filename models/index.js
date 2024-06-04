const mongoose =  require('mongoose');
const ArtistSchema = require('./artist');
const LocalArtistSchema = require('./localArtist');
const SongSchema = require('./song');

const Artist = mongoose.model('Artist', ArtistSchema);
const LocalArtist = mongoose.model('LocalArtist', LocalArtistSchema);
const Song = mongoose.model('Song', SongSchema);

module.exports = {
    Artist, 
    LocalArtist,
    Song
    
}