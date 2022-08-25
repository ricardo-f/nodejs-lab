// intended to show basics of console class
// more at: https://nodejs.org/api/console.html

const x = 10
const y = 'someName'
const z = [1, 2]

console.log(x, y, z)

// count printing

console.count(`x value is: ${x}, count`)
console.count(`x value is: ${x}, count`)
console.count(`x value is: ${x}, count`)
console.count(`x value is: ${x}, count`)

// string interpolation
console.log('The name is %s.', y)

// clean console
setTimeout(() => {
  console.clear()
}, 2000)