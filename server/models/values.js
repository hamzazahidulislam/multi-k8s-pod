/** @format */

const Sequelize = require('sequelize')
const db = require('../util/database')

const Values = db.define('values', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  number: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Values
