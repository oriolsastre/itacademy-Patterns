const dadesMonetaries = require('./currency_conversions.json');

let convertirMoneda = (valor, monEntrada, monSortida = "EUR") => {
    if(monEntrada == monSortida){return valor;}
    else if(monEntrada == "EUR" || monSortida == "EUR"){   
        if(monEntrada == "EUR"){conversio = `${monSortida}_${monEntrada}`; invers=-1;}
        else if(monSortida == "EUR"){conversio = `${monEntrada}_${monSortida}`; invers=1;}
        const factor = dadesMonetaries[conversio];
        //Arrodonit a 2 decimals
        return Math.round(valor*(Math.pow(factor,invers)*100))/100;

    }else{
        if(dadesMonetaries[`${monEntrada}_EUR`] == undefined || dadesMonetaries[`${monSortida}_EUR`] == undefined){
            throw new Error('Moneda no reconeguda');
        }
        const foraEuro = convertirMoneda(valor, monEntrada, "EUR");
        return convertirMoneda(foraEuro,"EUR",monSortida);
    }
}

const toEur = fn => {
    return (...params) => {
        var arguments = Array.from(params);
        const errorCataleg = new Error("Catàleg incorrecte, no es pot llegir.")
        if(typeof arguments[0] != 'object'){throw errorCataleg;}
        var catalegEur = arguments[0];
        for([id, article] of Object.entries(catalegEur)){
            let nouValor = convertirMoneda(article.preu,article.moneda,"EUR");
            article.preu = nouValor;
            article.moneda = "EUR"
        }

        return fn(catalegEur, arguments[1])
    }
} 



const requireInegers = (n,fn) => {
    //els primers n paràmetres han de ser numeros
    return (...params) => {
        var param = Array.from(params);
        for(i=0;i<n;i++){
            if(isNaN(param[i])){throw new TypeError(`Els primers ${n} paràmetres de la funció han de ser nombres`);}
        }
        return fn(...params);
    }
}

let convertirMonedaInt = requireInegers(1,convertirMoneda);

module.exports = {convertirMoneda, convertirMonedaInt, toEur};