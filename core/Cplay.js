const CplayOddModel = require('../models/cplayOdds.model')

class Cplay {
  constructor() {}

  async getOdds(filters) {
    this.cplayOdds = await CplayOddModel.find(filters)
    return this.cplayOdds
  }

  async postOdds(odds) {
    console.log(odds)
    for (let odd of odds) {
      const isAlreadySaved = await CplayOddModel.find({
        nation: odd.nation,
        tournament: odd.tournament,
        home: odd.home,
        away: odd.away
      })

      if (isAlreadySaved.length === 0) {
        odd.oneHistory = odd.one
        odd.xHistory = odd.x
        odd.twoHistory = odd.two
        odd.oneXHistory = odd.oneX
        odd.xTwoHistory = odd.xTwo
        odd.oneTwoHistory = odd.oneTwo
        odd.goalHistory = odd.goal
        odd.noGoalHistory = odd.noGoal
        odd.under2_5History = odd.under2_5
        odd.over2_5History = odd.over2_5

        const newOdd = new CplayOddModel(odd)
        await newOdd.save()
      } else {
        isAlreadySaved[0].oneHistory = odd.one
        isAlreadySaved[0].xHistory = odd.x
        isAlreadySaved[0].twoHistory = odd.two
        isAlreadySaved[0].oneXHistory = odd.oneX
        isAlreadySaved[0].xTwoHistory = odd.xTwo
        isAlreadySaved[0].oneTwoHistory = odd.oneTwo
        isAlreadySaved[0].goalHistory = odd.goal
        isAlreadySaved[0].noGoalHistory = odd.noGoal
        isAlreadySaved[0].under2_5History = odd.under2_5
        isAlreadySaved[0].over2_5History = odd.over2_5

        await CplayOddModel.findByIdAndUpdate(
          isAlreadySaved[0]._id,
          isAlreadySaved[0]
        )
      }
    }
  }
}

module.exports = Cplay
