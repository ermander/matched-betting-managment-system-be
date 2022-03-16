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
          tipo_quota_punta:
            objKey === 'one'
              ? '1'
              : objKey === 'x'
              ? 'X'
              : objKey === 'two'
              ? '2'
              : objKey === 'under2_5'
              ? 'U2.5'
              : objKey === 'over2_5'
              ? 'O2.5'
              : objKey === 'goal'
              ? 'GG'
              : 'NG',
          quota_banca:
            exchangeOdd[objMarketValues[objKey][0]][0].availableToLay[0].price,
          mercato:
            objKey === ('one' | 'x' | 'two')
              ? '1'
              : objKey === ('under2_5', 'over2_5')
              ? 'U/0'
              : 'GG/NG',
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
