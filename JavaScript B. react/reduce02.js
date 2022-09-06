var valores = [1.5,2,4,10];

var somatoria = valores.reduce(function(total,item,indice,array){
    total += item;
    if(indice == array.length - 1){
        return total / array.length
    }
    return total 
})

/*outra maneira de pedir a media da operação realizada com os elementos;
ultilizando o 'indice' e 'array' dentro da function*/

console.log(somatoria)