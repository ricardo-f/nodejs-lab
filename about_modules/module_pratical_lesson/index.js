// usage: node index.js --a=5 --b=10

// External module
const minimist = require('minimist')

// Internal module
const addition = require("./sum_module").addition

const args = minimist(process.argv.slice(2))

const a = parseInt(args['a'])
const b = parseInt(args['b'])

addition(a, b)
