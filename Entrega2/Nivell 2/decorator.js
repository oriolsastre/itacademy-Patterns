const dadesMonetaries = require('./currency_conversions.json');

function convertirMoneda(valor, monEntrada, monSortida){
    if(monEntrada == "EUR" || monSortida == "EUR"){   
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

module.exports = convertirMoneda;