"use strict";
// "Traduzir" códigos do JavaScript para o TypeScript
// 1) Traduzir código do JS para o TS
// var dobro = function(valor) {
//     return valor * 2;
// }
// console.log(dobro(10));
const dobro = (valor) => valor * 2;
console.log(dobro(10));
// 2) Verificar se há espaço para melhoria nesse código
// var dizerOla = function (nome) {
//     if (nome === undefined) { nome = "Pessoa" }
//     console.log("Ola, " + nome);
// }
// dizerOla();
// dizerOla("Anna");
const dizerOla = function (nome = 'Pessoa') {
    console.log("Olá, " + nome);
};
dizerOla();
dizerOla("Anna");
// 3) Imprimir o menor valor do array
// var nums = [-3, 33, 38, 5];
// console.log('???');
const nums = [-3, 33, 38, 5];
console.log(Math.min(...nums));
// 4) Adicionar elementos nums em array
// var nums = [-3, 33, 38, 5];
// var array = [55, 20];
// console.log(array);
const array = [55, 20, ...nums];
console.log(array);
// 5.1) Simplificar os trechos de código usando o operador Destructuring
// var notas = [8.5, 6.3, 9.4];
// var notas1 = notas[0];
// var notas2 = notas[1];
// var notas3 = notas[2];
// console.log(nota1, nota2, nota3);
const notas = [8.5, 6.3, 9.4];
const [nota1, nota2, nota3] = notas;
console.log(nota1);
console.log(nota2);
console.log(nota3);
// 5.2) Simplificar os trechos de código usando o operador Destructuring
// var cientista = {primeiroNome: "Will", experiencia: 12};
// var primeiroNome = cientista.primeiroNome;
// var experiencia = cientista.experiencia;
// console.log(primeiroNome, experiencia);
const cientista = {
    primeiroNome: "Will",
    experiencia: 12,
};
const { primeiroNome: primeiroNome, experiencia: experiencia } = cientista;
console.log(primeiroNome);
console.log(experiencia);
//# sourceMappingURL=desafio.js.map