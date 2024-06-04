
const db = require('../db')
const { Artist, Song } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const artists = await Artist.find({})

  const mamboSauce = await Artist.find({ name: "Mambo Sauce" })
  const chuckBrown = await Artist.find({ name: "Chuck Brownt" })
  const rareEssence = await Artist.find({ name: "Rare Essence" })
  const troubleFunk = await Artist.find({ name: "Trouble Funk" })
  const backyardBand  = await Artist.find({ name: "The Backyard Band" })
  const EU = await Artist.find({ name: "EU (Experience Unlimited)" })
  const UCB = await Artist.find({ name: "UCB (Uncalled 4 Band) " })
  const youngSenators  = await Artist.find({ name: "Young Senators " })
  const blackHeat  = await Artist.find({ name: "Black Heat" })
  const northeastGroovers = await Artist.find({ name: "Northeast Groovers" })
  const junkyardBand  = await Artist.find({ name: "The Junkyard Band" })
 
  const songs = [
    {
      album: "Anacostia Blues",
      title: "Morning in the Capital",
      topSong: true,
      description: "A smooth blend of jazz and blues capturing the essence of a DC morning.",
      releaseDate: "2023-02-14",
      artistId: artists._id,
      url: "http://example.com/morning-in-the-capital"
    },
    {
      album: "U Street Nights",
      title: "Electric Feel",
      topSong: false,
      description: "A funky groove that lights up the night scene of U Street.",
      releaseDate: "2022-08-21",
      songId: artists._id,
      url: "http://example.com/electric-feel"
    },
    {
      album: "Metro Vibes",
      title: "Rush Hour",
      topSong: true,
      description: "An upbeat track reflecting the hustle and bustle of DC's metro system.",
      releaseDate: "2023-05-01",
      songId: artists._id,
      url: "http://example.com/rush-hour"
    },
    {
      album: "Cherry Blossom Dreams",
      title: "Petals in the Wind",
      topSong: false,
      description: "A soothing melody inspired by the annual cherry blossom festival.",
      releaseDate: "2023-04-10",
      songId: artists._id,
      url: "http://example.com/petals-in-the-wind"
    },
    {
      album: "Capital City Hip-Hop",
      title: "State of the Union",
      topSong: true,
      description: "A hard-hitting rap about the state of affairs in the nation's capital.",
      releaseDate: "2023-03-15",
      songId: artists._id,
      url: "http://example.com/state-of-the-union"
    },
    {
      album: "Monumental",
      title: "National Treasure",
      topSong: false,
      description: "A rock anthem paying tribute to the historical landmarks of DC.",
      releaseDate: "2023-06-20",
      songId: artists._id,
      url: "http://example.com/national-treasure"
    },
    {
      album: "Capital Grooves",
      title: "Dance on the Mall",
      topSong: true,
      description: "A lively dance track that makes you want to move your feet.",
      releaseDate: "2023-01-30",
      songId: artists._id,
      url: "http://example.com/dance-on-the-mall"
    },
    {
      album: "DC Unplugged",
      title: "Acoustic Sunrise",
      topSong: false,
      description: "An acoustic piece perfect for a calm morning start.",
      releaseDate: "2023-07-11",
      songId: artists._id,
      url: "http://example.com/acoustic-sunrise"
    }
  ];

  await Song.insertMany(songs)
  console.log(`created Songs with artist!`)
}
const run = async () => {
await main()
db.close()
}

run()