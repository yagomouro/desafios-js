var par = 0;
var imp = 0;
var pos = 0;
var neg = 0;

for (i = 1; i <= 5; i++) {
    var valor = parseInt(gets());
    if (valor % 2 == 0) {
        par = par + 1;
    } else {
        imp = imp + 1;
    }
    if (valor > 0) {
        pos = pos + 1;
    } else {
        if (valor < 0) {
            neg = neg + 1;
        }
    }
}

console.log(par + " valor(es) par(es)");
console.log(imp + " valor(es) impar(es)");
console.log(pos + " valor(es) positivo(s)");
console.log(neg + " valor(es) negativo(s)");