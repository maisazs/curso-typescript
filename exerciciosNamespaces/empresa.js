"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empresa = void 0;
var Empresa;
(function (Empresa) {
    const funcionario = { nome: 'Maicom', mensal: 300 };
    function exibirSalario() {
        console.log(RH.Areas.salarioAnual(funcionario));
    }
    Empresa.exibirSalario = exibirSalario;
})(Empresa || (exports.Empresa = Empresa = {}));
//# sourceMappingURL=empresa.js.map