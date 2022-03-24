const { Schema, model } = require('mongoose')

const pokerStarsSchema = new Schema(
  {
    tournament: String,
    nation: String,
    home: String,
    away: String,
    away: String,
    date: String,
    one: Number,
    x: Number,
    two: Number,
    'U8.5': Number,
    'O8.5': Number,
    'U7.5': Number,
    'O7.5': Number,
    'U6.5': Number,
    'O6.5': Number,
    'U5.5': Number,
    'O5.5': Number,
    'U4.5': Number,
    'O4.5': Number,
    'U3.5': Number,
    'O3.5': Number,
    'U2.5': Number,
    'O2.5': Number,
    'U1.5': Number,
    'O1.5': Number,
    'U0.5': Number,
    'O0.5': Number,
    GG: Number,
    NG: Number,
    oneX: Number,
    xTwo: Number,
    oneTwo: Number
  },
  { timestamps: true }
)

const PokerStarsModel = model('PokerStars Odds', pokerStarsSchema)
module.exports = PokerStarsModel
