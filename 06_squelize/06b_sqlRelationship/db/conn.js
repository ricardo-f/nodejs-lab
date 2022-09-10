const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('usersdb', 'root', '', {
  host: 'localhost',
  port: '13306',
  dialect: 'mysql'
})

module.exports = sequelize