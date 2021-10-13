const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response',()=>{
    console.log(`data received as emitter`);
})

customEmitter.emit('response');

