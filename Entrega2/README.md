# Entrega 1

## Nivell 1

## Nivell 2 - Decorator

Cal que tinguem en el mateix directori els fitxers:
- `currency_conversions.json`. És un fitxer on hi ha els valors de conversió entre monedes, sempre a Euros, que pot ser com el proporcionat aquí, però pot ser qualsevol fitxer que segueixi l'estrcutura: 1 sol objecte on cada element té com a clau un string de 7 caràcters consistents amb els codis ISO 4217 de la moneda en qüestió i el codi ISO-4217 de l'euro (='EUR') separats amb una barra baixa "_"; com a valor hi ha al factor de conversió, un nombre generalment decimal.

- `cataleg.json`. Un catàleg d'articles. Cada article està en un objecte, i necessita dos elements claus: Un element `preu` amb un valor numèric; un element `moneda` amb un string consistent amb el codi ISO-4217 ja esmentat, de la unitat monetària en qüestió; un element `categoria` que consisteix en un string. Es pot fer servir el proporcionat aquí que també conté un element `nom` i està limitat a 3 categories: Cuina, Menjador i Jardineria.

- `decorator.js` Hi ha la funció *decorator*.

- `index.js` on executem l'aplicació.

Per executar l'aplicació només cal obrir un terminal, anar al directori on tinguem aquests 4 fitxer i exectura l'ordre

    node index.js

# Consideracions

L'aplicació busca els articles al catàleg de la categoria que especifiquem i en retorna un objecte amb la suma dels preus per unitat monetària.

Podem triar la categoria modificant la variable `var categoria`.

Aleshores decorem la funció de tal manera que converteixi tots els preu en Euros, i cridem la nova funció i retorna un objecte amb la suma del preus dels articles de la categoria corresponent en euros, fent servir la conversió proporcionada al fitxer corresponent.


## Nivell 3
