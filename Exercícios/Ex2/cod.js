function Verificar() { 
    var ano = document.querySelector('input#idade')
    var ano2 = Number(ano.value)
    var pres = new Date() 
    var pres1 = pres.getFullYear()
    var msg = document.querySelector('div#msg')
    var sex = document.getElementsByName('sex')
    var idade = pres1 - ano2
    var img = document.createElement('img')
    var jorge = '?'
    img.setAttribute('src', 'CM.png')
if(ano.value.length == 0 || ano.value >= pres1){
        window.alert('[ERRO] Preencha o campo em branco')
} else{
    if (sex[0].checked){
        if(idade <= 12){
            img.setAttribute('src', 'CM.png')
            var jorge = 'pivete'
        }else if(idade <= 27){
            img.setAttribute('src', 'JM.png') 
            var jorge ='jovem'
        }else if (idade <= 63){
            img.setAttribute('src', 'AM.png')
            var jorge ='tio'
        }else{
            img.setAttribute('src', 'IM.png') 
            var jorge ='velho'
        }
    }
    else if(sex[1].checked){
        if(idade <= 12){
            img.setAttribute('src', 'CF.png')
            var jorge ='pirralha'
        }else if(idade <= 27){
            img.setAttribute('src', 'JF.png')
            var jorge ='mina'
        }else if (idade <= 60){
            img.setAttribute('src', 'AF.png')
            var jorge ='tia'
        }else{
            img.setAttribute('src', 'IF.png')
            var jorge ='velha'
        }
    }
}
    msg.style.textAlign = 'center'
    msg.innerHTML = `detectamos um(a) ${jorge} de ${idade} anos`
    msg.appendChild(img)
}