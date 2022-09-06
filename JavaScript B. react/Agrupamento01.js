/*
function groupBy(array,prop){
    var value = array.reduce(function(total,item){
        var key = item[prop]
        
        total[key] = (total[key] || []).concat(item)

        return total
    },{})
    return value 
}
*/
// código para agrupamento

var agrupado = groupBy(X/*variavel*/ , 'Y'/*categoria*/)
console.log(agrupado)
