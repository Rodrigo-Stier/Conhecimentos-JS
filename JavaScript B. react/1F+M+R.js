var numeros = [0,32,44,45,47,91,93,121];

var numerosDpares = numeros.filter(function(item){
    return !(item % 2);
}).map(function(item){
    return item*2
})    

var numerosDimpar = numeros.filter(function(item){
    return (item % 2);
}).map(function(item){
    return item*2
})    

console.log(numerosDimpar)
console.log(numerosDpares)