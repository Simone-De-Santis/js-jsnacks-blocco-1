// chiedi per 6 volte all'utente di inserire un numero 
// se il numero è pari inseriscilo nell'array




var evenNumbers = [];
var userTotal = [];



for (var i = 0; i < 6; i++) {
    var userNumber = parseInt(prompt("inserisci un numero:"))
    if (!isNaN(userNumber) && userNumber % 2 == 0) {
        evenNumbers.push(userNumber)
    }
    userTotal.push(userNumber);
}
console.table("Numeri pari inseriti: ", evenNumbers)
console.table("Tutti inumeri inseriti: ", userTotal)
