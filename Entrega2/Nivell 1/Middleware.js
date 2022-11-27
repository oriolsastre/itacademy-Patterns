class Middleware{
    constructor(calculadora){
        this.middlewares = new Array;
        this.dades = null;

        Object.getOwnPropertyNames(Object.getPrototypeOf(calculadora)).forEach(nomMetode => {
            if(nomMetode != 'constructor'){
                this.digerirFuncio(calculadora[nomMetode])
            }
        })

    }

    afegirMW(funcio){
        /* Funció que s'afageix a la cua de middlewares que actuaran abans dels mètodes digerits */
        this.middlewares.push(funcio);
    }

    executarMW(index){
        /* La funció digerida, en ser cridada, executa els MW i després fa el que fa normalment */
        this.middlewares[index](this.dades,this.middlewares[index++])
    }

    digerirFuncio(funcio){
         /* Digerir mètodes de calculadora. Ara bé, primer executen els MW i després fan el que han de fer. */
        this[funcio.name] = (...args) => {
            this.dades = args[0];
            this.executarMW(0);

            return funcio(...args);
        }
    }
}

module.exports = Middleware;