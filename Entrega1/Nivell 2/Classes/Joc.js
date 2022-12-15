const Marcador = require("./Marcador");

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

    #estaInscrit(jugador){
        if(typeof this.participant[jugador.id] != 'undefined' && this.participant[jugador.id] == jugador){return true;}
        else{return false;}
    }

    inscripcio(jugador){
        if(this.#estaInscrit(jugador)){/*console.log("Aquest jugador ja està inscrit");*/}
        else{
            this.participant[jugador.id] = jugador;
            this.#marcador.inscripcio(this.nom, jugador);
            //console.log( `En/Na ${this.participant[jugador.id].nom} s'ha inscrit correctament al torneig de ${this.nom}`);
        }
    }

    duel(jugador1, jugador2, puntuacio, resultat){
        if(!(this.#estaInscrit(jugador1) || this.#estaInscrit(jugador2))){throw new Error("Algun dels dos jugadors no està inscit a aquesta competició.")}
        if(isNaN(puntuacio)){throw new Error('Puntuació numèrica!')}
        if(resultat === 1){this.#marcador.sumarPunts(this.nom, jugador1, puntuacio)}
        else if(resultat === 2){this.#marcador.sumarPunts(this.nom, jugador2, puntuacio)}
        else if(resultat === 'X'){
            this.#marcador.sumarPunts(this.nom, jugador1, (puntuacio/2));
            this.#marcador.sumarPunts(this.nom, jugador2, (puntuacio/2));
        }
    }

    novaPuntuacio(jugador, puntuacio){
        if(this.#estaInscrit(jugador)){
            if(this.tipusPuntuacio === 2){this.#marcador.actualitzarPunts(this.nom, jugador, puntuacio)}
            else if(this.tipusPuntuacio === 3){this.#marcador.actualitzarPunts(this.nom, jugador, puntuacio, true)}
        }else{throw new Error('Aquest jugador no està inscrit en aquesta competició.')}
    }

    guanyador(){
        let guanyador = this.#marcador.maximaPuntuacio(this.nom)
        if(guanyador.puntuacio == 0){console.log(`La competició de ${this.nom} encara no ha començat`);}
        else{
            if(guanyador.empat){
                let exaequo = this.#marcador.jugadorXPuntuacio(this.nom, guanyador.puntuacio);
                console.log(`Els guanyadors ex-aquo de la competicio de ${this.nom} han sigut:`)
                exaequo.forEach(empatador => {
                    console.log(`- En/na ${empatador.jugador.nom}`);
                })
                console.log(`Amb ${guanyador.puntuacio} punts cadascú`);
            }else{
                console.log(`El guanyador de la competició de ${this.nom} és en/na ${this.participant[guanyador.id].nom} amb ${guanyador.puntuacio} punts. Enhorabona!`)
            }
        }
    }

    marcadorsActuals(aquesta = false){
        //amb true mostrem només el marcador d'aquesta competicio, sinó tots els marcadors de totes les competicions.
        if(aquesta){this.#marcador.ranking(this.nom);}
        else{this.#marcador.rankingTotal()}
    }
}

module.exports = Joc;
