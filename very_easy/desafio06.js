/*
Escreva uma função que recebe uma string
e retorna cada palavra da string invertida
e em letras minúsculas, porém com as palavras
na mesma ordem. Assuma que a string não possui nenhuma
letra com acento, número, apenas letras e espaços
*/

function invertWord(word) {
    return word.split('').reverse().join('');
}

function invert(str) {
    const wordsArray = str.toLowerCase().split(' ').map(invertWord);
    return wordsArray.join(' ');
}

console.log(invert('Minha casa é bonita'));
console.log(invert('Lorem ipsum dolore sec avanti'));
console.log(invert('This is an apple'));
console.log(invert('May the force be with you'));
console.log(invert('It s over nine thousand'));
console.log(invert('montalvani'));