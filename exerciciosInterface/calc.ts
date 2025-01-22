interface Calculadora {
    somar(
        a: number,
        b: number
    ): number,
    subtrair(
        a: number,
        b: number
    ): number
}

class Calcular implements Calculadora {
    somar(a: number, b: number): number {
        return a + b
    }
    subtrair(a: number, b: number): number {
        return a - b
    }
}


const calculox = new Calcular
console.log(calculox.somar(2, 2))

console.log(calculox.subtrair(2, 7))