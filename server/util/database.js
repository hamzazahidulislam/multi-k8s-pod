/** @format */

require('dotenv').config()
const keys = require('../config/keys')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(keys.pgDatabase, keys.pgUser, keys.pgPassword, {
  host: keys.pgHost,
  dialect: 'postgres',
  port: keys.pgPort
})

module.exports = sequelize
