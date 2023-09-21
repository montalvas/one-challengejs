/*
Escreva uma função que recebe um array bidimensional de inteiros e retorna um único array contendo todos os números em ordem ascendente
*/

function orderList(randomList) {
    const orderedList = [];
    randomList.forEach(list => {
        orderedList.push(...list);
    });
    return orderedList.sort((a, b) => a - b);
}

console.log(orderList([[1,5,3], [6,19,11], [47,128,5], [1,93,57,42,103]]));
console.log(orderList([[1,3], [4,8], [7,5], [2,6]]));
console.log(orderList([[], [], [], []]));
console.log(orderList([[100,50], [60,100], [20,100,70], [10,40,80,90]]));