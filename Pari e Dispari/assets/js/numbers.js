//1. L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var evenOrOdd = prompt("scegli pari o dispari").toLowerCase();
var numberUser = Number(prompt("inserire un numero da 1 a 5"));

// 2. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

/** Numero random da 1 a 5
 * @param int min - numero minino
 * @param int max - mumero massimo
 * @return int - numero random
*/
function numberRandomPc(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
// console.log(numberRandomPc(1, 5));
var randNumbPc = numberRandomPc(1, 5);

//3. Sommiamo i due numeri
console.log(numberUser, randNumbPc);

// vecchio metodo
var sum = numberUser + randNumbPc;
console.log(sum);

// modo nuovo
// /** somma di due numeri
//  * @param int numUser - il primo numero da sommare
//  * @param int numPc - il secondo numero da sommare
//  * @return int - somma dei due numeri
// */
// function sum(numUser, numPc){
//   var result = numUser + numPc;
//   return result;
// }
// var sumNum = sum(numberUser, randNumbPc);
// console.log(sumNum);

// 4. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

/** Stabiliamo se la somma dei due numeri è pari o dispari
 * @param int number - numero
 * @return str - stabilisce che il numero è pari
 * @returns str - stabilisce che il numero è dispari
*/
function checkEvenOrOdd(number){
  if (number % 2 === 0){
    return "pari"
  }
  return "dispari"
}

var resultEvenOrOdd = checkEvenOrOdd(sum);
console.log(resultEvenOrOdd);

// 5. Dichiariamo chi ha vinto.
if(resultEvenOrOdd === evenOrOdd){
  console.log("hai vinto")
}else {
  console.log("hai perso");
}
