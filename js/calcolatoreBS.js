/**
 * Per non rovinare l'esercizio originale, creo un nuovo file JS per la versione con interfaccia grafica.
 */

/* Prima creiamo le variabili e costanti necessarie */


const form = document.getElementById('ticket-form');
const ageInput = document.getElementById('age');
const distanceInput = document.getElementById('distance');
const resultDiv = document.getElementById('result');

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

    /* Risparmiamo risorse, non serve calcolare il prezzo se i dati sono errati. */
    let basePrice = distance * kmPrice;
    let discountPercent = 0;
    let price = basePrice


    if (age < minorsAgeLimit) {
        discountPercent = minorDiscount * 100;
        price = basePrice * (1 - minorDiscount);

    }
    else if (age >= seniorsAgeLimit) {
        discountPercent = seniorDiscount * 100;
        price = basePrice * (1 - seniorDiscount);
    } else {

    }

    // Mostra il prezzo finale nell'interfaccia grafica
    resultDiv.innerHTML = `
  <div class="card shadow-sm">
    <div class="card-body">
      <h5 class="card-title">Biglietto del treno</h5>
      <p class="card-text mb-1"><strong>Età:</strong> ${age} anni</p>
      <p class="card-text mb-1"><strong>Distanza:</strong> ${distance.toFixed(2)} km</p>
      <p class="card-text mb-1"><strong>Prezzo base:</strong> ${basePrice.toFixed(2)} €</p>
      <p class="card-text mb-1"><strong>Sconto applicato:</strong> ${discountPercent}%</p>
      <p class="card-text fw-bold"><strong>Prezzo finale:</strong> ${price.toFixed(2)} €</strong></p>

      <hr>
      <p class="card-text">QR Code del biglietto:</p>
      <div id="ticket-qrcode"></div>
    </div>
  </div>
`;
    // Genera il QR Code con il riepilogo del biglietto
    const qrCodeDiv = document.getElementById('ticket-qrcode');
    qrCodeDiv.innerHTML = '';
    new QRCode(qrCodeDiv, {
        text: `Biglietto\nEtà: ${age} anni\nDistanza: ${distance} km\nPrezzo base: ${basePrice.toFixed(2)} €\nSconto: ${discountPercent}%\nPrezzo finale: ${price.toFixed(2)} €`,
        width: 128,
        height: 128
    });
});
