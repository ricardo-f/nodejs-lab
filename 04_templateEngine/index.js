const express = require("express")
const exphbs = require ("express-handlebars")
const app = express()

const user = { name: "Joe", surname: "Doe" }

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {
  const items = ["abc", "def", "ghi"]
  res.render('dashboard', {user: user, items})
})

app.get('/blog', (req, res)=> { 
  const post = {
    title: 'This is a title',
    category: 'category content',
    body: 'this is the content of a blog post',
    comments: 4,
  }
  res.render('blog', {post})
})

app.get('/', (req, res)=> { 
  const auth = true
  res.render('home', {user: user, auth})
})

app.listen(3000, () => {
  console.log("App running at localhost")
})