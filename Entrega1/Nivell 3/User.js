let i = 1;
class Usuaria {
    constructor(nom){
        this.nom = nom;
        this.id = i;
        i++;
        this.subscripcio = new Array();
    }
}

module.exports = Usuaria;