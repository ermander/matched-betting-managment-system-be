const CplayModel = require('../../models/cplayOdds.model')
const BetfairExchangeModel = require('../../models/betfairExchangeOdds.model')
const MatchOdds = require('../../core/MatchOdds')

const getOddsmatcherOdds = async (req, res) => {
  try {
    const filters = req.body.filters
    const cplayOdds = await CplayModel.find()
    const betfairExchangeOdds = await BetfairExchangeModel.find()
    const matchOdds = new MatchOdds(cplayOdds, betfairExchangeOdds, filters)
    const oddsmatcherOdds = matchOdds.getOddsmatcherOdds()
    return res.status(200).json(oddsmatcherOdds)
  } catch (error) {
    console.log(error)
    return res.json(error)
  }
}

module.exports = { getOddsmatcherOdds }
