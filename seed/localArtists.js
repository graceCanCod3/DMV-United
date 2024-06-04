const db = require('../db')
const { LocalArtist } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const localArtists =[
        {
            about: "Go-go is a funk music subgenre, notable for its distinctive rhythmic patterns and live audience interaction through call and response. Originating from African-American musicians in Washington, D.C., during the mid-60s to late-70s, go-go remains regionally popular in the Washington metropolitan area and was declared the official music of Washington, D.C., in February 2020. The music is technically defined by a syncopated rhythm in a five-through-four pattern, driven by the bass drum, snare drum, and hi-hat, and enhanced by various percussion instruments like congas, rototoms, and cowbells. A unique aspect of go-go instrumentation includes two standard congas and two smaller junior congas, a setup popularized by Tyrone 'Jungle Boogie' Williams of Rare Essence. Although Chuck Brown is dubbed the 'Godfather of Go-Go,' the genre's development involved numerous bands and artists such as Marvin Gaye, Experience Unlimited (E.U.), and Black Heat, who collectively shaped its distinctive sound.",
            musicStyle: "go-go",
            location: "Washington, DC"
          }

    ]

  await LocalArtist.insertMany(localArtists)
  console.log(` Localartists created!`)
}
const run = async () => {
    await main()
    db.close()
  }
  
  run()