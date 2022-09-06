var nomes = [
    {nome:'jorGe', vip: true},
    {nome:'eVErson', vip: false},
    {nome:'jAmaL', vip: false},
    {nome:'roDiNelsOn',vip:true}
];

var convidados = nomes.filter(function(item){
    return item.vip == true
});

var arrumar = convidados.map(function(item){
    return item.nome.toUpperCase()
});



console.log(arrumar);