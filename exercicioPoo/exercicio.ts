// Classe Carro

class CarroChat {
    public velocidade: number = 0

    constructor (
        public marca: string,
        public modelo: string,
        public ano: number,
    ) {}

    public acelerar(): number {
        return this.velocidade = this.velocidade + 10
    }
    
    public frear(): number {
        return this.velocidade = this.velocidade - 10
    }

    public getDetalhes(): void {
        console.log(`Marca: ${this.marca} Modelo: ${this.modelo} Ano: ${this.ano} Velocidade: ${this.velocidade}`)
    }
}

const carro2 = new CarroChat('Corolla', 'Toyota', 2014)
carro2.getDetalhes()
carro2.acelerar()
carro2.getDetalhes()
carro2.acelerar()
carro2.getDetalhes()
carro2.frear()
carro2.getDetalhes()





// Herança: Classe Animal e subclasses

abstract class Animal {
    constructor (
        public nome: string
    ) {}

    abstract fazerSom(): void
}

class Cachorro extends Animal {
    fazerSom(): void {
        console.log('Au Au')
    }
}

class Gato extends Animal {
    fazerSom(): void {
        console.log('Miau')
    }
}

const gato = new Gato('Bartolomeu')
console.log(gato.nome)
console.log(gato.fazerSom())

const cachorro = new Cachorro('Toto')
console.log(cachorro.nome)
console.log(cachorro.fazerSom())





// Encapsulamento: Banco

class ContaBancaria {
    constructor (
        public titular: string,
        public saldo: number
    ) {}

    public depositar(valor: number): void {
        console.log(`Saldo: R$${this.saldo = this.saldo + valor}`)
    }

    public sacar(valor: number): void {
        console.log(`Saldo: R$${this.saldo = this.saldo - valor}`)
    }

    get getSaldo(): number {
        return this.saldo
    }
}

const conta1 = new ContaBancaria('Mayza', -10000000)
conta1.depositar(100)
conta1.depositar(25400025)
conta1.sacar(10)
console.log(conta1.getSaldo)





// Abstração: Sistema de Pagamento

abstract class Pagamento {
    constructor (
        public valor: number
    ) {}

    abstract processarPagamento(): void
}

class CartaoCredito extends Pagamento {
    processarPagamento(): void {
        console.log('Pagamento processado através do cartão de crédito!')
    }
}

class Boleto extends Pagamento {
    processarPagamento(): void {
        console.log('Pagamento processado através do boleto!')
    }
}

const conta2 = new CartaoCredito(1000)
console.log(conta2.valor)
conta2.processarPagamento()

const conta3 = new Boleto(-9999999)
console.log(conta3.valor)
conta3.processarPagamento()





// Polimorfismo: Forma Geométrica

abstract class FormaGeometrica {
    abstract calcularArea(): number
}

class Circulo extends FormaGeometrica {
    constructor ( public raio: number ) { super() }

    calcularArea(): number {
        return 3.1416 * this.raio**2
    }
}

class Retangulo2 extends FormaGeometrica {
    constructor ( 
        public largura: number,
        public altura: number 
    ) { super() }

    calcularArea(): number {
        return this.largura * this.altura
    }
}

const circulo1 = new Circulo(4)
console.log(circulo1.calcularArea())
console.log(circulo1.raio)

const retangulo2 = new Retangulo2(2, 3)
console.log(retangulo2.calcularArea())
console.log(retangulo2.altura)
console.log(retangulo2.largura)