// to understand why "10" ins't 10
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Data_structures

const x = "10"

//Check x value type
if (!Number.isInteger(x)) {
  throw new Error("X value isn't a integer number")
}

console.log('Keep going....')
