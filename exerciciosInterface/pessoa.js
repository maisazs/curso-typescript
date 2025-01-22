"use strict";
function saudarPessoa(pessoa) {
    if (pessoa.profissao) {
        return `Meu nome é ${pessoa.nome}, tenho ${pessoa.idade1} anos e sou ${pessoa.profissao}`;
    }
    else {
        return `Meu nome é ${pessoa.nome}, tenho ${pessoa.idade1} anos`;
    }
}
const momo = {
    nome: 'felipe',
    idade1: 22,
    sobrenome: 'amor da minha vida',
    profissao: 'Designer'
};
console.log(saudarPessoa(momo));
//# sourceMappingURL=pessoa.js.map