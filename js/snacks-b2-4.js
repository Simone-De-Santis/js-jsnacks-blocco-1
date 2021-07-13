/*crea due array che hanno unnumero di array diversi. aggiungi elementi casuali all'array che ha meno elementi  fino a quando entrambi non avranno lo stesso numero di elementi */




var array1 = ["1", "2", "6", "7", "365", "767", "346", "43", "76", "46", "56", "345", "3", "45", "32", "23",];
var array2 = ["32", "23",];
// logica

while (array1.length !== array2.length) {
  //generatore di numeri random
  var random = Math.floor((Math.random() * 100) + 1);
  if (array1.length > array2.length) {
    array2.push(random)
  } else {
    array1.push(random)

  }
}

console.log(array1.length)
console.log(array2.length)

             