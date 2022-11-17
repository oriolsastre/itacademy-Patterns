const Marcador = require("./marcador")
const Jugador = require("./jugador")

var elMarcador = new Marcador();
var elMarcador2 = new Marcador();

var player1 = new Jugador('Ricard');
var player2 = new Jugador('Anna');

console.log(player1.id);
console.log(player2.id);

elMarcador.novaPuntuacio(player1,15)
elMarcador2.novaPuntuacio(player2,35)

try{
    var guanyador = elMarcador.maximaPuntuacio();
    console.log(guanyador);
}catch(e){console.log(e.message)}