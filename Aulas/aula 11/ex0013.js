var horaA = new Date()
var hora = horaA.getHours()
var hpm = hora - 12 
var minA = new Date()
var min = minA.getMinutes() 
if (hora < 12 && hora > 0 ) {
        console.log(`É ${hora}:${min} da manha`)
    }else if (hora == 12 && min == 00){
        console.log(`É Meio dia`) 
    }else if (hora == 12){
        console.log(`É Meio dia e ${min}`)               
    }else if (hora == 0  && min == 00){
        console.log(`É Meia noite`)
    }else if (hora == 0 ){
        console.log(`É Meia noite e ${min}`)
    }else if (hpm <= 6){
        console.log(`É ${hpm}:${min} da tarde`)
    } else { 
        console.log(`São ${hpm}:${min} da noite`)
}
