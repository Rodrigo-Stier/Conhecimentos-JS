var numeros = [10,50,21,32,2,1,5,12,92,34,17,29];

var pares = function(item){
    return !(item%2)
}

var impares = function(item){
    return item % 2
}

var nPar = numeros.filter(pares)
var nImp = numeros.filter(impares)

console.log(nPar)
console.log(nImp)