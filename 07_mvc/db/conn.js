const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodemvc', 'root', '', {
  host: 'localhost',
  port: '13306',
  dialect: 'mysql'
})

try {
  sequelize.authenticate()
  console.log('Connection with MySql was sucessful')
} catch (error) {
  console.log(`Unable to connect: ${error}`)
}

module.exports = sequelize