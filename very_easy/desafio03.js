/*
Escreva uma função que recebe um array e retorne um novo array com todas as posições invertidas do original sem altera-lo.
Não utilizar métodos do objeto global array (reverse, map, forEach, etc)
*/

function reverseArr (arr) {
    const reversedArr = [];
    for (let c = 0; c < arr.length; c++) reversedArr.unshift(arr[c]);
    return reversedArr;
}

console.log(reverseArr([0, 9, 6, 8, 9, 1, 5, 7]));
console.log(reverseArr(['Oh', 'Hi', 'Mark']));
console.log(reverseArr([false, true, true, true]));
console.log(reverseArr(["it's", "not", true, 0]));