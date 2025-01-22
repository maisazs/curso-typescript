interface Operacao {
    (numA: number, numB: number): number
}

let sum: Operacao
let sub: Operacao
let mult: Operacao
let div: Operacao

sum = function(numA: number, numB: number): number {
    return numA + numB
}

sub = function(numA: number, numB: number): number {
    return numA - numB
}

mult = function(numA: number, numB: number): number {
    return numA * numB
}

div = function(numA: number, numB: number): number {
    return numA / numB
}

const na = Number(prompt('Digite o número 1: '))
const nb = Number(prompt('Digite o número 2: '))

console.log(sum(na, nb))
console.log(sub(na, nb))
console.log(mult(na, nb))
console.log(div(na, nb))