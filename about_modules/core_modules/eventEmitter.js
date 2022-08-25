// Event Emitter
// more at: https://nodejs.org/api/events.html#class-eventemitter

const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('start', () => {
  console.log('Between the event')
})

console.log('Init event')

eventEmitter.emit('start')

console.log('End of event')