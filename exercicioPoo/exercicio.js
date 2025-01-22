"use strict";
// Classe Carro
class CarroChat {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.velocidade = 0;
    }
    acelerar() {
        return this.velocidade = this.velocidade + 10;
    }
    frear() {
        return this.velocidade = this.velocidade - 10;
    }
    getDetalhes() {
        console.log(`Marca: ${this.marca} Modelo: ${this.modelo} Ano: ${this.ano} Velocidade: ${this.velocidade}`);
    }
}
const carro2 = new CarroChat('Corolla', 'Toyota', 2014);
carro2.getDetalhes();
carro2.acelerar();
carro2.getDetalhes();
carro2.acelerar();
carro2.getDetalhes();
carro2.frear();
carro2.getDetalhes();
// Herança: Classe Animal e subclasses
class Animal {
    constructor(nome) {
        this.nome = nome;
    }
}
class Cachorro extends Animal {
    fazerSom() {
        console.log('Au Au');
    }
}
class Gato extends Animal {
    fazerSom() {
        console.log('Miau');
    }
}
const gato = new Gato('Bartolomeu');
console.log(gato.nome);
console.log(gato.fazerSom());
const cachorro = new Cachorro('Toto');
console.log(cachorro.nome);
console.log(cachorro.fazerSom());
// Encapsulamento: Banco
class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    depositar(valor) {
        console.log(`Saldo: R$${this.saldo = this.saldo + valor}`);
    }
    sacar(valor) {
        console.log(`Saldo: R$${this.saldo = this.saldo - valor}`);
    }
    get getSaldo() {
        return this.saldo;
    }
}
const conta1 = new ContaBancaria('Mayza', -10000000);
conta1.depositar(100);
conta1.depositar(25400025);
conta1.sacar(10);
console.log(conta1.getSaldo);
// Abstração: Sistema de Pagamento
class Pagamento {
    constructor(valor) {
        this.valor = valor;
    }
}
class CartaoCredito extends Pagamento {
    processarPagamento() {
        console.log('Pagamento processado através do cartão de crédito!');
    }
}
class Boleto extends Pagamento {
    processarPagamento() {
        console.log('Pagamento processado através do boleto!');
    }
}
const conta2 = new CartaoCredito(1000);
console.log(conta2.valor);
conta2.processarPagamento();
const conta3 = new Boleto(-9999999);
console.log(conta3.valor);
conta3.processarPagamento();
// Polimorfismo: Forma Geométrica
class FormaGeometrica {
}
class Circulo extends FormaGeometrica {
    constructor(raio) {
        super();
        this.raio = raio;
    }
    calcularArea() {
        return 3.1416 * Math.pow(this.raio, 2);
    }
}
class Retangulo2 extends FormaGeometrica {
    constructor(largura, altura) {
        super();
        this.largura = largura;
        this.altura = altura;
    }
    calcularArea() {
        return this.largura * this.altura;
    }
}
const circulo1 = new Circulo(4);
console.log(circulo1.calcularArea());
console.log(circulo1.raio);
const retangulo2 = new Retangulo2(2, 3);
console.log(retangulo2.calcularArea());
console.log(retangulo2.altura);
console.log(retangulo2.largura);
//# sourceMappingURL=exercicio.js.map