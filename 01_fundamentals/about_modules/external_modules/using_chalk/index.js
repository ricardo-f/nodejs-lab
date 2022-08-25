// Basic example of chalk usage
// for this code the chalk installed was the chalk@4.1.2
// the latest versions don't allow the require usage
// more about chalk: https://www.npmjs.com/package/chalk
 
const chalk = require('chalk')

const number = 5

if (number >= 5) {
  console.log(chalk.bgGreen("Ok!"))
} else {
  console.log(chalk.bgRed("NOK!"))
}
