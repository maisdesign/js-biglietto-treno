//calcolatore

let price = 0;
const kmPrice = 0.21;
const minorDiscount = 0.2;
const seniorDiscount = 0.4;
const minorsAgeLimit = 18;
const seniorsAgeLimit = 65;



let age = parseInt(prompt("Inserisci la tua età"));
let distance = parseFloat(prompt("Inserisci la distanza in km che vuoi percorrere"));

while (isNaN(age) || age <= 0) {
    age = parseInt(prompt("Valore non valido. Inserisci la tua età (numero positivo):"));
}
while (isNaN(distance) || distance <= 0) {
    distance = parseFloat(prompt("Valore non valido. Inserisci la distanza in km (numero positivo):"));
}
//Calcolo del prezzo base:
price = distance * kmPrice;

if (age < minorsAgeLimit) {
    price = price * (1 - minorDiscount);
    
}
else if (age >= seniorsAgeLimit) {
    price = price * (1 - seniorDiscount);
    
} else {
    
}

//Prezzo finale:
alert("Il prezzo finale del biglietto è di " + price.toFixed(2) + " euro.");
console.log("Il prezzo finale del biglietto è di " + price.toFixed(2) + " euro.");

/* Ora voglio aggiungere un ciclo while che controlli se l'utente ha inserito dei valori validi per età e distanza.
Se l'età non è un numero positivo o la distanza non è un numero positivo, chiedo di reinserire i valori. */