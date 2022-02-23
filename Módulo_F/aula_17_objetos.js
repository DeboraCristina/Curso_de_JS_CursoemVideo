// objetos ("'dicionários'")

var amigo = {nome: 'jose', 
sexo: 'm', 
peso: 85.4,
engordar(p){
    console.log(`engordou mais ${p}`)
    this.peso += p
}
}
console.log(`${amigo.nome} pesa ${amigo.peso}kg.`)
amigo.engordar(2)
console.log(`${amigo.nome} engordou ${amigo.peso}kg.`)