interface Funcionario {
    nome: string,
    mensal: number
}

namespace RH {
    export namespace Areas {
        export function salarioAnual(funcionario: Funcionario){
            return funcionario.mensal * 12
        }
    }
}