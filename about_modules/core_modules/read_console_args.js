// Using process.argv
// more: https://nodejs.org/api/process.html#processargv
// using this is:
// node read_args.js --name=yourName --age=yourAge

// console.log(process.argv)

const args = process.argv.slice(2)

// console.log(args)

const name = args[0].split('=')[1]

// console.log(name)

const age = args[1].split('=')[1]

// console.log(age)

console.log(`Name is: ${name} , age is ${age}`)