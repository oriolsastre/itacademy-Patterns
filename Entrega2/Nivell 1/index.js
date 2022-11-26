const Calculadora = require('./Calculadora')
const Middleware = require('./Middleware')
const dades = require('./dades')

const calculadora = new Calculadora();

console.log(calculadora.suma(dades))

