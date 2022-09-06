var num = document.querySelector('input#fnum')
var lista = document.querySelector('select#fLista')
var fin = document.querySelector('input#fin')
var res = document.querySelector('div#res')
var valores = []

function umnumero(n){
    if(Number(n)>= 1 && Number(n <= 100)){
        return true
    }else{
        return false
    }
}

function nalista(n , l){
    if(l.indexOf(Number(n)) != -1) {
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(umnumero(num.value) && !nalista(num.value , valores)){
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Valor invalido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}
function finalizar() {
    if(valores.length == 0){
        window.alert('Preencha o campo em branco')
    }else{
        valores.sort((a,b)=>{return a-b})
        var tot = valores.length
        var menor = valores[0]
        var maior = valores[tot-1]
        var soma = 0
        for(pos in valores){
            soma += valores[pos]
        }
        var media = soma/tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p> A soma dos valores ${soma}</p>`
        res.innerHTML += `<p> A media dos valores ${media}</p>`
    }
}
