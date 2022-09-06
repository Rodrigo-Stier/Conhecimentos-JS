var numeros = [10,18,1,15];

var calc = numeros.reduce(function(total,item){
    if(item > 10){
        total.push(item)
    }
    return total
},[])
console.log(calc)