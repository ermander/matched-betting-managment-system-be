const BetfairExchange = require('../../core/BetfairExchange')

const getOdds = async (req, res) => {
  try {
    const filters = {}
    const betfairExchange = new BetfairExchange()
    const odds = await betfairExchange.getOdds(filters)
    return res.status(200).json(odds)
  } catch (error) {
    console.log(error)
    return res.json(error)
  }
}

const postOdds = async (req, res) => {
  try {
    const betfairExchange = new BetfairExchange()
    await betfairExchange.postOdds(req.body)
    return res.json('Odds saved!')
  } catch (error) {
    console.log(error)
    return res.json(error)
  }
}

module.exports = { getOdds, postOdds }
