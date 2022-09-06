var convidados = [
    {nome: 'jorge', idade: 24, camarote: true},
    {nome: 'cleide', idade: 17, camarote: false},
    {nome: 'gilmar', idade: 32, camarote:false},
    {nome: 'letucia', idade: 20, camarote: true},
    {nome: 'joana', idade: 20, camarote: false},
    {nome: 'ernesto', idade: 16, camarote: true}

]

function groupBy(array,prop){
    var value = array.reduce(function(total,item){
        var key = item[prop]
        
        total[key] = (total[key] || []).concat(item)

        return total
    },{})
    return value 
}

var idadeMinima = convidados.filter(function(item){
    return item.idade >= 18
})

/* A função "groupBy()" é usada para agrupar elementos com categorias
semelhantes*/

var agrupado = groupBy(idadeMinima , 'camarote')
console.log(agrupado)
