/** @format */

const controller = require('../controllers/values')
const router = require('express').Router()

router
  .get('/all', controller.getAllValues)
    .get('/current', controller.getCurrentValue)
  .post('/', controller.createValue)

module.exports = router
