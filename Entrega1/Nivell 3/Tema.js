let i = 1;
class Tema {
    constructor(nom){
        this.nom = nom;
        this.id = i;
        i++;
        this.subscriptor = new Array();
    }

    subscriure(user){
        //així es poden controlar anteriors subscripcions ara ja no actives.
        this.subscriptor[user.id]={nom: user.nom, subscrit: true};
        user.subscripcio[this.id]={nom: this.nom, subscrit: true};
        console.log(`En/Na ${user.nom} s'ha subscrit a ${this.nom}`)
    }

    baixa(user){
        if(this.subscriptor[user.id] == undefined){
            console.log('Aquest usuari no estava subscrit al nostre tema.')
        }
        else{
            if(this.subscriptor[user.id].subscrit == false){
                console.log('Aquest usuari ja s\'havia donat de baixa');
            }else{
                this.subscriptor[user.id].subscrit = false;
                user.subscripcio[this.id].subscrit = false;
                console.log(`S'ha donat de baixa.`)
            }
        }
    }
}

module.exports = Tema;