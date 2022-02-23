var l = []
var res = document.querySelector('#res')

function soma(a){
  var s = 0
  for(i in a){
    s += Number(a[i])
  }
  return s
}

function maior(a){
  var m = 0
  m = Number(a[0])
  for(i in a){
    if(Number(a[i]) > m){
      m = Number(a[i])
    }
  }
  return m
}

function menor(a){
  var m = 0
  m = Number(a[0])
  for(i in a){
    if(Number(a[i]) < m){
      m = Number(a[i])
    }
  }
  return m
}

function media(a){
  var s = 0
  for(i in a){
    s += Number(a[i])
  }
  média = s / a.length
  return média
}

function add(){
  var numeros = document.querySelector('#num')
  var num = numeros.value
  var tab = document.querySelector('#sel')

  res.innerHTML = ''

  if(num == '' || Number(num) < 1 || Number(num) > 100){
    alert('Preencha o campo corretamnte.')
  } else{
    num = Number(num)
    tem = l.indexOf(Number(num))
    if(tem == -1){
      l.push(num)
    }else{
      alert('Já foi adicionado.')
    }
    
    tab.innerHTML = ""
    
    for(n in l){
      item = document.createElement('option')
      item.text = `Número ${l[n]} adicionado`
      tab.appendChild(item)
    }
    
    numeros.value = ''
    numeros.focus()
  }
// ------------ //
}

function fim(){
  if(l.length == 0){
    alert('erro')
  } else{
    /*ao invez das fuções*/
    var total = l.length
    var maior = l[0]
    var menor = l[0]
    var soma = 0
    for(i in l){
      soma += l[i]
      if(l[i] > maior){
        maior = l[i]
      }
      if(l[i] < menor){
        menor = l[i]
      }
    }
    var media = soma/total
    res.innerHTML = `
  <p>Foram adicionados ${total} números.</p>
  <p>O maior deles é ${maior}.</p>
  <p>O menor deles é ${menor}.</p>
  <p>A soma entre eles é ${soma}.</p>
  <p>A média entre eles é ${media.toFixed(2)}.</p>
  `

    /* texto com funções
    res.innerHTML = `
  <p>Foram adicionados ${l.length} números.</p>
  <p>O maior deles é ${maior(l)}.</p>
  <p>O menor deles é ${menor(l)}.</p>
  <p>A soma entre eles é ${soma(l)}.</p>
  <p>A média entre eles é ${media(l).toFixed(2)}.</p>
  `*/
  }
}