interface Produto1 {
    id: number,
    nome: string,
    preco: number
}

const produto: Produto1 = {
    id: 1,
    nome: 'Blusa',
    preco: 50
}

console.log(produto.id)
console.log(produto.nome)
console.log(produto.preco)