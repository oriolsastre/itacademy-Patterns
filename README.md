# SPRINT 3 PATTERNS
Sprint 3 de l'IT-Academy, patrons.

## Guia explicada a classe

### Observer

Llibreria _events_ per a fer listeners.
- .on          on("ok", callback), aquest escolta si algú emet ok.
- .emit     emets un missatge ("ok","contingut)
    class Tema
    class User

    App -> new Tema(topic1), new Tema(topicN) etc. idem amb users.

    topic1.subscribe(user1)
    topic1.write(ale, "no li agrade")
    ale.write(topic, "message")

comprovar que un user no pugui escriure a un tema al qual no està subscrit

els missatges
    1. He escrit un missatge a aquest tema
    N. Sóc el user N subscrit a aquest tema i he rebut el missatge de tal persona.


### Decorator

Una funció en un altre arxiu, on l'importem a l'app. Tenim uns productes amb nom i preu, i quan executo decorator sobre l'objecte, els objectes han de tenir una propietat més, és a dir, hem decorat l'objecte.

### Pub-sub

RabbitMQ. L'exemple de la seva documentació.

### Singleton

Classe joc l'haig de fer. App.js no hauria d'accedir al Marcador. Només el joc. Un marcador per tots els jocs.

Fer 3 jocs, un acumulatiu, l'altre de màxima puntuació i l'altre de l'última puntuació obtinguda.

El mètode de puntuació i guanyador, és un mètode del joc.


### Middleware

#### Versió 1

Són funciosn que s'inserten a l'execucií d'una funció. I s'executen abans que la funcio.
Classe Middlewares Functionmanager MiddlewareManager, classe Calculador, on sumem multiplicar restem.

App.js
calc = new Calculadora.
data = require(data.json)

*** app = new Middleware(calc) --> Digereix els mètodes del a claculador, de tal manera que la classe app, té els mètodes de calculadora, però no són iguals, sinó que fan més coses entremig, fa primer els middlewares. La calculadora ja no l'haurem de fer servir

app.addMW((data,next)=>{fa coses i al final next.})
app.addMW((data,next)=>{fa coses i al final next.})
app.addMW((data,next)=>{fa coses i al final next.})

Un cop afegits els middlewares.

app.suma(data), i farà els diversos middlewares fins arribar al resultat final.

*** és la part important. Diuen que com l'exemple, però cal entendre-ho bé.

Els valors que guardem són el req de express.

----------

calc = new Calculadora.
data = require(data.json)
App = newMW(), no cal que digereixi.

app.addMW(idem com abans)

Ara bé, no ha digerit els mètodes. Li hem de dir que cal que executi al final.
app.execute(calc.suma, nums), no hem posat parèntesi ja que no cridem sinó que definim. És com afegir-li un middleware final.