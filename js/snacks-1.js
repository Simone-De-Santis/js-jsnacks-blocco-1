console.log("js ok")
/*
l'utente inserisce 2 numeri in successione e il softwer stampa il numero maggiore 
*/


var insertion1 = parseInt((prompt("inserisci un numero")));
var insertion2 = parseInt((prompt("inserisci un \' altro numero")));

message = "il numero più grande è :"
if (insertion1 > insertion2) {
    message += insertion1;
}
else if (insertion1 < insertion2) {
    message += insertion2;
} else {
    message = "I numeri inseriti sono uguali !!!!";
}


//! validazione
if (isNaN(insertion1) || isNaN(insertion2)) {
    message = "Hai inserito un valore non valido"
}

// print
console.log(message);