const express = require('express')
const app = express()

app.use(
  express.urlencoded({
    extended: true
  }),
)

app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({ message: 'response' })
})

app.post('/createproduct', (req,res)=> {
  const name = req.body.name
  const price = req.body.price

  if (!name) {
    res.status(422).json({ message: 'Name is mandatory' })
    return
  }

  res.status(201).json({ message: `product ${name} with price of ${price} was created` })

})

app.listen(3000)
