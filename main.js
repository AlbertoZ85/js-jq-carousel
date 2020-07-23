// Creare uno slider di immagini
// Potete usare le immagini che desiderate.
// Per facilitarvi la vita usate immagini delle stesse dimensioni :)
// Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
// Utilizziamo una classe first e last  per capire quali sono la prima e ultima immagine dello slider
// Utilizziamo una classe active per aiutarci a capire qual è l’immagine attuale da visualizzare nello slider
//
// Bonus:
// a. Clicchiamo sui pallini e mostriamo l’immagine corrispondente. Generiamo i pallini con JS
// b. Per scorrere le immagini permettere anche l'uso delle frecce sinistra e destra della tastiera

// 1. Uso il metodo .ready() per assicurarmi che il codice js venga eseguito soltanto a caricamento del DOM ultimato
$(document).ready(function() {

    // 2. al click delle frecce sx e dx invoco le rispettive funzioni per lo scorrimento delle immagini e dei relativi pallini della barra di navigazione.
    $('.prev').click(prevImg);
    $('.next').click(nextImg);
    // In questo caso le funzioni vengono invocate senza parentesi () in quanto assumono la valenza di argomenti assegnati come parametri al metodo .click() (metodo = funzione applicata a un oggetto)


    // *** BONUS *** //

    // 1. Al click di uno dei pulsanti di navigazione rimuovo la classe 'active' dagli elementi correnti attivi
    $('.nav i').click(function() {
        $('.active').removeClass('active');
        // potrei farlo separatamente con activeImg.removeClass('active') e activeNavDot.removeClass('active')

    // 2. Creo una var indexNavDot in cui salvo l'indice del pulsante cliccato
        var indexNavDot = $(this).index();

    // 3. Attribuisco la classe 'active' al pulsante cliccato e all'immagine con indice pari a quello di tale pulsante
        $(this).addClass('active');
        $('img').eq(indexNavDot).addClass('active');
    })
});


// *** FUNZIONI *** //
// a. Funzione che al click della freccia sx del carosello visualizza l'immagine precedente e accende il relativo pulsante di navigazione
function prevImg() {
    // salvo gli elementi che possiedono la classe 'active' in delle variabili LOCALI (poiché uso la stessa variabile nella funzione nextImg e quindi non devo generare potenziali conflitti)
    var activeImg = $('.images img.active');
    var activeNavDot = $('.nav i.active');

    // rimuovo dapprima la classe 'active' da tali elementi, in modo da poterla attribuire successivamente all'elemento desiderato dopo aver effettuato il controllo sulla sua posizione
    activeImg.removeClass('active');
    activeNavDot.removeClass('active');

    // check sulla posizione dell'elemento attivo corrente: se è il primo, allora attribuisco la classe 'active' all'ultimo; idem per il pallino
    if (activeImg.hasClass('first')) {
        $('.images img.last').addClass('active');
        $('.nav i.last').addClass('active');
    }   else {
        // altrimenti attribuisco la classe 'active' all'elemento precedente a quello corrente
        activeImg.prev().addClass('active');
        activeNavDot.prev().addClass('active');
    }
}

// b. Funzione che al click della freccia dx del carosello visualizza l'immagine successiva e accende il relativo pulsante di navigazione
function nextImg() {
    // salvo in delle variabili LOCALI gli elementi che possiedono la classe 'active'
    var activeImg = $('.images img.active');
    var activeNavDot = $('.nav i.active');

    // rimuovo dapprima la classe 'active' da tali elementi, in modo da poterla attribuire successivamente all'elemento desiderato dopo aver effettuato il controllo sulla sua posizione
    activeImg.removeClass('active');
    activeNavDot.removeClass('active');

    // check sulla posizione dell'elemento attivo corrente: se è l'ultimo, allora attribuisco la classe 'active' al primo; idem per il pallino
    if (activeImg.hasClass('last')) {
        $('.images img.first').addClass('active');
        $('.nav i.first').addClass('active');
    }   else {
        // altrimenti attribuisco la classe 'active' all'elemento successivo a quello corrente
        activeImg.next().addClass('active');
        activeNavDot.next().addClass('active');
    }
}
