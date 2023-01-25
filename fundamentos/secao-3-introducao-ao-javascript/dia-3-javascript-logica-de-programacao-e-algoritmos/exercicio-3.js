//Considere o array de strings abaixo:
//let array = ['java', 'javascript', 'python', 'html', 'css'];
//Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.

//Imprime maior palavra
let array = ['java', 'javascript', 'python', 'html', 'css'];
let comparacao = 0;
let posicaoNoArray = 0;
for (let i = 0; i < array.length; i += 1){
    if (array[i].length > comparacao){
        comparacao = array[i].length;
        posicaoNoArray = i;
    }
}
console.log(array[posicaoNoArray]);

//Imprime menor palavra
let comparacao2 = array[0].length;
let posicaoNoArray2 = 0;
for (let i = 0; i < array.length; i += 1){
    if (array[i].length < comparacao2){
        comparacao2 = array[i].length;
        posicaoNoArray2 = i;
    }
}
console.log(array[posicaoNoArray2]);