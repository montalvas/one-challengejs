// Escreva uma função que recebe um número e retorna uma quantidade
// equivalente de "chuncks" separados por um traço "-"
// Sem utilizar nenhuma estrutura de repetição

function getChunck(n) {
    if (n === 0) return ''

    if (n === 1) {
        return 'chunck'
    } else {
        return 'chunck-' + getChunck(n-1);
    }

}

console.log(getChunck(0));
console.log(getChunck(4));
console.log(getChunck(1));
console.log(getChunck(8));
console.log(getChunck(2));