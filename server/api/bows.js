const router = require('express').Router()
const {Bow} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const allBowInfo = await Bow.findAll()
    res.json(allBowInfo)
  } catch (err) {
    next(err)
  }
})
