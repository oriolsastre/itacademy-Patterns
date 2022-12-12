const Calculadora = require('./Calculadora')
const Middleware = require('./Middleware')
const dades = require('./dades')

const calculadora = new Calculadora();

const novaCalculadora = new Middleware(calculadora)

const mwQuadrat = (data,next) => {
    const operand1 = Object.keys(data)[0];
    const operand2 = Object.keys(data)[1];

    console.log("El quadrat del primer operand és: "+data[operand1]**2)
    console.log("El quadrat del segon operand és: "+data[operand2]**2)

    data[operand1] = data[operand1]**2;
    data[operand2] = data[operand2]**2;
    
    next();
}
const mwCub = (data,next) => {
    const operand1 = Object.keys(data)[0];
    const operand2 = Object.keys(data)[1];
    
    console.log("El cub del primer operand és: "+data[operand1]**3)
    console.log("El cub del segon operand és: "+data[operand2]**3)

    data[operand1] = data[operand1]**3;
    data[operand2] = data[operand2]**3;
    next();
}

const mwDivisio = (data,next) => {
    const operand1 = Object.keys(data)[0];
    const operand2 = Object.keys(data)[1];
    
    console.log("La meitat del primer operand és: "+data[operand1]/2)
    console.log("La meitat del segon operand és: "+data[operand2]/2)

    data[operand1] = data[operand1]/2;
    data[operand2] = data[operand2]/2;
    next();
}

novaCalculadora.afegirMW(mwQuadrat);
novaCalculadora.afegirMW(mwCub);
novaCalculadora.afegirMW(mwDivisio);

console.log('La suma dels dos operands modificats és: '+novaCalculadora.suma(dades))
console.log('La resta dels dos operands modificats és: '+novaCalculadora.resta(dades))
console.log('La multiplicació dels dos operands modificats és: '+novaCalculadora.multiplica(dades))