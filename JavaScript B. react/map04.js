var nomes = [
    {nome:'jorGe', vip: true, idade:'19'},
    {nome:'eVErson', vip: false,idade:'71'},
    {nome:'jAmaL', vip: false,idade:'36'},
    {nome:'roDiNelsOn',vip:true,idade:'82'}
];
//Para n sumir com os outros objetos do array, ultilizamos 'Object.assign(x,y). Assim alterando somente o o elemento e mantendo os outros objetos.
var convidados = nomes.map(function(item){
    return Object.assign(item, {nome:item.nome.toUpperCase()});
});
//O comando "Obejct.assign(origem,destino)", tem como funcionalidade transformar os elementos da origem em algo q é determinado no destino