// 1)
// Criando uma função genérica simples:
// Implemente uma função chamada identity que aceita um valor de qualquer
//  tipo e retorna esse valor. Use generics para garantir que o tipo do 
// retorno seja o mesmo do argumento.


function identity<T>(value: T): T {
    return value
}

console.log(identity(12))





// 2)
// Restringindo um tipo genérico:
// Crie uma função chamada getLength que aceita um objeto com uma propriedade
// length. Use generics para garantir que o argumento seja um tipo que tenha 
// a propriedade length.


function getLength<T extends { lenght: number }>(obj: T): number {
    return 
} 