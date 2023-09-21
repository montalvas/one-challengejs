/*
 Escreva uma função que recebe um número e verifica se le é um código de identificação válido segundo as regras de criação do digito verificador. Regras:
 1. Some os digitas das posições pares
 2. Multiplique esse resultado por 3
 3. Some os digitos das posições impares do número original e então some esse resultado ao resultado anterior
 4. Encontre o resto da divisão do resultado do passo anterior por 10
 5. se o resto da divisão for 0, o digito verificador é 0, do contrário o digito verificador é 10 - resto
*/

function generateDigit(arr) {
    const sumEven = arr.reduce((accum, current, index) => {
        return index === 0 || index % 2 === 0 ? accum + current : accum
    }, 0);
    const sumOdd = arr.reduce((accum, current, index) => {
        return index % 2 === 1 ? accum + current : accum
    }, 0);
    const result = (sumEven * 3 + sumOdd) % 10;
    return result !== 0 ? 10 - result : 0;
}

function verifyCode(code) {
    const numberArray = code.toString().split('').map(Number);
    const numberArrayWithoutDigit = numberArray.slice(0, -1);
    const correctDigit = generateDigit(numberArrayWithoutDigit);
    return correctDigit === numberArray[numberArray.length - 1];
}

console.log(verifyCode(547020743789));
console.log(verifyCode(301354030348));
console.log(verifyCode(301354030349));
console.log(verifyCode(123456789872));