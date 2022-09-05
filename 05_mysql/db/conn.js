const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit:10,
  host: '127.0.0.1',
  port: '13306',
  user: 'root',
  database: 'bookstoredb'
})

module.exports = pool