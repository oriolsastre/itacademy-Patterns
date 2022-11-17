import { array } from "yargs";

//variable global
let instancia;

class Marcador {
    constructor(){
        //amb la classe ja creada, instancia té valor i per tant no es pot tornar a crear perquè llanço un error
        if(instancia){
            throw new Error("La classe no és pot tornar a generar.")
        }
        //creem i donem valor a la variable instancia
        instancia = this;

        this.ranking = array();
    }
}

//creem la classe marcador i serà la que exportarem.
let instanciaMarcador = Object.freeze(new Marcador());

export default instanciaMarcador;