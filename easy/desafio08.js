/**
 Escreva uma função que recebe uma string contendo um nome completo e retorna
 uma string com todos os nomes, exceto o último, abreviados e o último nome
 em letras maiúsculas antes das abreviações separado por vírgula.
*/

function abbreviate(fullName) {
    const nameList = fullName.toUpperCase().split(' ');
    let abbr = nameList.pop() + ',';
    nameList.forEach(name => abbr += ` ${name[0]}.`);
    return abbr;
}

console.log(abbreviate('Lucas Montalvani Oliveira Albuquerque'));
console.log(abbreviate('Isaac Larrubia Ferreira Pontes'));
console.log(abbreviate('John Ronald Reuel Tolkien'));
console.log(abbreviate('christopher james paolini'));
console.log(abbreviate('Suzanne Marie Collins'));