var numeros = [10,50,21,32,2,1,5,12,92,34,17,29];

var M10 = function(item){
    return item > 10
}
    /*
    ultiliza o proprio metodo comparativo do JS.
    EX: item = 9, item > 10 == false
        item = 12, item > 10 == true
    */ 

var m10 = numeros.filter(M10);
console.log(m10);