//calcolatore

let age = 10;
let distance = 50;
let price = 0;
const kmPrice = 0.21;
const minorDiscount = 0.2;
const seniorDiscount = 0.4;
const minorsAgeLimit = 18;
const seniorsAgeLimit = 65;
price = distance * kmPrice;

if (age < minorsAgeLimit) {
    price = price * (1 - minorDiscount);
    
}
else if (age >= seniorsAgeLimit) {
    price = price * (1 - seniorDiscount);
    
} else {
    
}

//Prezzo finale:
console.log("Il prezzo finale del biglietto è di " + price.toFixed(2) + " euro.");