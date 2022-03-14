const router = require('express').Router()
const betfairExchangeController = require('../controllers/betfair.controller')

router.get('/', betfairExchangeController.getOdds)
router.post('/post-odds', betfairExchangeController.postOdds)

module.exports = router
