// using npm install --save inquirer@^8.0.0
// then node index.js
// more at: https://www.npmjs.com/package/inquirer

const inquirer = require('inquirer')

inquirer.prompt([
  {
    name: 'p1',
    message: 'First number:',
  },
  {
    name: 'p2',
    message: 'Second number: ',
  },
]).then((answers) => {
  const medium = ((parseInt(answers.p1) + parseInt(answers.p2)) / 2 )

  console.log(`The medium is: ${medium}`)

}).catch(err => console.log(err))