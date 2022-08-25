// logical of sync execution

const fs = require('fs')

console.log('Start')

fs.writeFileSync('file.txt', 'file content')

console.log('End')