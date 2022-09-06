function carregar() {
var b = document.querySelector('body#jorge')
var img = window.document.getElementById('img')
var msg = window.document.getElementById('msg')
var horaA = new Date()
var hora = horaA.getHours()
var minA = new Date()
var min = minA.getMinutes()

if(hora  > 12 ){
        var hpm = hora - 12 
    }else{
        var hpm = hora
}


if (hora < 6 && hora >= 1) {
        msg.innerHTML = `É ${hora} e ${min} da manha`
        img.src ='noite.png'
        b.style.background = '#003f56'
    }else if (hora < 12 && hora > 0 ) {
        msg.innerHTML = `É ${hora} e ${min} da manha`
        img.src = 'tarde.png'
        b.style.background = '#bddfe6'
    }else if (hora == 12 && min == 00){
        msg.innerHTML = `É Meio dia`
        img.src = 'tarde.png'
        b.style.background = '#bddfe6'
    }else if (hora == 12 ){
        msg.innerHTML = `É Meio dia e ${min}`  
        img.src = 'tarde.png'
        b.style.background = '#bddfe6'
    }else if (hpm == 12  && min == 00){
        msg.innerHTML = `É Meia noite`
        img.src ='noite.png'
        b.style.background = '#003f56'
    }else if (hpm == 12 || hora == 00){
        msg.innerHTML = `É Meia noite e ${min}`
        img.src ='noite.png'
        b.style.background = '#003f56'
    }else if (hpm <= 6 && hora > 12){
        msg.innerHTML = `É ${hpm} e ${min} da tarde`
        img.src ='manha.png'
        b.style.background = 'rgb(245, 188, 124)'
    }else { 
        msg.innerHTML = `São ${hpm} e ${min} da noite`
        img.src = 'noite.png'
        b.style.background = '#003f56'
 }
}