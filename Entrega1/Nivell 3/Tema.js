const EventEmitter = require('events');

let i = 1;
class Tema {
    constructor(nom){
        this.nom = nom;
        this.id = i;
        i++;
        this.subscriptor = new Array();
        this.events = new EventEmitter();
        this.events.on('missatge', (arg1,arg2) => {
            console.log(`En/na ${arg2} ha publicat el següent missatge al tema ${this.nom}: ${arg1}`);
        })
        this.events.on('noSubscrit', () => {
            console.log('Només poden enviar missatge al tema aquells usuaris subscrits.')
        })
        this.events.on('subscrit', (arg1) => {
            console.log(`En/Na ${arg1} s'ha subscrit a ${this.nom}`)
        })
    }

    subscriure(user){
        //així es poden controlar anteriors subscripcions ara ja no actives.
        this.subscriptor[user.id]={usuari: user, subscrit: true};
        user.subscripcio[this.id]={tema: this, subscrit: true};
        this.events.emit('subscrit', user.nom)
    }

    #estaSubscrit(user){
        //comprova si un usuari està subscrit a un tema.
        if(this.subscriptor[user.id] == undefined){return false;}
        else {
            if(this.subscriptor[user.id].subscrit){return true;}
            else{return false};
        }
    }   

    baixa(user){
        if(!this.estaSubscrit(user)){
            console.log('Aquest usuari no estava subscrit al nostre tema.')
        }
        else{
            this.subscriptor[user.id].subscrit = false;
            user.subscripcio[this.id].subscrit = false;
            console.log(`S'ha donat de baixa.`)
        }
    }

    afegirMissatge(user, missatge){
        if(this.estaSubscrit(user)){
            this.events.emit('missatge', missatge, user.nom);
            this.subscriptor.forEach(userSubscrit => {
                userSubscrit.usuari.missatgeRebut.emit('missatge', this.nom);
            })
        }else{
            this.events.emit('noSubscrit');
        }
    }
}

module.exports = Tema;