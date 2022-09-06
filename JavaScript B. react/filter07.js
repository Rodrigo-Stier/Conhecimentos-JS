var filmes = [
    {titulo:'Shrek', duração:'123', nota:'10'},
    {titulo:'Shrek 2', duração:'143', nota:'9'},
    {titulo:'Shrek 3', duração:'121', nota:'10'},
    {titulo:'Shrek 4', duração:'132', nota:'9.5'},
    {titulo:'Vingadores', duração:'500', nota:'4.5'}
]

var corte = 7

var bom = function(item){
    return item.nota >= corte 
}
var ruim = function(item){
    return item.nota < corte
}

var fRuim = filmes.filter(ruim)
var fBom = filmes.filter(bom)

console.log('Ruim')
console.log(fRuim)
console.log('Bom')
console.log(fBom)