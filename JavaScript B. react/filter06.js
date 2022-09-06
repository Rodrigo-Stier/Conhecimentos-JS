var convidados = [
    {nome: 'jorge', idade: 24, vip: true},
    {nome: 'cleide', idade: 17, vip: false},
    {nome: 'gilmar', idade: 32, vip:false},
    {nome: 'letucia', idade: 20, vip: true}
]

var vips = function(item){
    return item.vip
}

var fVip = convidados.filter(vips);
console.log(fVip)