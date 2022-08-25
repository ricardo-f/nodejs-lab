// logical of async execution

const fs = require('fs')

console.log('Start')

fs.writeFile('file.txt', 'file content', function(err) {
  setTimeout(function (){
    console.log('File created!')
  }, 1000)
})

console.log('End')