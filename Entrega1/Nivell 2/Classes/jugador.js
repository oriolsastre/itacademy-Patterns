let i = 0;
class Jugador {
    constructor(nom){
        this.nom = nom;
        this.id = i;
        i++;    //genero una id diferent a cada jugador.
    }
}

module.exports = Jugador;