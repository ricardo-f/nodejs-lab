const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('thought', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  port: 13306
})

try {
  sequelize.authenticate()
} catch (error) {
  console.log(error)  
}

module.exports = sequelize