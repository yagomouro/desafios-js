let valor1 = parseInt(gets());
let valor2 = parseInt(gets());
let valor3 = parseFloat(gets());
let salary = parseFloat(valor2 * valor3).toFixed(2); // multiplica o valor2 e o valor3 e passa para string com 2 casas decimais
console.log("NUMBER = " + valor1);
console.log("SALARY = U$ " + salary);