/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto questo blocco.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- Workflow consigliato: prima costruisci la Versione Base in HTML/CSS,
  poi torna qui per la Versione Intermedia (generazione griglia da array di prodotti)
  e per la Versione Avanzata (filtri, ordinamento, carrello dinamico, localStorage).
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato in settimana.
*/


/* VERSIONE INTERMEDIA — array prodotti
   Crea l'array "prodotti" con almeno 12 oggetti.
   Ogni oggetto: nome, categoria, prezzo, rating (1-5), immagine, disponibile.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const prodotti =[
   {
      nome: 'quaderno' ,
      categoria: 'scolastica' ,
      costo: 1.99 ,
      rating: 4 ,
      img: 'quaderno'.jpg ,
      disponibile: true
   },
   {
      nome: 'diario',
      categoria: 'scolastica',
      costo: 1.13,
      rating: 3.6,
      img: 'diario'.jpg,
      disponibile: false
   },
   {
      nome: 'matita',
      categoria: 'scolastica',
      costo: 0.37,
      rating: 4.4,
      img: 'matita'.jpg,
      disponibile: true
   },
   {
      nome: 'penna',
      categoria: 'scolastica',
      costo: 0.43,
      rating: 4.2,
      img: 'penna'.jpg,
      disponibile: true
   },
   {
      nome: 'pane',
      categoria: 'culinaria',
      costo: 1.10,
      rating: 3.7,
      img: 'pane'.jpg,
      disponibile: true
   },
   {
      nome: 'insalata',
      categoria: 'culinaria',
      costo: 0.67,
      rating: 2.9,
      img: 'insalata'.jpg,
      disponibile: false
   },
   {
      nome: 'zucchero',
      categoria: 'culinaria',
      costo: 2.27,
      rating: 1.6,
      img: 'zucchero'.jpg,
      disponibile: false
   },
   {
      nome: 'gomma',
      categoria: 'scolastica',
      costo: 0.70,
      rating: 3.6,
      img: 'gomma'.jpg,
      disponibile: true
   },
   {
      nome: 'calcolatrice',
      categoria: 'scolastica',
      costo: 7.71,
      rating: 4.2,
      img: 'calcolatrice'.jpg,
      disponibile: false
   },
   {
      nome: 'gelato',
      categoria: 'culinaria',
      costo: 9.99,
      rating: 5,
      img: 'gelato'.jpg,
      disponibile: true
   },
   {
      nome: 'panelle',
      categoria: 'culinaria',
      costo: 5.30,
      rating: 4.1,
      img: 'panelle'.jpg,
      disponibile: false
   },
   {
      nome: 'zaino',
      categoria: 'scolastica',
      costo: 6.73,
      rating: 4.4,
      img: 'zaino'.jpg,
      disponibile: true
   }
]


/* VERSIONE INTERMEDIA — formattaprezzo(prezzo)
   Funzione che ritorna una stringa tipo "€ 19,99".
   Esempio in console.log: Monitor: € 150,00
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function formattaPrezzo(prezzo) {
 return prezzo.nome + ' €' + prezzo.costo;
}
console.log(formattaPrezzo(prodotti[0]));
console.log(formattaPrezzo(prodotti[1]));
console.log(formattaPrezzo(prodotti[2]));
console.log(formattaPrezzo(prodotti[3]));
console.log(formattaPrezzo(prodotti[4]));
console.log(formattaPrezzo(prodotti[5]));
console.log(formattaPrezzo(prodotti[6]));
console.log(formattaPrezzo(prodotti[7]));
console.log(formattaPrezzo(prodotti[8]));
console.log(formattaPrezzo(prodotti[9]));
console.log(formattaPrezzo(prodotti[10]));
console.log(formattaPrezzo(prodotti[11]));
/* VERSIONE INTERMEDIA — stelline(rating)
   Funzione che ritorna una stringa di stelline piene/vuote.
   Esempio: rating 3 → "★★★☆☆"
   Esempio in console.log: Monitor: rating 3 → "★★★☆☆"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function stelline (s){
   if (s === 0){
      return '☆☆☆☆☆';
   }
   if (s >= 1 && s < 1.5){
      return '★☆☆☆☆';
   }
   if (s >= 1.5 && s < 2.5){
      return '★★☆☆☆';
   }
   if (s >= 2.5 && s < 3.5){
      return '★★★☆☆';
   }
   if (s >= 3.5 && s < 4.5){
      return '★★★★☆';
   }
   if (s >= 4.5){
      return '★★★★★';
   }
}
console.log(stelline(prodotti[0].rating));
console.log(stelline(prodotti[1].rating));
console.log(stelline(prodotti[2].rating));
console.log(stelline(prodotti[3].rating));
console.log(stelline(prodotti[4].rating));
console.log(stelline(prodotti[5].rating));
console.log(stelline(prodotti[6].rating));
console.log(stelline(prodotti[7].rating));
console.log(stelline(prodotti[8].rating));
console.log(stelline(prodotti[9].rating));
console.log(stelline(prodotti[10].rating));
console.log(stelline(prodotti[11].rating));

/* VERSIONE INTERMEDIA — Filtro per categoria
   Funzione che riceve il parametro categoria e filtra l'array prodotti mostrando solo i prodotti della categoria ricevuta
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function filtraPerCategoria(categoria) {
    const risultato = [];
    for (let i = 0; i < prodotti.length; i++) {
        if (prodotti[i].categoria === categoria) {
            risultato.push(prodotti[i]);
        }
    }
    return risultato;
}

console.log(filtraPerCategoria('scolastica'));
console.log(filtraPerCategoria('culinaria'));

/* VERSIONE INTERMEDIA — Filtro disponibilità e rating
   Funzione che genera un array filtrato dall'array prodotti, mostrando soltanto i prodotti disponibili con rating >= 3
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function filtraDisponibiliPerRating() {
    const risultato = [];
    for (let i = 0; i < prodotti.length; i++) {
        if (prodotti[i].disponibile === true && prodotti[i].rating >= 3) {
            risultato.push(prodotti[i]);
        }
    }
    return risultato;
}
console.log(filtraDisponibiliPerRating());
/* --------------------------------------------------------------

/* VERSIONE AVANZATA — renderProdotti(lista)
   Funzione che, dato un array di prodotti, genera la griglia nel DOM.
   Niente HTML hard-coded per i prodotti: tutto generato dal JavaScript.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function renderProdotti(lista) {
    const griglia = document.getElementById("grigliaProdotti");

    const tabella = document.createElement("table");

    tabella.innerHTML =
        "<thead>" +
            "<tr>" +
                "<th>Nome</th>" +
                "<th>Categoria</th>" +
                "<th>Prezzo</th>" +
                "<th>Rating</th>" +
                "<th>Disponibile</th>" +
            "</tr>" +
        "</thead>";

    const corpo = document.createElement("tbody");

    for (let i = 0; i < lista.length; i++) {
        const prodotto = lista[i];
        const riga = document.createElement("tr");

        riga.innerHTML =
            "<td>" + prodotto.nome + "</td>" +
            "<td>" + prodotto.categoria + "</td>" +
            "<td>€ " + prodotto.costo.toFixed(2) + "</td>" +
            "<td>" + stelline(prodotto.rating) + "</td>" +
            "<td>" + prodotto.disponibile + "</td>";

        corpo.appendChild(riga);
    }

    tabella.appendChild(corpo);
    griglia.appendChild(tabella);
}

renderProdotti(prodotti);
// facoltative da qui in poi
/* VERSIONE AVANZATA — Aggiungi al carrello
   Quando si clicca il bottone "Aggiungi al carrello", incrementa il contatore
   nell'header (Carrello (0) → Carrello (1) → ...).
   Per i prodotti esauriti: bottone disabilitato e testo "Esaurito".
   Suggerimento: usa una closure come visto in aula
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — Ordinamento
   Menu a tendina con: Prezzo crescente, Prezzo decrescente, Rating.
   Suggerimento: per rendere più leggibile la select puoi usare optgroup
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — Riepilogo carrello
   Pagina carrello con elenco prodotti aggiunti, totale, bottone "Svuota".
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — localStorage
   Il carrello sopravvive al refresh della pagina.
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
