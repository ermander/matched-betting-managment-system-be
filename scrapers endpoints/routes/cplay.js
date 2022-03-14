const router = require('express').Router()
const cplayController = require('../controllers/cplay.controller.js')

router.get('/', cplayController.getOdds)
router.post('/post-odds', cplayController.postOdds)
module.exports = router
