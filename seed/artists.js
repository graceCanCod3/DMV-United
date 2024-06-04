const db = require('../db')
const { LocalArtist, Artist} = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const localArtists = await LocalArtist.find({})
    const genre = await LocalArtist.find({ musicStyle: "go-go" })

    const artists = [
        {
          name: "Mambo Sauce",
          dateOfBirth: new Date('1985-05-23'),
          merch: true,
          bio: "Named after a popular condiment in D.C. Chinese take-out restaurants, Mambo Sauce emerged in 2007 with their songs 'Miracles' and 'Welcome to D.C.' Their debut album, The Recipe, was released in 2009. The band includes lead vocalists Alfred 'Black Boo' Duncan and Joi 'J.C.' Carter, percussionist Jermaine 'Lil Pep' Cole, drummer Patricia 'Twink' Little, keyboardist Christian 'Lil' Chris' Wright, and bassist Khari Pratt. Former members, who moved on to other legendary go-go bands, include lead vocalist Yendy Brown, lead guitarist Andrew 'Drew' White, and drummer Barrington 'Barry' Talbert.",
          genre: "go-go",
          image: "http://example.com/john-doe.jpg",
          url: "http://example.com/john-doe",
          genreId: localArtists._id
        },
        {
          name: "Chuck Brown",
          dateOfBirth: new Date('1936-08-22'),
          merch: false,
          bio: "Known as the Godfather of go-go, he significantly influenced this indigenous music from Washington, D.C., and its musical cousin, hip hop. Since the late '70s, backed by the Soul Searchers, he shaped the percussive, funk-inspired sound of go-go. As a band leader, performer, and songwriter, Brown remained a pivotal figure in the genre until his passing on May 16, 2012.",
          genre: "go-go",
          image: "https://i.imgur.com/sA01W0P.jpg",
          url: "https://windmeupchuck.com/bio",
          genreId: localArtists._id
        },
        {
            name: "Rare Essence ",
            dateOfBirth: new Date('1976'),
            merch: true,
            bio: "known as 'The Wickedest Band Alive,' began as the Young Dynamos in the early '70s before adopting their R-E moniker in 1977. Founded by Quentin 'Footz' Davidson, along with members Andre 'Whiteboy' Johnson, Michael 'Funky Ned' Neal, and John Jones, they dominated the local club scene. They scored their first hit with 'Body Moves' in 1981, and their most popular single, 'Work the Walls,' was released in 1992.",
            genre: "go-go",
            image: "https://i.imgur.com/HwNe72U.jpg",
            url: "https://www.rareessence.com",
            genreId: localArtists._id
          },
          {
            name: "Trouble Funk",
            dateOfBirth: new Date('1978'),
            merch: true,
            bio: "In 1978, musicians including drummer Emmet Nixon, percussionists Mack Carey and Timothius Davis, guitarist Chester Davis, bassist Tony Fisher, trombone players Gerald and Robert Reed, trumpeter Taylor Reed, keyboard player James Avery, and saxophonist David Rudd formed Trouble Funk. They became one of the most popular go-go groups, releasing their debut single 'Drop the Bomb' in 1982 on Sugar Hill Records, known for promoting the first rap song, 'Rapper's Delight' by the Sugar Hill Gang.",
            genre: "go-go",
            image: "https://i.imgur.com/wJPiNne.jpg",
            url: "http://www.troublefunk.com",
            genreId: localArtists._id
          },
          {
            name: "The Backyard Band",
            dateOfBirth: new Date('1988'),
            merch: true,
            bio: "Calling themselves the 'Bad Boys of Go-Go,' is known for pioneering the fusion of popular rap songs with go-go beats starting in the early '90s. Respected by younger audiences, they gained additional recognition when rapper Wale featured the band's lead vocalist, Weensey, on his go-go inspired hit 'Pretty Girls.'",
            genre: "go-go",
            image: "https://i.imgur.com/Lubg7jC.jpg",
            url: "https://backyard4lifedc.com/about",
            genreId: localArtists._id
          },          
          {
            name: "EU (Experience Unlimited)",
            dateOfBirth: new Date('1975'),
            merch: true,
            bio: "Led by singer and bassist Gregory 'Sugarbear' Eliot, the band EU (Experience Unlimited) from the '80s and early '90s achieved mainstream success with their hit 'Da Butt.' The song became a huge commercial success in 1988 and was prominently featured in Spike Lee's film School Daze.",
            genre: "go-go",
            image: "https://i.imgur.com/KH5EK2i.jpg",
            url: "https://en.wikipedia.org/wiki/Experience_Unlimited",
            genreId: localArtists._id
          },          
          {
            name: "UCB (Uncalled 4 Band)",
            dateOfBirth: new Date('1997'),
            merch: true,
            bio: "Washington, D.C.'s UCB (Uncalled 4 Band) formed in the late '90s in the basement of group member Roc Mikey's mother's garage. The group gained national recognition when Wale featured them on his Attention Deficit tour, showcasing their music to fans across the country. In 2009, they performed as the house band for MTV's Video Music Awards and supported Wale at BET's 'Rising Icons.'",
            genre: "go-go",
            image: "https://i.imgur.com/X00YPDU.jpg",
            url: "https://uncalled4bandlive.com",
            genreId: localArtists._id
          },          
          {
            name: "The Young Senators",
            dateOfBirth: new Date('1965'),
            merch: true,
            bio: "They made history as the first go-go band to record with a major Motown act and achieve a number-one single with 1969's 'Jungle.' Inducted into the Go-Go Hall of Fame in February 2002, they left a lasting legacy in the genre.",
            genre: "go-go",
            image: "https://i.imgur.com/9nXIuBZ.jpg",
            url: "https://dclmusicians.org/?p=465",
            genreId: localArtists._id
          },
          {
            name: "Black Heat",
            dateOfBirth: new Date('1970'),
            merch: true,
            bio: "Founded by King Raymond Green in the 1970s, this short-lived funk band included members like keyboardist and vocalist Johnell Gray, guitarist and vocalist Bradley Owens, bass guitarist and vocalist Chip Jones, drummer and vocalist Esco Cromer, as well as Ray Thompson on woodwinds, Rodney Edwards on trumpet, Ken Carroll on tenor sax, and King Raymond Green on congas, timbales, harmonica, and vocals. They gained popularity with their 1974 hit single 'No Time to Burn' and released their final album, 'Keep on Runnin's,' in 1975.",
            genre: "go-go",
            image: "https://i.imgur.com/zNlv5tB.jpg",
            url: "https://en.wikipedia.org/wiki/Black_Heat",
            genreId: localArtists._id
          },
          {
            name: "Northeast Groovers",
            dateOfBirth: new Date('1985'),
            merch: true,
            bio: "Emerged as a premier go-go group in the early '90s, gaining prominence with their classic 'Water Dance.' Some members later joined the legendary go-go group Mambo Sauce, reflecting the genre's tradition of band-hopping. Wale paid tribute to Ronald 'Dig Dug' Dixon, the band's percussion player, in his early song 'Dig Dug (Shake It).'",
            genre: "go-go",
            image: "https://i.imgur.com/7Vzwvw9.jpg",
            url: "https://en.wikipedia.org/wiki/Northeast_Groovers",
            genreId: localArtists._id
          },
          {
            name: "The Junkyard Band",
            dateOfBirth: new Date('1980'),
            merch: true,
            bio: "Founded in the early '80s by children using improvised instruments like hubcaps, plastic buckets, crates, pots, pans, and cans, the Junkyard Band gained recognition with their song 'Sardines,' released on the Def Jam hip hop label in 1986. The group continued to record together until their final album in 1999, titled 'The Beginning/End.'",
            genre: "go-go",
            image: "https://i.imgur.com/bbmRTxP.jpg",
            url: "https://en.wikipedia.org/wiki/Junk_Yard_Band",
            genreId: localArtists._id
          },


    ]

    await Artist.insertMany(artists)
    console.log(`artist created with localartists!`)
  }
  const run = async () => {
  await main()
  db.close()
  }
  
  run()
