const router = require('express').Router()
const {Arrow} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const allArrowInfo = await Arrow.findAll()
    res.json(allArrowInfo)
  } catch (err) {
    next(err)
  }
})
