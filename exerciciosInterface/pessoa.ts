interface Pessoa2 {
    nome: string,
    idade1: number,
    sobrenome: string,
    profissao?: string,
}

function saudarPessoa(pessoa: Pessoa2): string {
    if (pessoa.profissao) {
        return `Meu nome é ${pessoa.nome}, tenho ${pessoa.idade1} anos e sou ${pessoa.profissao}`
    } else {
        return `Meu nome é ${pessoa.nome}, tenho ${pessoa.idade1} anos`
    }
}

const momo: Pessoa2 = {
    nome: 'felipe',
    idade1: 22,
    sobrenome: 'amor da minha vida',
    profissao: 'Designer'
}

console.log(saudarPessoa(momo))