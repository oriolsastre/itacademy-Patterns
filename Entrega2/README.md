# Entrega 2

Per tots els nivells val: tenir els fitxers al mateix directori i des d'un terminal situat a la carpeta del nivell donar l'ordre:

    node index.js

A continuació algunes consideracions específiques per a cada nivell.

## Nivell 1 - Middleware

Els fitxer necessaris són l'`index.js`, la classe `Calculadora.js`, la classe `Middleware.js` i un fitxer json amb un sol objecte on tindrem els operands que volem fer servir per les operacions. N'hi ha d'haver un mínim de dos. Si n'hi ha més, els middlewares només actuaran sobre els dos primers. El fitxer `dades.json` proporcionat ja és vàlid.


## Nivell 2 - Decorator

Els fitxer necessaris són:
- `currency_conversions.json`. És un fitxer on hi ha els valors de conversió entre monedes, sempre a Euros, que pot ser com el proporcionat aquí, però pot ser qualsevol fitxer que segueixi l'estrcutura: 1 sol objecte on cada element té com a clau un string de 7 caràcters consistents amb els codis ISO 4217 de la moneda en qüestió i el codi ISO-4217 de l'euro (='EUR') separats amb una barra baixa "_"; com a valor hi ha al factor de conversió, un nombre generalment decimal.

- `cataleg.json`. Un catàleg d'articles. Cada article està en un objecte, i necessita dos elements claus: Un element `preu` amb un valor numèric; un element `moneda` amb un string consistent amb el codi ISO-4217 ja esmentat, de la unitat monetària en qüestió; un element `categoria` que consisteix en un string. Es pot fer servir el proporcionat aquí que també conté un element `nom` i està limitat a 3 categories: Cuina, Menjador i Jardineria.

- `decorator.js` Hi ha la funció *decorator*.

- `index.js` on executem l'aplicació.

### Consideracions

El decordor mostra per consola el preu en Euros, però també afageix una propietat nova a l'objecte Article amb el preu calculat en Euros. 