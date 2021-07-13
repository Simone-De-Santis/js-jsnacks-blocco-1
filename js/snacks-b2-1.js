/*il softwer deve chiedere per 5 volte all'utente di inserire un numero
il programma stampa la somma di tutti i numeri inseriti
esegui questo programma in due versioni con il for e con il while */




//chiedere per 5 volte di insrire un numero 
var sum = 0;

// for (var i = 0; i < 5; i++) {
//   numberQuest = parseInt(prompt("Insersci un numero" + (i + 1) + "/5"));
//   if (!isNaN(numberQuest)) {
//     sum += numberQuest
//   }
// }
var i = 0;
while (i < 5) {
  numberQuest = parseInt(prompt("Insersci un numero" /*+ (i + 1) + "/5"*/));
  if (!isNaN(numberQuest)) {
    sum += numberQuest
  }



  i++

}
