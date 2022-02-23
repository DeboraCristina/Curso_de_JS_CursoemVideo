/*
var cont = 1
var r = 2
// while
while (cont <= r){
    console.log(`while ${cont}`)
    cont ++
}

//do while
cont = 1
do{
    console.log(`do_while ${cont}`)
    cont++
}while(cont <= r)

//for
for(var c = 1; c <= r; c++){
    console.log(`for ${c}`)
}
*/

var txt = ''
var i = 1
var f = 5
var p = 1
for (var c = i; c <= f; c += p){
    txt += c
}
console.log(txt)