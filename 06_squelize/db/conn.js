const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('sequelizedb', 'root', '', {
  host: 'localhost',
  port: '13306',
  dialect: 'mysql'
})

// try {
//   sequelize.authenticate()
//   console.log('Connected')

// } catch(error) {
//   console.log('Not connected')
// }

module.exports = sequelize