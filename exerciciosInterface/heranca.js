"use strict";
const pessoalComEndereco = {
    rua: 'mal-me-quer',
    cidade: 'Ipatinga',
    endereco: {
        rua: 'mal-me-quer',
        cidade: 'Ipatinga',
    }
};
function exibirEndereco(pessoa) {
    return `Rua: ${pessoa.endereco.rua}, cidade: ${pessoa.endereco.cidade}`;
}
console.log(exibirEndereco(pessoalComEndereco));
//# sourceMappingURL=heranca.js.map