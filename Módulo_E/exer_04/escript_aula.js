function gerar(){
    var num = document.querySelector('#num').value //caixa de número
    var tab = document.querySelector('#seln') // select
    var res = document.querySelector('#res') // div
    
    if(num == ''){
      alert('Erro!')
    } else{
      var n = Number(num)
      var c = 1
      tab.innerHTML = ``
      while(c <= 10){
        var item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        item.value = `tab${c}`
        tab.appendChild(item)
        c++
      }
    }

}

//<script src="escript_aula.js" type="text/javascript" charset="utf-8"></script>
