/*generatore di nomi e cognomi casuali:partendo da una lista di nomi e cognomi genera una lista falsa di 3 nomi e cognomi.*/


var nameList = ["Simone", "Alessanda", "Francesco", "Michele", "Paolo"];
console.table(nameList);

var surnameList = ["Rossi", "Bianchi", "De Santis", "Totti", "Brosio"];
console.table(surnameList);


var falseList = [];

// for (var i = 0; i < 3; i++) {
//   var nameListRandom = Math.floor((Math.random() * nameList.length));
//   console.log(nameListRandom)
//   var surnameListRandom = Math.floor((Math.random() * surnameList.length));
//   console.log(surnameListRandom)
//   var fulName = nameList[nameListRandom] + " " + surnameList[surnameListRandom];
//   console.log(fulName)
// }

while (falseList.length < 3) {
  var nameListRandom = Math.floor((Math.random() * nameList.length));
  // console.log(nameListRandom)
  var surnameListRandom = Math.floor((Math.random() * surnameList.length));
  // console.log(surnameListRandom)
  fullName = nameList[nameListRandom] + " " + surnameList[surnameListRandom];
  console.log(fullName)
  if (!falseList.includes(fullName)) {
    falseList.push(fullName)
  }
}
console.table(falseList)