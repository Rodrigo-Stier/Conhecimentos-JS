var numeros = [10,50,21,32,2,1,5,12,92,34,17,29];

var m10 = numeros.filter(function(item){
    return item > 10
});
// a função é adicionada no proprio parametro, se tonando uma função anonima.
console.log(m10);