"use strict";
var RH;
(function (RH) {
    let Areas;
    (function (Areas) {
        function salarioAnual(funcionario) {
            return funcionario.mensal * 12;
        }
        Areas.salarioAnual = salarioAnual;
    })(Areas = RH.Areas || (RH.Areas = {}));
})(RH || (RH = {}));
//# sourceMappingURL=RH.js.map