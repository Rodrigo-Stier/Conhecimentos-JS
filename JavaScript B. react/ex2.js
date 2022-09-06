function potencia(base , expoente){
    if (expoente == undefined){
        expoente = 1;
    }
    var res = 1;
    for(var cont = 0; cont < expoente;cont++){
        res *= base;
    }
    return res;
}
console.log(potencia(2))
console.log(potencia(2,3))