/*
chiedi all'utente di inseire un numero 10 volte e poi stampa la somma dei numeri inseriti
*/


// soluzione 1
// var number1 = parseInt(prompt("inserisci un numero(1/10)"))
// var number2 = parseInt(prompt("inserisci un numero(2/10)"))
// var number3 = parseInt(prompt("inserisci un numero(3/10)"))
// var number4 = parseInt(prompt("inserisci un numero(4/10)"))
// var number5 = parseInt(prompt("inserisci un numero(5/10)"))
// var number6 = parseInt(prompt("inserisci un numero(6/10)"))
// var number7 = parseInt(prompt("inserisci un numero(7/10)"))
// var number8 = parseInt(prompt("inserisci un numero(8/10)"))
// var number9 = parseInt(prompt("inserisci un numero(9/10)"))
// var number10 = parseInt(prompt("inserisci un numero(10/10)"))



// console.log("La somma dei numeri inseriti è: ", number1 + number2 + number3 + number4 + number5 + number6 + number7 + number8 + number9 + number10)





// soluzione 2 

var sum = 0;
var isValid = true;
for (var i = 0; i < 10; i++) {
    var userNumber = parseInt(prompt("inserisci un numero", "10"))
    if (isNaN(userNumber)) {
        isValid = false;
    } else {
        sum += userNumber

    }
}
if (isValid) {
    console.log("la somma dei numeri è : ", sum);
} else {
    console.log("Hai inserito dei valori non validi !!!!");
}
