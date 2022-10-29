const uri = "mongodb://localhost:27017/newDatabase"

const mongoose = require('mongoose')

async function main() {
  await mongoose.connect(uri)
  console.log('connected to mongoDB using mongoose')
}

main().catch((err) => console.error(err))

module.exports = mongoose
