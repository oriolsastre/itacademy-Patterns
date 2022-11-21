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

    iniciarCompeticio(nom){
        this.Competicio[nom] = new Array();
        console.log(`S'ha iniciat la competició de ${nom}`);
    }

    maximaPuntuacio(){
        if(this.ranking.length === 0){throw new Error("No hi ha puntuacions.")}
        else{
            var tempMax = {nom: '', puntuacio: 0}
            this.ranking.forEach(jugador => {
                if (jugador.puntuacio>tempMax.puntuacio){
                    tempMax.nom = jugador.nom;
                    tempMax.puntuacio = jugador.puntuacio;
                }
            })
            return tempMax;
    }
    }

    novaPuntuacio(jugador,puntuacio,max=false){
        if(!(jugador.id != 'undefined' && jugador.nom != 'undefined') || typeof puntuacio != 'number'){
            throw new Error("Jugador o puntuació invàlida");
        }
        if(typeof this.ranking[jugador.id] == 'undefined'){
            //si no té cap puntuació anterior, li afegim la puntuacio nova.
            this.ranking[jugador.id] = {nom: jugador.nom, puntuacio: puntuacio}
        }else if((max && this.ranking[jugador.id].puntuacio<puntuacio) || !max){
            //Depèn del joc, potser canviem la puntuació sí o sí, o potser només la canviem si ha millorat.
            //Aquí valorem si o bé el valor max es true i només canviem si la nova puntuació és millor a l'anteior; o bé el valor max és fals i canviem la puntuació sí o sí.
            this.ranking[jugador.id].puntuacio=puntuacio;
        }
    }
}

module.exports = Marcador;