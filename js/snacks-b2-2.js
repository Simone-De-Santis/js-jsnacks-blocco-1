//inserisci un numero se è pari stampalo se disparo stampa il numero successimo 



var userNumber = parseInt(prompt("Inserisci un numero "))
if (userNumber % 2 === 0) {
  console.log("questo numero è pari:", userNumber)
} else {
  console.log("questo numero è dispari ed è stato aumentato di 1:", userNumber + 1)

}