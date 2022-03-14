const router = require('express').Router()
const oddsmatcherController = require('../controllers/oddsmatcher.controller')

router.get('/', oddsmatcherController.getOddsmatcherOdds)

module.exports = router
