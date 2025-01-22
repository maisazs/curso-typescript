interface Endereco {
    rua: string,
    cidade: string
}

interface PessoaComEndereco extends Endereco {
    endereco: Endereco
}

const pessoalComEndereco: PessoaComEndereco = {
    rua: 'mal-me-quer',
    cidade: 'Ipatinga',

    endereco: {
        rua: 'mal-me-quer',
        cidade: 'Ipatinga',
    }
}

function exibirEndereco(pessoa: PessoaComEndereco): string {
    return `Rua: ${pessoa.endereco.rua}, cidade: ${pessoa.endereco.cidade}`
}
console.log(exibirEndereco(pessoalComEndereco))