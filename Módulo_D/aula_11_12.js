const { PassThrough } = require("stream")

var agora = new Date()
// ver hora do sistema
var hora = agora.getHours()
// ver (número do) dia da semana
var sem = agora.getDay()

var idade = 18

console.log(`Você tem ` + idade + 'anos')

// Condições Simples
console.log('Simples: ')
if (idade < 16){
    console.log('não vota')
}

// Condições Compostas
console.log('Composta: ')
if (idade < 16){
    console.log('não vota')
} else{
    console.log('vota obrigatório')
}

// Condições Aninhadas
console.log('Aninhada_1: ')
if (idade < 16){
    console.log('não vota')
} else{
    if (idade < 18 || idade > 65){
        console.log('voto opcional')
    } else{
        console.log('vota obrigatório')
    }
}

console.log('Aninhada_2: ')
if (idade < 16){
    console.log('não vota')
} else if (idade < 18 || idade > 65){
        console.log('voto opcional')
    } 
else{
    console.log('vota obrigatório')
}

// Switch
console.log('Switch: ')
switch (sem){
    case 0:
        console.log('Domingo')
        break
	case 1:
        console.log('Segunda')
        break
	case 2:
        console.log('Terça')
        break
	case 3:
        console.log('Quarta')
        break
	case 4:
        console.log('Quinta')
        break
	case 5:
        console.log('Sexta')
        break
	case 6:
        console.log('Sábado')
        break
	
}



