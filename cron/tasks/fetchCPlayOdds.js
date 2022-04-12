require('dotenv').config()
const axios = require('axios')
const randomSleep = require('../../services/randomSleep')
const mongoose = require('mongoose')
const { baseUrl, marketIds, links } = require('../../utils/links/cPlayLinks')
const keys = require('../../config/environments/keys')

async function fetchCPlayOdds() {
  mongoose.connect(
    keys.MONGODB_CONNECTION_STRING,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
    (err) => {
      if (err) {
        console.log('Error connection to DB')
      }
    }
  )

  const { connection } = mongoose

  connection.once('open', async () => {
    console.log('DB connection made')
    while (true) {
      for (const link of links) {
        console.log('Fetching data...')
        let data = await axios.post(`${baseUrl}${link}`)
        if (data.data.ResponseData.length !== 0) {
          data = data.data.ResponseData[0]

          const events = []
          for (const date of data.dates) {
            for (const match of date.matches) {
              const event = {}
              event.matchId = match.id
              event.nation = match.countryName
              event.tournament = match.groupName
              event.home = match.hteam
              event.away = match.ateam
              event.date = match.matchTime
              event.sportName = match.sportName
              events.push(event)
            }
          }

          // Creo un array "lineare" dove inserire tutte le quote
          const odds = []
          for (const oddsContainer of data.data) {
            for (const oddInfo of oddsContainer.outcomes) {
              const odd = {}
              odd.matchId = oddsContainer.matchId
              odd.odd = oddInfo.odd
              odd.outcomeId = oddInfo.outcomeId
              odds.push(odd)
            }
          }

          for (const event of events) {
            const eventOdds = odds.filter(odd => odd.matchId === event.matchId)
            for (const eventOdd of eventOdds) {
              event[marketIds[eventOdd.outcomeId]] = eventOdd.odd
            }
          }

          try {
            await axios.post(`${keys.AXIOS_BASE_URL}/api/scrapers-endpoints/cplay/post-odds`, events)
            console.log("OK")
          } catch (error) {
            console.log(error)
          }

          console.log('Waiting...')
          console.time()
          await randomSleep(15000, 5)
          console.timeEnd()
        }
      }
    }
  })
}

fetchCPlayOdds()

