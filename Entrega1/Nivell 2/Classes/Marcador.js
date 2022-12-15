class Marcador {
    constructor(){
        //Marcador.insatance és el marcador que hem creat primer. Si el volem tornar a crear, retornem el que ja tenim ja que no volem duplicats d'aquesta classe.
        if(Marcador.instance instanceof Marcador){
            return Marcador.instance;
        }

        this.Competicio = new Object();
        //Per evitar que pugui ser modificat
        Object.freeze(this);

        //Valor que definim a la primera creació que ens impedirà crear duplicats d'aquesta classe.
        Marcador.instance = this;
    }

    iniciarCompeticio(competicio){
        this.Competicio[competicio] = new Array();
        console.log(`S'ha iniciat la competició de ${competicio}`);
    }

    #competicioExisteix(competicio){
        if(this.Competicio[competicio] instanceof Array){return true;}
        else{return false;}
    }

    inscripcio(competicio, jugador){
        if(this.#competicioExisteix(competicio)){
            this.Competicio[competicio][jugador.id] = {jugador: jugador, puntuacio: 0};
        }
    }
    
    sumarPunts(competicio, jugador, puntuacio){
        //Naturalment, amb puntuacio<0 restem punts.
        if(this.#competicioExisteix(competicio)){
            //en principi, ja ens assegurem a Joc que el jugador està inscrit al joc corresponent.
            this.Competicio[competicio][jugador.id].puntuacio += puntuacio;
            //console.log(`En ${jugador.nom} ara té ${this.Competicio[competicio][jugador.id].puntuacio} punts.`)
        }
    }

    actualitzarPunts(competicio, jugador, puntuacio, max=false){
        //si max=true, només s'actualitzen els punts en cas de ser superior a la puntuació existens.
        if(this.#competicioExisteix(competicio)){
            const puntuacioActual = this.Competicio[competicio][jugador.id].puntuacio;
            if((!max) || (max && puntuacio>puntuacioActual)){
                this.Competicio[competicio][jugador.id].puntuacio = puntuacio;
            }
        }
    }
    
    maximaPuntuacio(competicio){
        //retorna l'id del jugador amb la màxima puntuacio i un element d'empat per si fos el cas.
        if(this.#competicioExisteix(competicio)){
            var tempMax = 0;
            var idGuanyador = 0;
            var empat = false;
            this.Competicio[competicio].forEach(jugador => {
                if(jugador.puntuacio >= tempMax){
                    if(jugador.puntuacio == tempMax){empat = true;}
                    else if(jugador.puntuacio > tempMax){empat = false;}
                    tempMax = jugador.puntuacio; idGuanyador = jugador.jugador.id;
                    
                }
            });
            return {id: idGuanyador, puntuacio: tempMax, empat: empat};
        }
    }

    jugadorXPuntuacio(competicio, puntuacio){
        //cerca jugadors per competicio amb una puntuacio determinada. O necessito per si el guanyador empata amb algú.
        if(this.#competicioExisteix(competicio)){
            var jugadorXpuntuacio = new Array ();
            this.Competicio[competicio].forEach( jugador => {
                if(jugador.puntuacio == puntuacio){jugadorXpuntuacio.push(jugador)}
            })
            return jugadorXpuntuacio;
        }
    }
    
    ranking(competicio){
        console.log(`El marcador de la competicio de ${competicio} ara mateix és:`)
        if(this.#competicioExisteix(competicio)){
            this.Competicio[competicio].forEach(jugador => {
                console.log(`- ${jugador.jugador.nom} amb ${jugador.puntuacio} punts.`)
            })
        }
    }

    rankingTotal(){
        console.log(`Marcadors actuals de totes les competicions:`)
        for(const competicio in this.Competicio){
            this.ranking(competicio)
        }
    }
}

module.exports = Marcador;
