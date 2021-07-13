/* in un array sono contenuti i nomi degli invitati ad una festa
chiedi all'utente
e comunicagli se può entrare o meno alla festa
*/

var invited = ["simone", "francesco", "alessanda", "michael"];
var nameUser = "";

do {
    nameUser = prompt("inserisci il tuo nome:");
} while (!nameUser);  /*!nameUser serve per verificare che non venga inserita una stringa vuota */


//verifichiamo che il nome inserito sia presente nella lista 
var isInvited = false;
var i = 0;
while (i < invited.length && !isInvited/*controlla fino a che ci sono invitati e isinvited non diventa true */) {
    if (nameUser.toLocaleLowerCase === invited[i].toLocaleLowerCase) {
        isInvited = true;
    }
    i++;
}
// toLocaleLowerCase trasforma tutto in minuscolo

// stampiamo il risultato
if (isInvited) {
    console.log("Puoi entrare")
} else {
    console.log("Non sei stato invitato")
}