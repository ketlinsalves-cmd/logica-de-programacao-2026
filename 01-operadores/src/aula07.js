import leia from 'readline-sync'

//ENTRADA
var corrida01 = leia.questionFloat("digite o valor da primeira corrida: ")
var corrida02 = leia.questionFloat("digite o valor da segunda corrida: ")
var corrida03 = leia.questionFloat("digite o valor da terceira corrida: ")
var corrida04 = leia.questionFloat("digite o valor da quarta corrida: ")
var corrida05 = leia.questionFloat("digite o valor da quinta corrida: ")

//PROCESSAMENTO
var valorBruto = corrida01 + corrida02 + corrida03 + corrida04 + corrida05;
var valorDescontoapp = valorbruto * (25 / 100);
var valorliquido = valorbruto - valorDescontoapp;

//SAIDA
console.log("O VALOR TOTAL ARRECADADO COM OS DESCONTOS É DE R$" + valorliquido.toFixed(2))



