const Article = require('./Article')
const {convertirMoneda} = require('../decorator')


class ArticleEUR extends Article {
    constructor(article){
        super(article.nom, article.categoria, article.moneda, article.preu);
        this.preuEUR = convertirMoneda(article.preu, article.moneda)
    }
}

module.exports = ArticleEUR;