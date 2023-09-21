// Criar um algoritmo que automatize os cálculos das médias de alunos e turmas
// O algoritmo recebe uma quantidade n de notas
// Deve exibir a média aritmética da quantidade n de alunos

function average(...grades) {
    const sum = grades.reduce((accum, grade) => accum + grade, 0);
    
    return sum / grades.length;
}

console.log('Resultado 1: ' + average(10, 9, 6, 8, 9, 1, 5, 7));
console.log('Resultado 2: ' + average(2, 5, 7, 1, -2));
console.log('Resultado 3: ' + average(10, 10, 10, 10, 9));
console.log('Resultado 4: ' + average(25,75));
