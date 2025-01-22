export namespace Empresa {
    const funcionario: Funcionario = { nome: 'Maicom', mensal: 300 }
    
    export function exibirSalario(): void {
        console.log(RH.Areas.salarioAnual(funcionario))
    }
}