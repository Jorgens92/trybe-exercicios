//Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.
let maior = 0;
for (let i = 2; i <= 50; i += 1){
    for (let k = 2; k <= i; k += 1){
        if (k !== i && i % k === 0){
            break;
        }
        else if (k === i){
            maior = k;
        }
    }
}
console.log(maior);