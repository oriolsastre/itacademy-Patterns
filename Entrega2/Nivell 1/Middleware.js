class Middleware{
    constructor(calculadora){
        this.middlewares = new Array;
        this.dades = null;

        Object.getOwnPropertyNames(Object.getPrototypeOf(calculadora)).forEach(nomMetode => {
            if(nomMetode !== 'constructor'){
                this.digerirFuncio(calculadora[nomMetode])
            }
        })

    }

    afegirMW(funcio){
        /* Funció que s'afageix a la cua de middlewares que actuaran abans dels mètodes digerits */
        this.middlewares.push(funcio);
    }

    executarMW(index = 0){
        /* La funció digerida, en ser cridada, executa els MW i després fa el que fa normalment */
        /* El Middleware fa servir les dades emmagatzemades a la classe, i posa com a next el següent middleware a l'array */
        /* L'últim middleware criadaria un index de l'array no definit, però l'ultim middleware no ha d'invocar la funcio next() */
        this.middlewares[index].call(this, this.dades,() => this.executarMW(index+1))
    }

    digerirFuncio(funcio){
         /* Digerir mètodes de calculadora. Ara bé, primer executen els MW i després fan el que han de fer. */
        this[funcio.name] = (...args) => {
            this.dades = args[0];
            this.executarMW();

            //return funcio(...args);   //valors sense canviar
            return funcio(this.dades);  //valors canviats pels middlewares
        }
    }
}

module.exports = Middleware;