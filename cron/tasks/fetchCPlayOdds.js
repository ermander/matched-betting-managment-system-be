require('dotenv').config()
const axios = require('axios')
const sleep = require('../../services/sleep')
const moment = require('moment')
const mongoose = require('mongoose')
const { baseUrl, links } = require('../../utils/links/cPlayLinks')
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
        data = data.data.ResponseData[0]

        for (let date = 0; date < data.dates.length; date++) {
          //console.log(data.dates[date])
          for (
            let match = 0;
            match < data.dates[date].matches.length;
            match++
          ) {
            const event = {}
            event.away = `${data.dates[date].matches[match].ateam
              .charAt(0)
              .toUpperCase()}${data.dates[date].matches[match].ateam
              .slice(1)
              .toLowerCase()}`
            event.home = `${data.dates[date].matches[match].hteam
              .charAt(0)
              .toUpperCase()}${data.dates[date].matches[match].hteam
              .slice(1)
              .toLowerCase()}`
            event.nation = data.dates[date].matches[match].countryName
            event.tournament = data.dates[date].matches[match].groupName
            event.date = data.dates[date].matches[match].matchTime

            console.log(event)
          }
        }
        // 28160450
        //console.log(data)
        console.log('Waiting 15 seconds')
        await sleep(15000)
      }
    }
  })
}

fetchCPlayOdds()
