# Entrega 1

## Nivell 1

Cal tenir al mateix directori de l'script una carpeta anomanada "**inbox**" amb els fitxers que volguem invertir, i una carpeta anomenada "**outbox**" on hi guardarem els fitxers invertits.

Aleshores només cal cridar l'script amb `node exercici1.js` des d'un terminal.

## Nivell 2

Cal tenir en una carpeta el fitxer `index.js` i la carpeta `Classes` amb els 3 fitxers de Classes corresponents. Aleshores des d'un terminal, cal que executem el fitxer index.js amb l'ordre

    node index.js

### Consideracions

He interpretat 3 tipus de jocs diferents, per provar el tema d'actualitzar marcadors de formes diferents.

1. Les puntuacions són acumulatives, vas sumant punts. Per això un torneig d'escacs.
2. Les puntuació s'actualitza només si és superior a la puntuació que ja tenies. Per això un torneig de salt de perxa on el màxim és el resultat que val.
3. La puntuació s'actualitza sempre, només val l'últim resulat. Per això un cursa, on el resultat final és el que val. Notar que qui queda primer guanya 4 punts, qui queda últim en guanya 1, per interpretar correctament els marcadors.

Quan s'instancia un joc, s'instancia el marcador també, però sempre el mateix, que és l'objectiu d'aquest exercici.

He anat intercalant les competicions diferents a l'afegir i actualitzar punts per a comprovar que funcionen de forma independent però amb la mateixa classe marcador sense problemes.

Després de cada ronda, crido els marcadors actuals, però cada cop des d'una competició diferent, perquè quedi clar que totes les competicions fan servir la **mateixa** classe marcador.

Quan la Classe marcador espera `competicio` com a paràmetre, se n'espera el paràmetre `nom` de la Classe `Joc`.

En les classes hi ha ordres `console.log()` comentades que descriuen el procés d'inscripció o similars que he comentat per netejar una mica l'output final de l'exercici.

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