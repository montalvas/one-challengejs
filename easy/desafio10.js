/*
Escreva uma função que recebe um número e retorna o seu fatorial sem utilizar
nenhuma estrutura de repetição (while, dowhile, for, etc). O fatorial de um número é igual a multiplicação de todos os inteiros positivos menores ou iguais a ele. Ela deve ser capaz de retornar números inteiros corretos mesmo para valores altos.
*/

function fatorial(num) {
    const bigNum = BigInt(num);

    if(bigNum <= 0) return 1n;
    if(bigNum === 1) return bigNum;
    return bigNum * fatorial(bigNum - 1n);
}

console.log(fatorial(5));
console.log(fatorial(0));
console.log(fatorial(32));
console.log(fatorial(9n));
console.log(fatorial(-1));
