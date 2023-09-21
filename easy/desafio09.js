/* 
Escreva uma função que recebe uma string, verifica se ela possui a mesma quantidade de cada letra que a compõe e retorna true caso possua ou false caso não possua.
*/

// Minha solução
// function checkLetters(str) {
//     const letters = str.split('').sort();
//     const countLetters = [];
//     let condition = true;
    
//     for(let letter of letters) {
//         let count = 0;
//         let index = letters.indexOf(letter);
//         while(index >= 0) {
//             letters.splice(index, 1);
//             index = letters.indexOf(letter);
//             count++;
//         }
//         countLetters.push(count);
//     }
    
//     for(let countLetter of countLetters) 
//         if(countLetter !== countLetters[0]) {
//             condition = false;
//             return condition;
//         }
    
//     return condition;
// }

function compareCount(count, index, array) {
    return index !== 0 ? count === array[index - 1] : true;
}

function checkLetters(str) {
    const countLetters = {};

    for(let i = 0; i < str.length; i++) {
        const current = str[i];
        countLetters[current] = countLetters[current] ? countLetters[current] + 1 : 1;
    }

    return Object.values(countLetters).every(compareCount);
}

console.log(checkLetters('This is Thee'));
console.log(checkLetters('ssd'));
console.log(checkLetters('Lorem ipsum'));
console.log(checkLetters('QQwweerrttyy'));

