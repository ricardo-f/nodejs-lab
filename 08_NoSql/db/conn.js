const { MongoClient } = require('mongodb')

const uri = "mongodb://localhost:27017/newDatabase"

const client = new MongoClient(uri)

async function run() {
  try {
    await client.connect()
    console.log('conectado ao mongodb')
  } catch (err) {
    console.log(err)
  }
}

run()

module.exports = client