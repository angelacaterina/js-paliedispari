// 1. Chiedere all’utente di inserire una parola
var word = prompt("insert a word");

//2. Creare una funzione per capire se la parola inserita è palindroma (parola palindroma quando letta da sx a dx è uguale e leggerla da dx a sx)

function palindromo(str){
  var strInversa = "";

  for (var i = str.length -1; i >= 0; i--){
    strInversa = strInversa + str[i];
  }

  return strInversa;
}

if(word == palindromo(word)){
  console.log("the word is palindrome.'");
} else {
  console.log("the word is not palindrome.'");
}
