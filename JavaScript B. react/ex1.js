var pais = '';

var lancarmissil = function(){
    console.log("Lançando missil em 3...2...1");
}

if(pais == 'russia'){
    lancarmissil = function(){
        console.log("Usar telefone vermelho");
    }
}

if(pais == 'brasil'){
    lancarmissil = function(){
        console.log("Churrasco");
    }
}

lancarmissil();