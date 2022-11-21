const Jugador = require("./Classes/jugador");
const Joc = require("./Classes/joc");


var jugador01 = new Jugador("Oriol");
var jugador02 = new Jugador("Magnus Carlsen");
var jugador03 = new Jugador("Anish Giri");
var jugador04 = new Jugador('Ian Nepomniachtchi')

escacs = new Joc("Escacs", 1);
dards = new Joc("Dards", 2);

escacs.inscripcio(jugador01);
escacs.inscripcio(jugador02);
escacs.inscripcio(jugador01);
escacs.inscripcio(jugador03);
escacs.inscripcio(jugador04);