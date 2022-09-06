function potencia(base , expoente){
    var res = 1;
    for(var cont = 0; cont < expoente;cont++){
        res *= base;
    }
    return res;
}

function potencia(base , expoente){

    
    if(expoente == 0){
        return 1;
    }

    return base * potencia(base, expoente - 1)
}

console.log(potencia(34,76))