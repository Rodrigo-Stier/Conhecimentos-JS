var convidados = [
    {nome: 'jorge', idade: 24, camarote: true, sexo:'M'},
    {nome: 'cleide', idade: 17, camarote: false, sexo:'F'},
    {nome: 'gilmar', idade: 32, camarote:false, sexo:'M'},
    {nome: 'letucia', idade: 20, camarote: true, sexo:'F'},
    {nome: 'joana', idade: 20, camarote: false, sexo:'F'},
    {nome: 'ernesto', idade: 16, camarote: true, sexo:'M'}

]

Array.prototype.groupBy = function(prop) {
    var value = this.reduce(function(total,item){
        var key = item[prop]
        
        total[key] = (total[key] || []).concat(item)

        return total
    },{})
    return value 
}
/*Usando "Array.prototype" faz com q a funcionalidade "groupBy" possa ser
acoplada a um array da mesma maneira q map/filter/reduce*/

var agrupado = convidados.filter(function(item){
    return item.idade >= 18
}).filter(function(item){
    return item.sexo == 'F'
}).groupBy('camarote')
/*aqui o agrupamento é acoplado da mesma maneira q filter, sem precisar 
definir outra variavel como parametro*/

console.log(agrupado)
