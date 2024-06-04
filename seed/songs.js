
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
      album: "The Recipe",
      title: "Welcome to DC",
      topSong: true,
      description: "'Welcome to DC' has enjoyed heavy rotation on WPGC 95.5 and WKYS 93.9 in DC (including on the syndicated “Russ Parr Morning Show”), and hit the Billboard HipHop and R&B charts. The music video for \"Welcome to DC\" enjoyed rotation on VH1 Soul, BETJ, BET, MTV Jams and MTV2 and the track was the official intro song for all Washington Wizards and Mystics Home games.",
      releaseDate: "2009-08-27",
      artistId: mamboSauce._id,
      url: "https://soundcloud.com/mambosauce/welcome-to-dc"
    },
    {
      album: "Bustin' Loose",
      title: "Bustin' Loose",
      topSong: false,
      description: "Released from the album of the same name, it spent four weeks at the top of the R&B singles chart in early 1979 and peaked at number 34 on the Billboard Hot 100 singles chart.",
      releaseDate: "1979",
      songId: chuckBrown._id,
      url: "https://soundcloud.com/user-370152812/sets/chuck-brown-bustin-loose-1"
    },
    {
      album: "The reunion: Live at the Hyatt Regency",
      title: "GoGo Mickey",
      topSong: true,
      description: "An upbeat track reflecting the hustle and bustle of DC's metro system.",
      releaseDate: "2015-01-19",
      songId: rareEssence._id,
      url: "https://soundcloud.com/rareessence/gogo-mickey?in=rareessence/sets/the-reunion-live-at-the-hyatt"
    },
    {
      album: "Drop the Bomb",
      title: "Say What",
      topSong: false,
      description: "One of their greatest hit",
      releaseDate: "2008-01-01",
      songId: troubleFunk._id,
      url: "https://soundcloud.com/troublefunkmusic/say-what-1?in=troublefunkmusic/sets/drop-the-bomb-3&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
    },
    {
      album: "The Backyard Band",
      title: "Funky DrummerDown With The KingButta Fingaz",
      topSong: true,
      description: "A hard-hitting rap about the state of affairs in the nation's capital.",
      releaseDate: "2023-03-15",
      songId: backyardBand._id,
      url: "https://soundcloud.com/rascoe22/backyard-band-funky?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
    },
    {
      album: "School Daze",
      title: "Da Butt",
      topSong: true,
      description: "was featured in Spike Lee's School Daze and scored Top 40 pop hit (and number one R&B hit) in 1988",
      releaseDate: "1988",
      songId: EU._id,
      url: "https://open.spotify.com/track/29O9cSdpmLZKFcTRMlnqo2?si=ef5479005ca44700"
    },
    {
      album: "UCB (Uncalled 4 Band)",
      title: "Sexy Lady (ft. Tre)",
      topSong: true,
      description: "A lively dance track that makes you want to move your feet.",
      releaseDate: "2023-01-30",
      songId: UCB._id,
      url: "https://open.spotify.com/track/2SAR6olJLtcLou5kZKsbAb?si=d20008c179944f92"
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