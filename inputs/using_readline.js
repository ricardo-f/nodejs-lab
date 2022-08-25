// readline is a core module
// more at: https://nodejs.org/api/readline.html
// usage: node using_readline.js

const readline = require ('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})

readline.question("Name? ", (name) => {
  console.log(`The name defined was: ${name}`)
  readline.close()
})
