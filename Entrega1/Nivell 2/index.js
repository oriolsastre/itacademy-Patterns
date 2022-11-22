const Jugador = require("./Classes/Jugador");
const Joc = require("./Classes/Joc");


var jugador01 = new Jugador("Oriol");
var jugador02 = new Jugador("Magnus Carlsen");
var jugador03 = new Jugador("Anish Giri");
var jugador04 = new Jugador('Ian Nepomniachtchi')

escacs = new Joc("Escacs", 1);
cursa = new Joc("Cursa d'atletisme", 2);
perxa = new Joc("Salt de perxa", 3)

/* Es realitzen les inscripcions dels 4 jugadors a les 3 competicions. */
escacs.inscripcio(jugador01);
escacs.inscripcio(jugador02);
escacs.inscripcio(jugador01);   //Això mostrava un console.log que avisa que ja estava inscrit i per tant no s'inscriu de nou.
escacs.inscripcio(jugador03);
escacs.inscripcio(jugador04);
cursa.inscripcio(jugador01);
cursa.inscripcio(jugador02);
cursa.inscripcio(jugador03);
cursa.inscripcio(jugador04);
perxa.inscripcio(jugador01);
perxa.inscripcio(jugador02);
perxa.inscripcio(jugador03);
perxa.inscripcio(jugador04);


escacs.guanyador();             //Encara no hi ha guanyador.

// Es juga la 1a ronda d'escacs
escacs.duel(jugador01, jugador02, 1, 2)
escacs.duel(jugador03, jugador04, 1, 'X')


// Es juga la 1a volta de la cursa
cursa.novaPuntuacio(jugador01, 2)
cursa.novaPuntuacio(jugador02, 4)
cursa.novaPuntuacio(jugador03, 3)
cursa.novaPuntuacio(jugador04, 1)

// 1a ronda de salt de perxa
perxa.novaPuntuacio(jugador01, 3.75)
perxa.novaPuntuacio(jugador02, 2.27)
perxa.novaPuntuacio(jugador03, 3.74)
perxa.novaPuntuacio(jugador04, 2.10)

console.log("\nS'ha disputat la primera ronda dels jocs populars.")
escacs.marcadorsActuals();

// Es juga la 2a ronda d'escacs
escacs.duel(jugador01, jugador03, 1, 'X')
escacs.duel(jugador02, jugador04, 1, 1)

// Es juga la 2a volta de la cursa
cursa.novaPuntuacio(jugador01, 4)
cursa.novaPuntuacio(jugador02, 3)
cursa.novaPuntuacio(jugador03, 2)
cursa.novaPuntuacio(jugador04, 1)

// 2a ronda de salt de perxa
perxa.novaPuntuacio(jugador01, 3.81)
perxa.novaPuntuacio(jugador02, 2.11)
perxa.novaPuntuacio(jugador03, 3.80)
perxa.novaPuntuacio(jugador04, 2.17)

console.log("\nS'ha disputat la segona ronda dels jocs populars.")
cursa.marcadorsActuals();

// Es juga la 3a ronda d'escacs
escacs.duel(jugador01, jugador04, 1, 2)
escacs.duel(jugador02, jugador03, 1, 1)

// Es juga la 3a volta de cursa
cursa.novaPuntuacio(jugador01, 4)
cursa.novaPuntuacio(jugador02, 2)
cursa.novaPuntuacio(jugador03, 4)
cursa.novaPuntuacio(jugador04, 1)

// 3a ronda de salt de perxa
perxa.novaPuntuacio(jugador01, 3.79)
perxa.novaPuntuacio(jugador02, 2.19)
perxa.novaPuntuacio(jugador03, 3.80)
perxa.novaPuntuacio(jugador04, 2.05)

console.log("\nS'ha disputat la tercera ronda dels jocs populars.")
perxa.marcadorsActuals()

console.log("\n")

escacs.guanyador()
cursa.guanyador()
perxa.guanyador()