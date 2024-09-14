const add = require('./operations/add')
const multiply = require('./operations/multiply')
const divide = require('./operations/divide')
const subtract = require('./operations/subtract')

module.exports = function calculate(a, b, operation) {
    if (operation === 'add') {
        console.log(add(a, b))
    } else if (operation === 'multiply') {
        console.log(multiply(a, b))
    } else if (operation === 'divide') {
        console.log(divide(a, b))
    } else if (operation === 'subtract') {
        console.log(subtract(a, b))
    }
}