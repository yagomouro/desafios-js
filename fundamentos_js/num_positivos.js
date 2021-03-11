var count = 0;
for (i=1; i<=6; i++){
  var valor = parseFloat(gets());
  if(valor > 0){
    count = count + 1;
  }
}
console.log(count + " valores positivos");