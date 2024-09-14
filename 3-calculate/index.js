const calculate = require('./calculate')

const number1 = process.argv[2]
const number2 = process.argv[3]
const operation = process.argv[4]

calculate(number1, number2, operation);