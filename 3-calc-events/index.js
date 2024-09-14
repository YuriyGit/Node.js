const EventEmmiter = require('events');

const myEmitter = new EventEmmiter();

const number1 = process.argv[2]
const number2 = process.argv[3]
const operation = process.argv[4]

myEmitter.once('result', (result) => {
    console.log(result)
})

myEmitter.on('add', (a, b) => {
    myEmitter.emit('result', Number(a) + Number(b))
})

myEmitter.on('divide', (a, b) => {
    myEmitter.emit('result', Number(a) / Number(b))
})

myEmitter.on('multiply', (a, b) => {
    myEmitter.emit('result', Number(a) * Number(b))
})

myEmitter.on('subtract', (a, b) => {
    myEmitter.emit('result', Number(a) - Number(b))
})

function calculate(a, b, operation) {
    if (operation === 'add') {
        myEmitter.emit('add', a, b)
    } else if (operation === 'multiply') {
        myEmitter.emit('multiply', a, b)
    } else if (operation === 'divide') {
        myEmitter.emit('divide', a, b)
    } else if (operation === 'subtract') {
        myEmitter.emit('subtract', a, b)
    }
}

calculate(number1, number2, operation);