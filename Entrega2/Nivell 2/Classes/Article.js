class Article {
    constructor(nom, categoria, moneda, preu){
        this.nom = nom;
        this.categoria = categoria;
        this.moneda = moneda;
        this.preu = preu;
    }

    mostraPreu(){
        return this.preu;
    }
}

module.exports = Article;