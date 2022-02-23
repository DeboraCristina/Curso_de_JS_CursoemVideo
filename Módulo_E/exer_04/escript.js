function gerar(){
  var num = document.querySelector('#num').value
  var res = document.querySelector('#res')
  var tabu = ''

  if (num == ''){
    alert('Preencha o campo corretamente')
  } else{
    num = Number(num)
    for (var i = 1; i <= 10; i++){
      var r = num*i
      if(i<10){
        if(num >= 1 && r<10){
          tabu += `<p>${num} x 0${i} = 0${r}</p>`
        } else{
          tabu += `<p>${num} x 0${i} = ${r}</p>`
        }
      } else{
        tabu += `<p>${num} x ${i} = ${r}</p>`
      }
    }
    res.innerHTML = `${tabu}`
  }
}

//<script src="escript.js" type="text/javascript" charset="utf-8"></script>
