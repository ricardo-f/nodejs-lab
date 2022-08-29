const express = require('express')
const router = express.Router()
const path = require ('path')

const basePath = path.join(__dirname, '../templates')

router.use(
  express.urlencoded({
    extended: true,
  }),
)

router.use(express.json())

router.get('/add', (req, res) => {
  res.sendFile(`${basePath}/userform.html`)
})

router.post('/save', (req, res) => {
  console.log(req.body)
  const name = req.body.name
  const age = req.body.age
  console.log(`User is ${name} age is ${age}`)
  res.sendFile(`${basePath}/userform.html`)
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  res.sendFile(`${basePath}/users.html`)
  console.log(`Searching for user: ${id}`)
})

module.exports = router
