class Middleware{
    constructor(calculadora){
        this.middlewares = new Array;
        this.dades = {};

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
        /* L'últim MW cridaria un element no existent de l'array. Per això l'if inicial. Al no complir-se la condició acabem els MWs i retornem la funció inicial. */
        if(index<this.middlewares.length){   
            this.middlewares[index].call(this, this.dades,() => this.executarMW(index+1))
        }
    }

    digerirFuncio(funcio){
         /* Digerir mètodes de calculadora. Ara bé, primer executen els MW i després fan el que han de fer. */
        this[funcio.name] = (args) => {
            this.dades = {...args};
            this.executarMW();

            //return funcio(...args);   //valors sense canviar
            return funcio(this.dades);  //valors canviats pels middlewares
        }
    }
}

module.exports = Middleware;