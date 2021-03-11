const valor = parseInt(gets());

if (valor < 0 || valor > 1000000) console.log("Entrada inválida");
else {
  let cedulas = [100, 50, 20, 10, 5, 2, 1];

  let { notas } = cedulas.reduce((total, cedula) => {
    let valor = total.resto;
    let notas = Math.floor(valor / cedula);
    total.notas = [...total.notas, [notas, cedula]];
    total.resto = valor % cedula;
    return total;
  }, { notas: [], resto: valor })


  console.log(valor);
  for ([quantidade, cedula] of notas) {
    console.log(`${quantidade} nota(s) de ${currencyFormat(cedula)}`);
  }
}

function currencyFormat(num) {
  return 'R$ ' + num.toFixed(2).replace('.', ',')
}