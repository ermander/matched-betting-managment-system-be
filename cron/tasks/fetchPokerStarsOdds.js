const axios = require('axios')
const sleep = require('../../services/sleep')
const moment = require('moment')
const {
  competitionIds,
  marketCodes,
  baseUrl,
  marketNames
} = require('../../utils/links/pokerStarsLinks')

async function fetchPokerStarsOdds() {
  while (true) {
    const matches = []

    for (let competition of competitionIds) {
      for (let market of marketCodes) {
        const data = await axios.get(
          `${baseUrl[0]}${competition.competitionId}${baseUrl[1]}${market}${baseUrl[2]}`
        )

        const matchesInfo = data.data.event

        for (let matchInfo of matchesInfo) {
          const match = {}

          if (market === '3AAXB%2CMRES') {
            match._id = matchInfo.id
            match.tournament = matchInfo.compName.split(' - ')[0]
            match.nation = matchInfo.compName.split(' - ')[1]
            match.home = matchInfo.names.longName.split(' vs ')[0]
            match.away = matchInfo.names.longName.split(' vs ')[1]
            match.date = moment(matchInfo.eventTime).format('DD-MM-YYYY, hh:mm')

            for (let market of matchInfo.markets[0].selection) {
              match[
                market.name === match.home
                  ? 'one'
                  : market.name === 'Pareggio'
                  ? 'x'
                  : 'two'
              ] = parseFloat(parseFloat(market.odds.dec).toFixed(2))
            }

            matches.push(match)
          } else if (market === ('3AOU%2COVUN' || '3ABTS%2CBTSC')) {
            const matchIndex = matches.findIndex((e) => e._id === matchInfo.id)

            for (let market of matchInfo.markets) {
              for (let selection of market.selection) {
                matches[matchIndex][selection.name] = parseFloat(
                  parseFloat(selection.odds.dec).toFixed(2)
                )
              }
            }
          } else {
            const matchIndex = matches.findIndex((e) => e._id === matchInfo.id)

            for (let market of matchInfo.markets) {
              for (let selection of market.selection) {
                matches[matchIndex][
                  selection.name === `${matches[matchIndex].home} o pareggio`
                    ? 'oneX'
                    : selection.name ===
                      `${matches[matchIndex].home} o ${matches[matchIndex].away}`
                    ? 'oneTwo'
                    : 'xTwo'
                ] = parseFloat(parseFloat(selection.odds.dec).toFixed(2))
              }
            }
          }
        }

        await sleep(5000)
      }
    }
    console.log(matches)
    console.log('Attendo')
  }
}

fetchPokerStarsOdds()
