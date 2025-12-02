//calcolatore

let age = 10;
let distance = 50;
let price = 0;
price = distance * 0.21;

if (age < 18) {
    price = price * 0.8;
    
}
else if (age >= 65) {
    price = price * .6;
    
} else {
    
}

//Prezzo finale:
console.log("Il prezzo finale del biglietto è di " + price.toFixed(2) + " euro.");