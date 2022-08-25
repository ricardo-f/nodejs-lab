// Using process.argv and minimist
// more: 
//   - https://nodejs.org/api/process.html#processargv
//   - https://www.npmjs.com/package/minimist
// using this is:
// npm init (go with the defaults, the only thing I've change was entry point from index.js to minimist_example.js)
// npm i minimist
// node minimist_example.js --name=ricardo --skill=devops

const minimist = require('minimist')

const args = minimist(process.argv.slice(2))

// console.log(args)

const name = args['name']

// console.log(name)

const skill = args['skill']

console.log(`Name: ${name}, skill: ${skill}`)
