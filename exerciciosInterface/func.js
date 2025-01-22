"use strict";
let sum;
let sub;
let mult;
let div;
sum = function (numA, numB) {
    return numA + numB;
};
sub = function (numA, numB) {
    return numA - numB;
};
mult = function (numA, numB) {
    return numA * numB;
};
div = function (numA, numB) {
    return numA / numB;
};
const na = Number(prompt('Digite o número 1: '));
const nb = Number(prompt('Digite o número 2: '));
console.log(sum(na, nb));
console.log(sub(na, nb));
console.log(mult(na, nb));
console.log(div(na, nb));
//# sourceMappingURL=func.js.map