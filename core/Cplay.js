const CplayOddModel = require('../models/cplayOdds.model')

class Cplay {
  constructor() { }

  async getOdds(filters) {
    this.cplayOdds = await CplayOddModel.find(filters)
    return this.cplayOdds
  }

  async postOdds(odds) {
    for (const odd of odds) {
      const checkOdd = await CplayOddModel.findOne({ matchId: odd.matchId })
      if (!checkOdd) {
        const cPlayOdd = new CplayOddModel({
          ...odd,
          oneHistory: odd.one,
          xHistory: odd.x,
          twoHistory: odd.two,
          oneXHistory: odd.oneX,
          xTwoHistory: odd.xTwo,
          oneTwoHistory: odd.oneTwo,
          under2_5History: odd.under2_5,
          over2_5History: odd.over2_5,
          goalHistory: odd.goal,
          noGoalHistory: odd.noGoal,
        })

        await cPlayOdd.save()
      } else {
        await CplayOddModel.findOneAndUpdate({ matchId: checkOdd.matchId }, {
          ...odd,
          oneHistory: odd.one,
          xHistory: odd.x,
          twoHistory: odd.two,
          oneXHistory: odd.oneX,
          xTwoHistory: odd.xTwo,
          oneTwoHistory: odd.oneTwo,
          under2_5History: odd.under2_5,
          over2_5History: odd.over2_5,
          goalHistory: odd.goal,
          noGoalHistory: odd.noGoal,
        })
      }
    }
  }
}

module.exports = Cplay
