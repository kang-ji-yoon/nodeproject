
// main.js
const cal = require("./3_module");

const calc3 = require("./3_module2");

console.log(cal.calc.add(1,2));
console.log(cal.calc.sub(1,2));

console.log(calc3.mul(2,3));
console.log(calc3.div(2,3));

console.log(exports===module.exports);
