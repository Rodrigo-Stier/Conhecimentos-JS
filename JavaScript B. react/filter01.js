var numeros = [10,50,21,32,2,1,5,12,92,34,17,29];

var M10 = function(item){
    // "item" serve pra analisar todos os elementos dentro do array
    if (item > 10){
        return true
    }else{
        return false
    }
}
/*
se retorna "true", o elemento é incluido dentro do array;
se retorna "false", então o elemento não é incluso.
*/

var m10 = numeros.filter(M10);
//FILTER: possibilita o filtro dos elementos do array 
console.log(m10);