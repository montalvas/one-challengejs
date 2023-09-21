/*
Escreva uma classe que contenha um método para gerar uma licença de voo e os seguintes atributos: nome, sobrenome, data de nascimento e licença de voo que deve iniciar sempre como falso
Além disso a classe deve possuir um método para criar uma licença caso a pessoa ainda não possua uma. A licença deve ser uma string seguindo o seguinte padrão:
* Os primeiros cinco caracteres do sobrenome em letras maiúsculas (completando com 9's caso possua menos de cinco).
* O 6º caractere é um traço(-)
* O 7ª caractere é o algarismo da década(penúltimo) do ano de nascimento
* O 8º e 9º caracteres são o mês de nascimento
* O 10º caractere é o algarismo do ano (último) do ano de nascimento
* O 11º caractere é um ponto (.)
* O 13º caractere é a primeira letra do primeiro nome (minúscula)
*/

class Pilot {
    constructor(name, surname, birthDate) {
        this.name = name;
        this.surname = surname;
        this.birthDate = new Date(birthDate);
        this.license = false;
    }

    getFirstFiveChars(surname) {
        let strChar = '';
        for(let i=0; i<5; i++) {
            strChar += surname[i] ? surname[i].toUpperCase() : '9';
        }
        return strChar;
    }

    getSevenToNineChars(birthDate) {
        let code = birthDate.getFullYear().toString()[2];
        code += ("0" + (birthDate.getMonth() + 1)).slice(-2);
        code += birthDate.getFullYear().toString()[3];
        return code;
    }

    getLastChar(name) {
        return name[0].toLowerCase();
    }

    getLicense() {
        this.license = this.getFirstFiveChars(this.surname);
        this.license += '-';
        this.license += this.getSevenToNineChars(this.birthDate);
        this.license += '.'; 
        this.license += this.getLastChar(this.name);
    }
}

const pilot1 = new Pilot('John', 'Doe', '1977-05-25T03:00:00.000Z');
const pilot2 = new Pilot('Hal', 'Jordan', '1995-09-02T03:00:00.000Z');
const pilot3 = new Pilot('Carol', 'Danvers', '1968-08-17T03:00:00.000Z');
const pilot4 = new Pilot('Poe', 'Dameron', '1979-03-09T03:00:00.000Z');

pilot1.getLicense();
pilot2.getLicense();
pilot3.getLicense();
pilot4.getLicense();

console.log(pilot1);
console.log(pilot2);
console.log(pilot3);
console.log(pilot4);