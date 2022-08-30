const express = require("express")
const exphbs = require ("express-handlebars")
const app = express()



const user = { name: "Joe", surname: "Doe" }

const hbs = exphbs.create({
  partialsDir: ["views/partials"]
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.use(express.static('public'))


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


app.get('/post', (req,res) => {
  const posts = [
    {
      title: 'This is a title 1',
      category: 'category content 1',
      body: 'this is the content of a blog post 1',
      comments: 1,
    },
    {
      title: 'This is a title 2',
      category: 'category content 2',
      body: 'this is the content of a blog post 2',
      comments: 2,
    },
    {
      title: 'This is a title 2',
      category: 'category content 2',
      body: 'this is the content of a blog post 2',
      comments: 3,
    }
  ]
  res.render('blogposts', {posts} )
})

app.get('/', (req, res)=> { 
  const auth = true
  res.render('home', {user: user, auth})
})

app.listen(3000, () => {
  console.log("App running at localhost")
})