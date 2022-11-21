const User = require('./User');
const Tema = require('./Tema');

var user1 = new User('Oriol');
var user2 = new User('Pere')

var tema1 = new Tema('Fenòmens paranormals');

tema1.subscriure(user1);
tema1.baixa(user2)
tema1.baixa(user1);
tema1.baixa(user1);