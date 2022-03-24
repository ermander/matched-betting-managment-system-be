const moment = require('moment')

class DeleteOldMatches {
  constructor() {}

  async delete(odds) {
    const now = moment()
    for (let i = 0; i < odds.length; i++) {
      const date = moment(odds[i].date)
      console.log(date.isSameOrAfter(now))
      if (date.isSameOrAfter(now)) {
        console.log(date.isSameOrAfter(now))
      }
    }
  }
}

module.exports = DeleteOldMatches
