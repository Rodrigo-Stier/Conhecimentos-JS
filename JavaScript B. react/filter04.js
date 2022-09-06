var nomes = ['jorge','milto','zuleica','alanderson','everson','jordso']

var convidados = nomes.filter(function(item){
    return item.charAt(0) == 'j';
})
//comando "charAt(x)" detecta o caracter de x posição na string.
console.log(convidados)