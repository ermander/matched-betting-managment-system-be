const { Schema, model } = require('mongoose')

const betfairExchangeOdds = new Schema({
  home: {
    type: String,
    required: true
  },
  away: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  oneOdds: {
    type: Array
  },
  twoOdds: {
    type: Array
  },
  xOdds: {
    type: Array
  },
  underOdds: {
    type: Array
  },
  overOdds: {
    type: Array
  },
  goalOdds: {
    type: Array
  },
  noGoalOdds: {
    type: Array
  }
})

const BetfairExchangeModel = model('Betfair Exchange Odds', betfairExchangeOdds)
module.exports = BetfairExchangeModel
