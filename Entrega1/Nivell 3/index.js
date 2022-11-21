const User = require('./User');
const Tema = require('./Tema');

var user1 = new User('Clara');
var user2 = new User('Pere');
var user3 = new User('Cristina');

var tema1 = new Tema('Fenòmens paranormals');
var tema2 = new Tema('Jardineria');

tema1.subscriure(user1);
tema1.subscriure(user2);
tema2.subscriure(user3);

tema1.afegirMissatge(user1, "Aquesa nit passada vaig anar pel torrent del Llobet i vaig veure els Estàneixes. Són reals!");
//si un usuari no subscrit intenta enviar un missatge a un tema que no és el seu.
tema1.afegirMissatge(user3, "Algú sap què fer si les fulles del ficus es tornen grogues?");
tema2.afegirMissatge(user3, "Ai, m'havia equivocat de tema. Ara sí. Algú sap què fer si les fulles del ficus es tornen grogues?");
user2.enviarMissatge(tema1, "Quina por! N'has pogut fer alguna fotografia?");