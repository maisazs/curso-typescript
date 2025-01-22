"use strict";
function echo(objeto) {
    return objeto;
}
console.log(echo('Joao'));
console.log(echo(27).length);
console.log(echo({ nome: 'Joao', idade: 27 }));
// Usando generics
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado('Joao'));
console.log(echoMelhorado(27));
console.log(echoMelhorado({ nome: 'Joao', idade: 27 }));
// Generics disponíveis na API
const avaliacoes = [10, 9.3, 7.7];
avaliacoes.push(8.4);
// avaliacoes.push('5.5')
console.log(avaliacoes);
// Array
function imprimir(args) {
    args.forEach(elemento => console.log(elemento));
}
imprimir([1, 2, 3]);
imprimir([1, 2, 3]);
imprimir(['1', '2', '3']);
imprimir([
    { nome: 'Mayza', idade: 22 },
    { nome: 'Felipe', idade: 22 },
    { nome: 'Bia', idade: 22 }
]);
imprimir([
    { nome: 'abc', idade: 3 },
    { nome: 'def', idade: 9 },
    { nome: 'ghi', idade: 12 }
]);
const chamarEcho = echoMelhorado;
console.log(chamarEcho('Alguma coisa'));
// Class com generics
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
// console.log(new OperacaoBinaria('Bom ', 'dia').executar())
// console.log(new OperacaoBinaria(3, 7).executar())
// console.log(new OperacaoBinaria(3, 'dia').executar())
// console.log(new OperacaoBinaria({}, {}).executar())
class SomaBinaria extends OperacaoBinaria {
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new SomaBinaria(3, 4).executar());
// desafio
// class DiferencaEntreDatas extends OperacaoBinaria<Data, string> {
//     getTime(data: Data): number {
//         let { dia, mes, ano } = data
//         return new Date(`${mes}/${dia}/${ano}`).getTime()
//     }
//     executar(): string {
//     const t1 = this.getTime(this.operando1)
//     const t2 = this.getTime(this.operando1)
//     const diferenca = Math.abs(t1 - t2)
//     const dia = 1000 * 60 * 60 * 24
//     return `${Math.ceil(diferenca / dia)} dia(s)`
//     }
// }
// const d1 = new Data(1, 2, 2020)
// const d2 = new Data(5, 3, 2020)
// console.log(new DiferencaEntreDatas(d1, d2).executar())
// Desafio classe Fila
// Atributo: fila (Array)
// Métodos: entrar (.push), próximo(.splice), imprimir(.console.log)
class Fila {
    constructor(...args) {
        this.fila = args;
    }
    entrar(elemento) {
        this.fila.push(elemento);
    }
    proximo() {
        if (this.fila.length >= 0 && this.fila[0]) {
            const primeiro = this.fila[0];
            this.fila.splice(0, 1);
            return primeiro;
        }
        else {
            return null;
        }
    }
    imprimir() {
        console.log(this.fila);
    }
}
const fila = new Fila('Gui', 'Pedro', 'Ana', 'Lu');
fila.imprimir();
fila.entrar('Rafael');
fila.imprimir();
console.log(fila.proximo());
console.log(fila.proximo());
fila.imprimir();
console.log(fila.proximo());
fila.imprimir();
console.log(fila.proximo());
fila.imprimir();
console.log(fila.proximo());
fila.imprimir();
console.log(fila.proximo());
fila.imprimir();
const noveFila = new Fila(1, 2, 3);
noveFila.imprimir();
console.log(noveFila.proximo());
noveFila.imprimir();
class Mapa {
    constructor() {
        this.itens = new Array();
    }
    obter(chave) {
        const resultado = this.itens.filter(i => i.chave === chave);
        return resultado ? resultado[0] : null;
    }
    colocar(par) {
        const encontrado = this.obter(par.chave);
        if (encontrado) {
            encontrado.valor = par.valor;
        }
        else {
            this.itens.push(par);
        }
    }
    limpar() {
        this.itens = new Array();
    }
    imprimir() {
        console.log(this.itens);
    }
}
const mapa = new Mapa();
mapa.colocar({ chave: 1, valor: 'Pedro' });
mapa.colocar({ chave: 2, valor: 'Rebeca' });
mapa.colocar({ chave: 3, valor: 'Maria' });
mapa.colocar({ chave: 1, valor: 'Gustavo' });
console.log(mapa.obter(2));
mapa.imprimir();
mapa.limpar();
mapa.imprimir();
mapa.imprimir();
//# sourceMappingURL=genericos.js.map