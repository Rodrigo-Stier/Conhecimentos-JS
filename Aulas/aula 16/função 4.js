function fatorial(f){
    var fat = 1
    for (c = f; c > 1; c--){
        fat *= c
    }
    return fat
}
console.log(fatorial(5))