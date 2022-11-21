# Entrega 1

## Nivell 1

Cal tenir al mateix directori de l'script una carpeta anomanada "**inbox**" amb els fitxers que volguem invertir, i una carpeta anomenada "**outbox**" on hi guardarem els fitxers invertits.

Aleshores només cal cridar l'script amb `node exercici1.js` des d'un terminal.

## Nivell 3

Cal tenir els 3 fitxers al mateix directori. Aleshores, des d'un terminal executem `node index.js`

### Consideracions

Tenim els usuaris, i els temes. Un usuari es subscriu a un tema amb:

    tema.subscriure(usuari)

Un usuari pot enviar missatges a un tema subscrit. Es pot fer de dues maneres. O bé afegim un missatge a un tema de la següent manera:

    tema.enviarMissatge(usuari, missatge)

O bé, un usuari pot enviar un missatge al tema:

    usuari.enviarMissatge(tema, missatge)

En qualsevol cas, el resultat serà el mateix. Es comprovarà que aquell usuari estigui subscrit al tema, de ser així és publicarà el missatge al tema, i tots els usuaris subscrits enviaran una confirmació que han rebut el missatge.

Si l'usuari intenta enviar un missatge a un tema al qual no està subscrit, de qualsevol de les dues maneres especificades, s'emet una comunicació que avisa que aquell usuari no està subscrit al tema.

### Altres

Un usuari es pot donar de baixa d'un tema amb:

    tema.baixa(usuari)

Per si no volgués rebre més notificacions sobre el tema. Això sí, queda registrat que en algun moment va estar subscrit.