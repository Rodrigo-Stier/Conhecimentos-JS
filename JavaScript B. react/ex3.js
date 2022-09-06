function fatorial(f){
    var soma = 1
    for(c = f;1< c; c--){
        soma *= c
    }
    return soma
}
console.log(fatorial(5))