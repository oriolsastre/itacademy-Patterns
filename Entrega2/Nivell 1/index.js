const Calculadora = require('./Calculadora')
const Middleware = require('./Middleware')
const dades = require('./dades')

const calculadora = new Calculadora();

const novaCalculadora = new Middleware(calculadora)

const mwQuadrat = (data,next) => {
    const operand1 = Object.keys(data)[0];
    const operand2 = Object.keys(data)[1];

    /*
    data[operand1] = data[operand1]*data[operand1];
    data[operand2] = data[operand2]*data[operand2];
    */
    console.log("El quadrat del primer operand és: "+data[operand1]*data[operand1])
    console.log("El quadrat del segon operand és: "+data[operand2]*data[operand2])
    //next();
}
const mwCub = (data,next) => {
    const operand1 = Object.keys(data)[0];
    const operand2 = Object.keys(data)[1];
    console.log("El quadrat del primer operand és: "+data[operand1]**3)
    console.log("El quadrat del segon operand és: "+data[operand2]**3)
    //next();
}

novaCalculadora.afegirMW(mwQuadrat);
novaCalculadora.afegirMW(mwCub);

console.log(novaCalculadora.multiplica(dades))

