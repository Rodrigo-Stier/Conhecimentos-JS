var amigo = {
    nome:'jorge',
    sexo:'M',
    peso: 67.3,
    engordar(n){
        var peso = amigo.peso
        this.peso += n
        if(amigo.peso >= peso){
            console.log('Engordou')
        }else{
            console.log('Emagreceu')
        }
    },
    transiçao(p){
        if(p != 1 ){
            this.sexo = 'F'
        }else{}
        console.log(amigo.sexo)
        
    }
}
amigo.transiçao(1)
amigo.engordar(2)
console.log(amigo.peso)
