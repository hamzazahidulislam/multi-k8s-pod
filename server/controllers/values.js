/** @format */
require('dotenv').config()
const keys = require('../config/keys')

const Value = require('../models/values')
const redis = require('redis')

// redis setup
const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000
})
const redisPublisher = redisClient.duplicate()

exports.getAllValues = async (req, res, next) => {
  try {
    const ALL = await Value.findAll()
    return res.status(200).json(ALL)
  } catch (error) {
    return res.status(500).json(error)
  }
}

exports.getCurrentValue = async (req, res, next) => {
  try {
    redisClient.hgetall('values', (err, values) => {
      return res.status(200).json(values)
    })
  } catch (error) {
    return res.status(500).json(error)
  }
}

exports.createValue = async (req, res, next) => {
  try {
    const VALUE = {
      number: req.body.index
    }

    try {
      if (parseInt(VALUE.number) > 40) {
        return res.status(422).send('Index too high')
      }

      redisClient.hset('values', VALUE.number, 'Nothing yet!')
      redisPublisher.publish('insert', VALUE.number)

      await Value.create(VALUE)
      console.log('Value crerated')
      return res.send({ working: true })
    } catch (error) {
      return res.status(500).json(error)
    }
  } catch (error) {
    return res.status(500).json(error)
  }
}
