/*
Escreva uma função que recebe uma string e retorna a maior letra segundo a ordem alfabética em minúsculo.
Assuma que a string não possui nenhuma letra com acento, número ou caractere especial, apenas letras e espaços.
 */

function bigger(str) {
    const sortedArray = str.toLowerCase().split('').sort();
    return sortedArray(sortedArray.lenght - 1);
    // let big = 0; //minha solução
    // let letter = '';
    // for (let char of str) {
    //     const pos = str.indexOf(char);
    //     const value = str.charCodeAt(pos);
    //     if (value > big) {
    //         big = value;
    //         letter = char;
    //     }
    // }

    // return letter
}


console.log(bigger('Lorem ipsum dolore sec avanti'));
console.log(bigger('Hello'));
console.log(bigger('May the force be with you'));
console.log(bigger('Its over nine thousand'));