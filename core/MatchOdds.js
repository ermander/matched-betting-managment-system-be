const objMarketValues = require('../services/objMarketValues')

class MatchOdds {
  constructor(bookOdds, exchangeOdds) {
    this.bookOdds = bookOdds
    this.exchangeOdds = exchangeOdds
    this.matchedOdds = []
  }

  getOddsmatcherOdds() {
    for (let bookOdd of this.bookOdds) {
      let exchangeOdd = this.exchangeOdds.filter(
        (exchangeOdd) =>
          bookOdd.home === exchangeOdd.home && bookOdd.away === exchangeOdd.away
      )

      if (exchangeOdd.length !== 0) this.calcRating(bookOdd, exchangeOdd[0])
    }
    this.matchedOdds = this.matchedOdds.sort((a, b) => b.rating - a.rating)
    return this.matchedOdds
  }

  calcRating(bookOdd, exchangeOdd) {
    console.log(exchangeOdd)
    for (let objKey of Object.keys(objMarketValues)) {
      if (
        bookOdd[objKey] !== (0 || '') &&
        exchangeOdd[objMarketValues[objKey][0]][0] !== undefined &&
        exchangeOdd[objMarketValues[objKey][0]][0].availableToLay[0] &&
        exchangeOdd[objMarketValues[objKey][0]][0].availableToLay[0].price
      ) {
        const layStake =
          (bookOdd[objKey] * 100) /
          (exchangeOdd[objMarketValues[objKey][0]][0].availableToLay[0].price -
            0.05)
        let rating = (1 - 0.05) * layStake
        rating = rating.toFixed(2)
        rating = parseFloat(rating)

        this.matchedOdds.push({
          date: exchangeOdd.date,
          home: exchangeOdd.home,
          away: exchangeOdd.away,
          quota_punta: bookOdd[objKey],
          tipo_quota_punta: '1',
          quota_banca:
            exchangeOdd[objMarketValues[objKey][0]][0].availableToLay[0].price,
          mercato: '1X2',
          liquidity:
            exchangeOdd[objMarketValues[objKey][0]][0].availableToLay[0].price,
          rating,
          history: bookOdd[objMarketValues[objKey][1]]
        })
      }
    }
  }
}

module.exports = MatchOdds
