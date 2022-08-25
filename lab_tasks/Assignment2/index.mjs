/* Goals: 
- Create a script to ask name and age
- Return the answer with the background in yellow and the text in black 
- Use catch for err handling
*/

import inquirer from 'inquirer';
import chalk from 'chalk';

inquirer
  .prompt([
  {
    name: 'p1',
    message: 'Enter your name:',
  },
  {
    name: 'p2',
    message: 'Enter your age: ',
  },
]).then((answers) => {

    console.log(chalk.bgYellow.black(`Username is: ${answers.p1} and age is: ${answers.p2}`))

}).catch(err => console.log(err))
