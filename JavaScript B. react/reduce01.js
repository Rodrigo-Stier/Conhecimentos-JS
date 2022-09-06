var valores = [1.5,2,4,10];

var somatoria = valores.reduce(function(total,item){
   return total + item;
})
// REDUCE: possibilita os elementos interagirem entre eles 

var media = somatoria/valores.length;

console.log(somatoria)