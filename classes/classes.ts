class Data {
    //publico por padrao
    dia: number
    public mes: number
    ano: number

    constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}

const aniversario = new Data(3, 11, 1991)
aniversario.dia = 4
console.log(aniversario.dia)
console.log(aniversario)

const casamento = new Data //posso omitir os ()
casamento.ano = 2017
console.log(casamento)





class DataEsperta {
    constructor(public dia: number = 1, public mes: number = 1, public ano: number = 1970) {
    }
}

const aniversarioEsperto = new DataEsperta(3, 11, 1991)
aniversario.dia = 4
console.log(aniversario.dia)
console.log(aniversario)

const casamentoEsperto = new DataEsperta //posso omitir os ()
casamento.ano = 2017
console.log(casamento)





// desafio
// atributos: nome, preco, desconto
// criiar o construtor
/// o desconto é opcional (valor padrão é 0)
// criar dois produtos: passando dois e três params

class Produto{
    constructor(
        public nome: string, 
        public preco: number,
        public desconto: number = 0
    ) {}

    public precoComDesconto(): number {
        return this.preco * (1 - this.desconto)
    }

    public resumo(): string{
        return `${this.nome} custa R$${this.precoComDesconto()} (${this.desconto * 100}% off)`
    }

    // criar método precoComDesconto
    // quais são os parâmetros e o retorno?
    // alterar método resumo para mostrar o preço com desconto
}

const produtoSemDesconto = new Produto("Shampoo Kerastáse", 200.9)
produtoSemDesconto.desconto = 0.05
console.log(produtoSemDesconto.resumo())

const produtoComDesconto = new Produto("Vinil", 20, 0.4)
console.log(produtoComDesconto.resumo())


//atributos privados podem ser acessados apenas dentro da classe, atributos publicos podem ser acessados dentro e fora da classe e atributos protected podem ser acessados dentro da classe e dentro de classes que são herança
class Carro{
    private velocidadeAtual: number = 0
    constructor(
        public marca: string,
        public modelo: string,
        private velocidadeMaxima: number = 200
    ) {}

    protected alterarVelocidade(delta: number): number {
        const novaVelocidade = this.velocidadeAtual + delta
        const velocidadeValida = novaVelocidade >=0 && novaVelocidade <= this.velocidadeMaxima

        if(velocidadeValida) {
            this.velocidadeAtual = novaVelocidade
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
        }

        return this.velocidadeAtual
    }

    public acelerar(): number{
        return this.alterarVelocidade(5)
    }

    public frear(): number{
        return this.alterarVelocidade(-5)
    }
}

const carro1 = new Carro('Ford', 'Ka', 185)
Array(50).fill(0).forEach(() => carro1.acelerar())
console.log(carro1.acelerar())

Array(50).fill(0).forEach(() => carro1.frear())
console.log(carro1.frear())

// // simular erros
// carro1.velocidadeAtual = 300
// console.log('atual -> ' + carro1.velocidadeAtual)

// carro1.velocidadeMaxima = 500
// console.log('máxima -> ' + carro1.velocidadeMaxima)

// carro1.alterarVelocidade(150)
// console.log('atual -> ' + carro1.velocidadeAtual)

//extends -> herança
class Ferrari extends Carro {
    constructor(
        modelo: string,
        velocidadeMaxima:number) {
            super('Ferrari', modelo, velocidadeMaxima)
        }

    public acelerar(): number{
        return this.alterarVelocidade(20)
    }

    public frear(): number{
        return this.alterarVelocidade(-15)
    }
}

const f40 = new Ferrari('F40', 324)
console.log(`${f40.marca} ${f40.modelo}`)
console.log(f40.acelerar())
console.log(f40.frear())





// Getters e Setters
class Pessoa {
    private _idade: number = 0
    
    get idade(): number {
        return this._idade
    }

    set idade(valor: number) {
        if(valor >= 0 && valor <= 120) {
            this._idade = valor
        }
    }
}

const pessoa1 = new Pessoa
pessoa1.idade = 10
console.log(pessoa1.idade)





// atributos estaticos não podem ser mudados, seus valores são os mesmos definidos dentro da classe
//Atributos e métodos estáticos
class Matematica {
    static PI: number = 3.1416

    static areaCirc(raio: number): number {
        return Matematica.PI * raio * raio
    }
}

// const m1 = new Matematica()
// m1.PI = 4.2
// console.log(m1.areaCirc(4))

console.log(Matematica.areaCirc(4))




// Classe Abstrata
// classes abstratas não podem ser instanciadas, apenas as classes concretas - serve de classe pai

abstract class Calculo {
    protected resultado: number = 0

    abstract executar(...numeros: number[]): void
    
    getResultado(): number {
        return this.resultado
    }
}

class Soma extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => t + a)
    }
}

class Multiplicar extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => t * a)
    }
}

let c1:Calculo = new Soma()
c1.executar(2, 3, 4, 5)
console.log(c1.getResultado())

let c2 = new Multiplicar()
c1.executar(2, 3, 4, 5)
console.log(c2.getResultado())





class Unico {
    private static instance: Unico = new Unico
    private constructor() {}

    static getInstance(): Unico {
        return Unico.instance
    }

    agora() {
        return new Date
    }
}

// const errado = new Unico()
console.log(Unico.getInstance().agora())





// Somente leitura
class Aviao {
    public readonly modelo: string

    constructor(
        modelo: string, 
        public readonly prefixo: string
    ) {
        this.modelo = modelo
    }
}

const turboHelice = new Aviao('Tu-114', 'PT-ABC')
// turboHelice.modelo = 'DC-8'
// turboHelice.prefixo = 'PT-DEF'
console.log(turboHelice)