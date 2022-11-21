const { EventEmitter } = require('events');
let i = 1;
class Usuaria {
    constructor(nom){
        this.nom = nom;
        this.id = i;
        i++;
        this.subscripcio = new Array();
        this.missatgeRebut = new EventEmitter();
        this.missatgeRebut.on('missatge', (arg1) => {
            console.log(`En/na ${this.nom} ha rebut el missatge publicat al tema ${arg1}`);
        })
    }
    /* estaSubscrit(tema){
        //comprova si un usuari està subscrit a un tema.
        if(this.subscripcio[tema.id] == undefined){return false;}
        else {
            if(this.subscripcio[tema.id].subscrit){return true;}
            else{return false};
        }
    } */ 

    enviarMissatge(tema, missatge){
        //la funció a tema ja comprovorà si està subcrit.
        tema.afegirMissatge(this, missatge)
    }
}

module.exports = Usuaria;