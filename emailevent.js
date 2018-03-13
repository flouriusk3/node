const emitter = require('./modules/SendEmail');

// Custom event
emitter.on('emailEvent', (message)=>{
  console.log(`Email:  ${message}`)
});


//Event
emitter.emit('emailEvent', 'Send activation email to user after registration');
