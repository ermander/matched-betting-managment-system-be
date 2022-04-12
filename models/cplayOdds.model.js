const { Schema, model } = require('mongoose')

const cplayOddsSchema = new Schema({
  matchId: {
    type: Number,
    required: true
  },
  sportName: { type: String },
  nation: {
    type: String,
    required: true
  },
  tournament: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  home: {
    type: String,
    required: true
  },
  away: {
    type: String,
    required: true
  },
  one: {
    type: Number,
    required: true
  },
  x: {
    type: Number,
    required: true
  },
  two: {
    type: Number,
    required: true
  },
  oneX: {
    type: Number,
    required: true
  },
  xTwo: {
    type: Number,
    required: true
  },
  oneTwo: {
    type: Number,
    required: true
  },
  goal: {
    type: Number,
    required: true
  },
  noGoal: {
    type: Number,
    required: true
  },
  under2_5: {
    type: Number,
    required: true
  },
  over2_5: {
    type: Number,
    required: true
  },

  oneHistory: {
    type: Number,
    required: true
  },
  xHistory: {
    type: Number,
    required: true
  },
  twoHistory: {
    type: Number,
    required: true
  },
  oneXHistory: {
    type: Number,
    required: true
  },
  xTwoHistory: {
    type: Number,
    required: true
  },
  oneTwoHistory: {
    type: Number,
    required: true
  },
  under2_5History: {
    type: Number,
    required: true
  },
  over2_5History: {
    type: Number,
    required: true
  },
  goalHistory: {
    type: Number,
    required: true
  },
  noGoalHistory: {
    type: Number,
    required: true
  }
})

const CplayOddModel = model('Cplay Odds', cplayOddsSchema)
module.exports = CplayOddModel
