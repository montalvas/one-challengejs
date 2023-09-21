/*
Escreva uma função que receba um par ordenado (x, y) e retorne um array de pares (x,y) onde cada um deles possui x e y menor ou igual ao par recebido em ordem crescente. Os pares devem ser ordenados de forma que o primeiro aumento o valor de y e depois o valor de x. Apenas o quadrante onde x e y são positivos deve ser considerado.
*/

function getSmallerPairs(pair) {
    const smallerPairs = [];
    for(let x = 0; x <= pair[0]; x++) {
        for(let y = 0; y <= pair[1]; y++) {
            smallerPairs.push([x, y]);
        }
    }
    return smallerPairs;
}

console.log(getSmallerPairs([2,2]));
console.log(getSmallerPairs([2,7]));
console.log(getSmallerPairs([-3,-3]));
console.log(getSmallerPairs([7,6]));