const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const flash = require('express-flash')

const app = express()
// Models
const Thought = require('./models/Thoughts')
const User = require('./models/User')
// Importing Routes
const thoughtsRoutes = require('./routes/thoughtsRoutes')
const authRoutes = require('./routes/authRoutes')
// Importing Controller
const ThoughtController = require('./controllers/ThoughtController')
// Database connection
const conn = require('./db/conn')

// static content - pub path
app.use(express.static('public'))

// Template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// Read response from body
app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

// Session middleware
app.use(
  session({
    name: "sessions",
    secret: "supaMegaSecret",
    resave: false,
    saveUninitialized: false,
    store: new FileStore({
      logFn: function () { },
      path: require('path').join(require('os').tmpdir(), 'sessions'),
    }),
    cookie: {
      secure: false,
      maxAge: 360000,
      expires: new Date(Date.now(), + 360000),
      // Only for lab purpose
      httpOnly: true
    }
  }),
)

// Flash msgs
app.use(flash())

// Logic for session
app.use((req, res, next) => {
  if (req.session.userid) {
    res.locals.session = req.session
  }
  next()
})

// Routes
app.use('/thoughts', thoughtsRoutes)
app.use('/', authRoutes)
app.get('/', ThoughtController.showThoughts)

conn.sync()
  .then(() => {
    app.listen(3000)
  })
  .catch((error) => console.log(error))