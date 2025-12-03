/**
 * Per non rovinare l'esercizio originale, creo un nuovo file JS per la versione con interfaccia grafica.
 */

/* Prima creiamo le variabili e costanti necessarie */


const form = document.getElementById('ticket-form');
const ageInput = document.getElementById('age');
const distanceInput = document.getElementById('distance');
const resultDiv = document.getElementById('result');

let price = 0;
const kmPrice = 0.21;
const minorDiscount = 0.2;
const seniorDiscount = 0.4;
const minorsAgeLimit = 18;
const seniorsAgeLimit = 65;

/*Ora lo script deve leggere i dati inseriti dall'utente nel form quando questo viene inviato.*/
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Impedisce il comportamento predefinito del form, quindi il reload della pagina.
    let age = parseInt(ageInput.value);
    let distance = parseFloat(distanceInput.value);
    // Validazione degli input
    if (isNaN(age) || age <= 0) {
        resultDiv.innerHTML = `<div class="alert alert-danger" role="alert">
            Valore non valido. Inserisci la tua età (numero positivo superiore a 0).
        </div>`;
        return;
    }
    if (isNaN(distance) || distance <= 0) {
        resultDiv.innerHTML = `<div class="alert alert-danger" role="alert">
        Valore non valido. Inserisci la distanza in km (numero positivo superiore a 0).
  </div>`;
        return;
    }
    // Calcolo del prezzo base:
    price = distance * kmPrice;

    if (age < minorsAgeLimit) {
        price = price * (1 - minorDiscount);

    }
    else if (age >= seniorsAgeLimit) {
        price = price * (1 - seniorDiscount);

    } else {

    }

    // Mostra il prezzo finale nell'interfaccia grafica
    resultDiv.innerHTML = `<div class="alert alert-success" role="alert">
        Il prezzo finale del biglietto è di ${price.toFixed(2)} €.
    </div>`;
});
