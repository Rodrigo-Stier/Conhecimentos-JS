var numeros = [1,2,3,4,5,6,7,8,9,10]

var cal = numeros.reduce(function(total,item){
    return total.concat(item*2);
},[/*assim, o "total", assume um array vazio como primeira instancia*/]);

/*Aqui a funcionalidade "reduce()" assume a mesma funcão de "map()", usando "concat()" 
para concatenar o 'item' e depois executar a operação.*/

console.log(cal)