//calcolatore

let price = 0;
const kmPrice = 0.21;
const minorDiscount = 0.2;
const seniorDiscount = 0.4;
const minorsAgeLimit = 18;
const seniorsAgeLimit = 65;

const age = parseInt(prompt("Inserisci la tua età"));
const distance = parseFloat(prompt("Inserisci la distanza in km che vuoi percorrere"));

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