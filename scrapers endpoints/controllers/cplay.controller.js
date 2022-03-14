const Cplay = require('../../core/Cplay')

const getOdds = async (req, res) => {
  try {
    const filters = {}
    const cplay = new Cplay()
    const odds = await cplay.getOdds(filters)
    return res.status(200).json(odds)
  } catch (error) {
    console.log(error)
    return res.json(error)
  }
}

const postOdds = async (req, res) => {
  try {
    const cplay = new Cplay()
    await cplay.postOdds(req.body)
    return res.json('Odds saved!')
  } catch (error) {
    console.log(error)
    return res.json(error)
  }
}

module.exports = { getOdds, postOdds }
