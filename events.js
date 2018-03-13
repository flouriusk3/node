const events = require('events');
let emitter = new events.EventEmitter();

// Custom event
emitter.on('newEvent', (message)=>{
  console.log(`Message:  ${message}`)
});


//Event
emitter.emit('newEvent', 'Hello, this is Kiyunna Flourius');


