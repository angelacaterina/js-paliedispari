//1. L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var evenOrOdd = prompt("scegli pari o dispari");
var numberUser = Number(prompt("inserire un numero da 1 a 5"));

// 2. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

/** Numero random da 1 a 5
 * @param int min - numero minino
 * @param int max - mumero massimo
 * @return int - numero random
*/
function numberRandomPc(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
// console.log(numberRandomPc(1, 5));
var randNumbPc = numberRandomPc(1, 5);

//3. Sommiamo i due numeri
// vecchio metodo
// var sum = numberUser + randNumbPc;
// console.log(sum);

// 4. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

/** somma di due numeri
 * @param int numUser - il primo numero da sommare
 * @param int numPc - il secondo numero da sommare
 * @return int - somma dei due numeri
*/
function sum(numUser, numPc){
  var result = numUser + numPc;
  return result;
}
var sumNum = sum(numberUser, randNumbPc);
console.log(sumNum);

// 5. Dichiariamo chi ha vinto.

// Se il numero é pari e il giocatore ha scelto pari, il giocatore ha vinto.
if (sumNum % 2 == 0 && evenOrOdd.toLowerCase() == 'pari' ) {
  console.log("hai vinto");
}
// Se il numero é dispari e il giocatore ha scelto pari, il giocatore ha perso.
else if (sumNum % 2 != 0 && evenOrOdd.toLowerCase() == 'pari' ) {
  console.log("hai perso");
}
// Se il numero é pari e il giocatore ha scelto dispari, il giocatore ha perso.
else if (sumNum % 2 == 0 && evenOrOdd.toLowerCase() == 'dispari') {
  console.log("hai perso");
}
// Se il numero é dispari e il giocatore ha scelto dispari, il giocatore ha vinto.
else if (sumNum % 2 != 0 && evenOrOdd.toLowerCase() == 'dispari' ) {
  console.log("hai vinto");
}
