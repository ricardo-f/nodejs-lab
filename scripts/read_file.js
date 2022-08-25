// Import file system module
const fs = require('fs')

fs.readFile('../README.md', 'utf8', (err, data) => {
  if (err) {
    console.log(err)
    return
  }

  console.log(data)
})