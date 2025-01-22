"use strict";
// //string
// let nome: string = 'joao';
// //nome = 28;
// console.log(nome);
// //numbers
// let idade: number = 27;
// //idade = 'ana';
// idade = 25.7;
// console.log(idade);
// //boolean
// let possuiHobbies: boolean = false;
// //possuiHobbies = 1;
// console.log(possuiHobbies);
// // tipos explicitos
// let minhaIdade: number;
// minhaIdade = 24;
// console.log(typeof minhaIdade)
// //minhaIdade = 'minha idade é 25';
// //console.log(typeof minhaIdade)
// //array
// let hobbies: any[] = ['cozinhar', 'esportes'];
// console.log(hobbies[0]);
// console.log(typeof hobbies[0], typeof hobbies[1]);
// //hobbies = [100, false];
// //console.log(typeof hobbies[0], typeof hobbies[1]);
// hobbies = [100, 200, 300];
// console.log(hobbies);
// //tuplas
// let endereco: [string, number, string] = ['Av principal', 99, ''];
// console.log(endereco);
// endereco = ['rua importante', 1260, 'bloco c'];
// console.log(endereco);
// //enums
// enum Cor {
//     Cinza, //0
//     Verde = 100, //100
//     Azul = 2, //2
//     Laranja,
//     Amarelo,
//     Vermelho = 100,
// }
// let minhaCor: Cor = Cor.Verde;
// console.log(minhaCor);
// console.log(Cor.Azul);
// console.log(Cor.Laranja, Cor.Amarelo);
// console.log(Cor.Verde, Cor.Vermelho);
// //any
// let carro: any = 'BMW';
// console.log(carro);
// carro = { marca: "BMW", ano: 2019};
// console.log(carro);
// //funcao
// function retornaNome(): string {
//     //return minhaIdade;
//     return nome;
// }
// console.log(retornaNome());
// function digaOi(): void { //void não retorna nada
//     console.log('oi');
//     //return minhaCor;
// }
// digaOi();
// function multiplicar(numA: number, numB: number): number {
//     return numA * numB;
// }
// //console.log(multiplicar(2, 'bia'));
// console.log(multiplicar(2.4, 2));
// const teste = function (a: number, b: number): boolean {
//     return false;
// }
// //tipo funcao
// let calculo: (x: number, y: number) => number
// //calculo = digaOi;
// //calculo()
// calculo = multiplicar;
// console.log(calculo(5, 6))
// //objetos
// let usuario: { nome: string, idade: number } = {
//     nome: 'João',
//     idade: 27
// }
// console.log(usuario);
// // usuario = {}
// // usuario = {
//     //     name: 'maria',
//     //     age: 31
//     // }
// usuario = {
//     idade: 31,
//     nome: 'Maria',
// }
// console.log(usuario);
// /*
//     criar um objeto funcionario com:
//         -array de strings com os nomes dos surpevisores
//         -função de bater ponto que recebe a hora e retorna uma string
//             ->ponto normal (<= 8)
//             ->fora do horario (> 8)
// */
// //alios
// type Funcionario = {
//     supervisores: string[],
//     baterPonto: (horas: number) => string
// }
// let funcionario: Funcionario = {
//     supervisores: ['ana', 'fernando'],
//     baterPonto(horario: number): string {
//         if (horario <= 8) {
//             return 'Ponto normal';
//         } else {
//             return 'Fora do horario';
//         }
//     }
// }
// console.log(funcionario.supervisores);
// console.log(funcionario.baterPonto(8));
// console.log(funcionario.baterPonto(9));
// // function = {}
// let funcionario2: Funcionario = {
//     supervisores: ['bia', 'carlos'],
//     baterPonto(horario: number): string {
//         if (horario <= 8) {
//             return 'Ponto normal';
//         } else {
//             return 'Fora do horario';
//         }
//     }
// }
// //union types
// let nota: number | string = 10;
// console.log(`Minha nota é ${nota}`);
// nota = '20'
// console.log(`Minha nota é ${nota}`);
// // nota = true;
// // console.log(`Minha nota é ${nota}`);
// //checando tipos
// let valor = true;
// if (typeof valor == "number") {
//     console.log('sim')
// } else {
//     console.log(typeof valor)
// }
// //never
// function falha(msg: string): never {
//     throw new Error(msg)
// }
// const produto = {
//     nome: 'sabao',
//     preco: 4,
//     validarProduto() {
//         if(!this.nome || this.nome.trim().length == 0) {
//             falha('precida ter um nome')
//         }
//         if(this.preco <= 0) {
//             falha('preco invalido')
//         }
//     }
// }
// produto.validarProduto()
// //
// let altura = 12;
// //altura = null;
// let alturaOpicional: number | null = 12;
// alturaOpicional = null;
// type Contato = {
//     nome: string,
//     tel1: string,
//     tel2: string | null
// }
// const contato1: Contato = {
//     nome: 'fulano',
//     tel1: '12345',
//     tel2: null
// }
// console.log(contato1.nome);
// console.log(contato1.tel1);
// console.log(contato1.tel2);
// // let podeSerNulo = null; //any!
// // podeSerNulo = 12;
// // console.log(podeSerNulo);
// // podeSerNulo = 'abc';
// // console.log(podeSerNulo);
// //desafio transformar js em ts
// type ContaBancaria = {
//     saldo: number,
//     depositar: (valor: number) => void
// }
// let contaBancaria: ContaBancaria = {
//     saldo: 3456,
//     depositar(valor: number) {
//         this.saldo +- valor;
//     }
// }
// type Correntista = {
//     nome: string,
//     contaBancaria: ContaBancaria,
//     contatos: string[]
// }
// let correntista: Correntista = {
//     nome: 'Ana Silva',
//     contaBancaria: contaBancaria,
//     contatos: ['123', '456']
// }
// correntista.contaBancaria.depositar(3000);
// console.log(correntista)
//# sourceMappingURL=tipos.js.map