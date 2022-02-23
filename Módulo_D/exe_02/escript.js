var agora = new Date()
var ano = Number(agora.getFullYear())

var d2 = document.querySelector("#diva")

function mostra(){
	var data = Number(document.querySelector("#data").value)
	var rsex = document.getElementsByName("rsex")
	
	var idade = ano - data
	var img = "menina"
	var sex = rsex[0].checked? "menina" : "menino"
	
	if (data > ano){
		alert("algo está errado")
	}
	
	else{
		if (sex == "menina"){
			if (idade <= 13){
				img = "menina"
			}
			else if(idade <= 40){
				img = "muie"
			}
			else if (idade <= 100){
				img = "veia"
			}
		}
		else{
			if (idade <= 13){
				img = "menino"
			}
			else if(idade <= 40){
				img = "homi"
			}
			else if (idade <= 100){
				img = "veio"
			}
		}
		if (idade > 100){
			img = "morto"
		}
		//
		var texto = "imagens/" + img + ".png"
		d2.innerHTML = `Encontrei ${sex} de ${idade} anos.
		<br> <br> <img src=${texto} alt="" />`
	}
	
	
	
	
	
}

