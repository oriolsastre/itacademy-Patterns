const Marcador = require("./marcador");

class Joc {
    #marcador;
    
    constructor(nom,tipusPuntuacio){
        if(typeof tipusPuntuacio != 'number' || tipusPuntuacio < 1 || tipusPuntuacio > 3){
            throw new Error("Tipus de puntuació no vàlid.")
        }
        this.nom = nom;
        this.tipusPuntuacio = tipusPuntuacio;
        this.#marcador = new Marcador();
        this.participant = new Array();

        this.#marcador.iniciarCompeticio(nom);
    }

    inscripcio(jugador){
        if(typeof this.participant[jugador.id] != 'undefined'){console.log("Aquest jugador ja està inscrit");}
        else{
            this.participant[jugador.id] = jugador.nom;
            console.log( `En/Na ${jugador.nom} s'ha inscrit correctament al torneig de ${this.nom}`);
        }
    }
}

module.exports = Joc;