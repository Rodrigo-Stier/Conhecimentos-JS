function tabuada(){
    var num = document.querySelector('input#num')
    var tab = document.getElementById('seltab')
    var n = Number(num.value)
    if(num.value.length == 0){
        window.alert('ERRO')
    }else{
        var c = 1
        tab.innerHTML = ''
        while (c <= 10){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}