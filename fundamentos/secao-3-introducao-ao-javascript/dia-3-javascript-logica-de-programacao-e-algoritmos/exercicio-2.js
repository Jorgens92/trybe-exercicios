//Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
//let word = 'tryber';

let word = 'janeiro';
let wArray = [];
for (let i = 0; i <= word.length; i += 1){
    wArray.push(word[word.length - i])
}
let newWord = wArray.join("");
console.log(newWord);