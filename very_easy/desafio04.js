/*
Escreva uma função que recvebe um inteiro qualquer, eleve ao quadrado cada
um de seus algarismos e depois concatene o resultado retornando um
único número inteiro
*/

function squareNumber(num) {
    const arr = num.toString().split('');
    const result = arr.reduce((current, next) => current + Number(next)**2, '');
    return Number(result);
}

console.log(squareNumber(3514));
console.log(squareNumber(94571));
console.log(squareNumber(24));
console.log(squareNumber(745821698));