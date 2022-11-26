class Middleware{
    constructor(calculadora){
        /* Digerir mètodes de calculadora. Ara bé, primer executen els MW i després fan el que han de fer. */
        
        this.middlewares = new Array;
    }

    afegirMW(funcio){
        /* Funció que s'afageix a la cua de middlewares que actuaran abans dels mètodes digerits */
    }

    executarMW(i){
        /* La funció digerida, en ser cridada, executa els MW i després fa el que fa normalment */
    }
}

module.exports = Middleware;