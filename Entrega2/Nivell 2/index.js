const {toEur} = require('./decorator')
const Article = require('./Classes/Article')
const cataleg = require('./cataleg.json')

var catalegArray = new Array();
for([id, article] of Object.entries(cataleg)){
    catalegArray.push(new Article(article.nom, article.categoria, article.moneda, article.preu))
}





/* D'aquí al final el decorador de la funció com ho havia entregat inicialment */
let calculProductes = (cataleg, categoria) => {
    var preus = new Object();
    for([id, article] of Object.entries(cataleg)){
        if(article.categoria == categoria){
            if(typeof preus[article.moneda] == 'undefined'){preus[article.moneda] = article.preu;}
            else{preus[article.moneda] += article.preu;}
        }
    }
    //Aquestes dues línies de codi serien per si vols retornar només un número, si només hi ha una únia unitat monetària.
    /* if(Object.keys(preus).length == 1){return Object.values(preus)[0]}
    else{return preus} */
    return preus;
}
var categoria = "Cuina"

console.log(`La suma dels preus dels productes de la categoria de ${categoria} és de:`)
console.log(calculProductes(cataleg, categoria))
//decorem la funció a EUR
calculProductesEur = toEur(calculProductes);
console.log(`La suma dels preus, en EUR, dels productes de la categoria de ${categoria} és de:`)
console.log(calculProductesEur(cataleg, categoria));
