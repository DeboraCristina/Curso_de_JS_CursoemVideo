// Variáveis Compostas

var num = [1, 4, 5, 8] // definindo um array

num[4] = 3 //add em uma posição expecifica
//num.sort() // organiza o array de forma crescente
num.push(2) // add no final
num.pop() // remove ultimo item
num.shift() // remove primeiro item
num.unshift() // add ao inicio
console.log(num.length) // mostra o tamanho do array

console.log(`vetor na posição 3 é ${num[3]}`) //mostrar um valor expecifico

var txt
for (let p = 0; p < num.length; p++){ // formatar o array
    console.log(`${num[p]}`)
}
for (let pos in num) { // formatar o array
    console.log(`posi ${pos} tem o valor ${num[pos]}`)
}

console.log(`o valor 5 está no index ${num.indexOf(5)}`) // vai procurar o index do valor expecifico
console.log(`0 está no index ${num.indexOf(0)}`) // se o valor não estiver no vetor ele retorna -1

console.log(num)
console.log(`vetor é [${num}]`)

