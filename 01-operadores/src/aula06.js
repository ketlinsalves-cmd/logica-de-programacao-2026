import leia from 'readline-sync'

var nota1, nota2, nota3;

nota1 = leia.questionFloat("digite a primeira nota: ")
nota2 = leia.questionFloat("digite a segunda nota: ")
nota3 = leia.questionFloat("digite a terceira nota: ")

var soma = nota1 + nota2 + nota3;

var media = soma / 3;

console.log("A media e: " + media);