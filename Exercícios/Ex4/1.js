function clicar(){
var i = document.getElementById('I')
var f = document.getElementById('F')
var passo = document.getElementById('P')
var res = document.getElementById('res')
var ia = Number(i.value)
var fa = Number(f.value)
var pa = Number(passo.value)    
if(pa <= 0){
    window.alert('passo invalido')
}else{
    if(f.value.length == 0 || i.value.length == 0 || passo.value.length <= 0){
        window.alert('ERRO')
        res.innerHTML = ''
    }else if(ia >= fa){
        for(ia;ia >= fa;ia = ia-pa){
        res.innerHTML += ` ${ia} \u{1F449}` 
        }
    }else{
        res.innerHTML = 'contando'
        for(ia;ia <= fa;ia = ia+pa){
        res.innerHTML += ` ${ia} \u{1F449}` 
        }
        res.innerHTML += 'fim'
}}}