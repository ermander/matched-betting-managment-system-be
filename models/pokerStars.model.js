const { Schema, model } = require('mongoose')

const pokerStarsSchema = new Schema(
  {
    pokerStarId: {
      type: Number
    },
    tournament: {
      type: String
    },
    nation: {
      type: String
    },
    home: {
      type: String
    },
    away: {
      type: String
    },
    away: {
      type: String
    },
    date: {
      type: String
    },
    one: {
      type: Number
    },
    x: {
      type: Number
    },
    two: {
      type: Number
    },
    under8_5: {
      type: Number
    },
    over8_5: {
      type: Number
    },
    under7_5: {
      type: Number
    },
    over7_5: {
      type: Number
    },
    under6_5: {
      type: Number
    },
    over6_5: {
      type: Number
    },
    under5_5: {
      type: Number
    },
    over5_5: {
      type: Number
    },
    under4_5: {
      type: Number
    },
    over4_5: {
      type: Number
    },
    under3_5: {
      type: Number
    },
    over3_5: {
      type: Number
    },
    under2_5: {
      type: Number
    },
    over2_5: {
      type: Number
    },
    under1_5: {
      type: Number
    },
    over1_5: {
      type: Number
    },
    under0_5: {
      type: Number
    },
    over0_5: {
      type: Number
    },
    goal: {
      type: Number
    },
    noGoal: {
      type: Number
    },
    oneX: {
      type: Number
    },
    xTwo: {
      type: Number
    },
    oneTwo: Number
  },
  { timestamps: true }
)

const PokerStarsModel = model('PokerStars Odds', pokerStarsSchema)
module.exports = PokerStarsModel
