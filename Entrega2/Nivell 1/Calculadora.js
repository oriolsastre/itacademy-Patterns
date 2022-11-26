class Calculadora{
    constructor(){}

    suma(...args){
        return [...args].reduce((acc, num) => acc+num);
    }
    multiplica(...args){
        return [...args].reduce((acc, num) => acc*num);
    }
}

module.exports = Calculadora;