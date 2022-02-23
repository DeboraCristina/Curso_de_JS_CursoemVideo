function mostra(){
  var i = document.querySelector('#ini').value
  var f = document.querySelector('#fim').value
  var p = document.querySelector('#passo').value
  var res = document.querySelector('#res')

  var text = ''
  var mos = false

  if (i == '' || f.length == 0 || p == ''){
    res.innerHTML = `<p>Sequencia: </p> <p> Não foi possível contar </p>`
    alert('Preencha os campos corretamente!')    
  }else{
    i = Number(i)
    f = Number(f)
    p = Number(p)
    if (p <= 0){
      p = 1
      alert('INVÁLIDO! Passo definido para 1.')
    }
    if(i <= f){
      for (var c = i; c <= f; c += p){
        text += ` ${c} 👉`
      }
    }else{
      for (var c = i; c >= f; c -= p){ // ou for (var c = f; c <= i; c += p)
        text += ` ${c} 👉`
      }
    }
    res.innerHTML = `<p>Sequencia: </p> <p> ${text} 🏁 </p>`
  }
}