var a = [2,3,6,1,2,9,5]
var b = a.indexOf(9)
/*for(var pos =0 ;pos< a.length;pos++){
    console.log(a[pos])
}*/
for( c in a){
    console.log(`${a[c]} esta em ${c} `)
}
console.log(`a posiçao de 9 é ${b}`)