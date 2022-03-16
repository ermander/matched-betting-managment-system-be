const BetfairExchangeModel = require('../models/betfairExchangeOdds.model')

class BetfairExchange {
  constructor() {}

  async getOdds(filters) {
    this.BetfairExchangeOdds = await BetfairExchangeModel.find(filters)
    return this.BetfairExchangeOdds
  }

  async postOdds(odds) {
    if (!odds) return
    for (let odd of odds) {
      const isAlreadySaved = await BetfairExchangeModel.find({
        home: odd.home,
        away: odd.away,
        date: odd.date
      })

      if (isAlreadySaved.length === 0) {
        const newOdd = new BetfairExchangeModel(odd)
        await newOdd.save()
      }
    }
  }
}

module.exports = BetfairExchange
