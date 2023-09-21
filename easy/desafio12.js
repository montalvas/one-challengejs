/*
Escreva uma função que receba um valor inteiro e retorne a quantidade de cada moeda para se chegar ao valor. Deve-se sempre priorizar as moedas de maior valor (o máximo possível de moedas de 500, depois o máximo possível de moedas de 100, etc). Moedas => 1, 5, 10, 25, 100 e 500
*/

function getChange(value) {
    const amount = {
        '500': 0,
        '100': 0,
        '25': 0,
        '10': 0,
        '5': 0,
        '1': 0
    }
    const coins = Object.keys(amount).reverse();
    for(let coin of coins) {
        const num = Number(coin);
        if(value / num > 1) {
            amount[coin] = Math.floor(value / num);
            value %= num;
        }
    }
    return amount;
}

console.log(getChange(478));
console.log(getChange(384));
console.log(getChange(5412));
console.log(getChange(50));