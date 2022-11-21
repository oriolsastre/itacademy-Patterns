const dadesMonetaries = require('./currency_conversions.json');

let convertirMoneda = (valor, monEntrada, monSortida = "EUR") => {
    if(monEntrada == monSortida){return valor;}
    else if(monEntrada == "EUR" || monSortida == "EUR"){   
        if(monEntrada == "EUR"){conversio = `${monSortida}_${monEntrada}`; invers=-1;}
        else if(monSortida == "EUR"){conversio = `${monEntrada}_${monSortida}`; invers=1;}
        const factor = dadesMonetaries[conversio];
        return valor*(Math.pow(factor,invers));

    }else{
        if(dadesMonetaries[`${monEntrada}_EUR`] == undefined || dadesMonetaries[`${monSortida}_EUR`] == undefined){
            throw new Error('Moneda no reconeguda');
        }
        const foraEuro = convertirMoneda(valor, monEntrada, "EUR");
        return convertirMoneda(foraEuro,"EUR",monSortida);
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

module.exports = {convertirMoneda, convertirMonedaInt};