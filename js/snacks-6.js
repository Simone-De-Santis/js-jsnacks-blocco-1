/*stampa il cubbo di n numeri dove n è un numero definito dall'utente */


var userNumber;
//validazione
do {
    userNumber = parseInt(prompt("inserisci un numero"));
} while (isNaN(userNumber) && n <= 0);


// for (var i = 1; i <= userNumber; i++) {
//     console.log(i * i * i)
// }

var i = 1;
var numberResult = "";
while (i <= userNumber) {
    numberResult = i * i * i
    i++
    console.log(numberResult)
}