class Calculadora{
    constructor(){}

    suma(operands){
        var resultat=0;
        Object.keys(operands).forEach(clau => {
            resultat+=operands[clau];
        })
        return resultat;
    }
    resta(operands){
        var resultat=0;
        var i=true;
        Object.keys(operands).forEach(clau => {
            if(i){resultat = operands[clau]; i=false;}
            else{resultat-=operands[clau];}
        })
        return resultat;
    }
    multiplica(operands){
        var resultat=1;
        Object.keys(operands).forEach(clau => {
            resultat*=operands[clau];
        })
        return resultat;
    }
}

module.exports = Calculadora;