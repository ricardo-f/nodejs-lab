const express = require("express")
const exphbs = require ("express-handlebars")
const mysql = require("mysql2")

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res)=> {
  res.render('home')
})

const conn = mysql.createConnection({
  host: '127.0.0.1',
  port: '13306',
  user: 'root',
  database: 'nodemysql2'
})

conn.connect(function (err){
  if(err){
    console.log(err)
  } else{
    console.log('MySql Connected :)')
  }
  app.listen(3000)
})