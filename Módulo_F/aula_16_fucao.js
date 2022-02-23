// Função

/*
function acao(param){
    var res = param * 5
    return res //retorno 
}
acao(5) // chamada
*/
function epar(n){
    return n%2==0 ? 'par' : 'impar'
}

function soma(n1, n2){ // é obrigatório passar os 2 param
    return n1 + n2
}

function sub(n1 = 0, n2 = 0){ // Não é obrigatório passar os 2 param
    return n1 - n2
}

let v = function mu(x){
    return x*2
}

function fatorial(n){
    var f = 1
    for(let c = n; c > 1; c--){
        f *= c
    }
    return f
}

function fat(n){ // função recursiva
    /*if(n == 1){
        return 1
    } else{
        return n*fat(n-1)
    }*/
    return n == 1 ? 1 : n * fat(n-1)
}

console.log(`o numero 4 é ${epar(4)}`)
console.log(`a soma entre 5 e 8 é ${soma(5, 8)}`)
console.log(`a subtração entre 15 e 8 é ${sub(15, 8)}`)
console.log(`a subtração entre 15 e 0 é ${sub(15)}`)
console.log(`O dobro de 6 é ${v(6)}`)
console.log(`fatoria de 5 é ${fatorial(5)}`)
console.log(`fat de 5 é ${fat(5)}`)