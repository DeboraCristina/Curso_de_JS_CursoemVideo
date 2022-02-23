var agora = new Date
var hora = agora.getHours()

var titulo = document.querySelector("#titulo")

var img = document.querySelector("#img")

var qhora = document.querySelector("#qhora")



var ttitulo = "bom"
var cor = "red"
var nomeimg = "placeholder_03"

if (hora < 12){
	cor = "rgb(235,158,39)"
	ttitulo = "Bom dia!"
	nomeimg = "manha"
}
else if (hora < 19){
	cor = "rgb(195,97,80)"
	ttitulo = "Boa tarde!"
	nomeimg = "tarde"
}
else if (hora > 19 || hora < 6){
	cor = "rgb(30,49,79)"
	ttitulo = "Boa noite!"
	nomeimg = "noite"
}

titulo.innerText = ttitulo

qhora.innerHTML = `São ${hora} horas`

img.src = "imagens/" + nomeimg + ".png"

document.body.style.backgroundColor = cor
//alert("")