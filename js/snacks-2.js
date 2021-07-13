/*l'utente inserisce 2 parole in successione e si stampa prima la piu corta
 e poi la piu lunga
 */


var word1 = prompt("inserisci una parola", "ciao")
var word2 = prompt("inserisci un\' altra parola", "babalù")


if (word1.length > word2.length) {
    console.log(word1);
    console.log(word2);

} else if (word1.length < word2.length) {
    console.log(word2);
    console.log(word1);
} else {
    console.log("le parole " + word1 + " " + word2 + " " + "hanno  la stessa lunghezza")
}
