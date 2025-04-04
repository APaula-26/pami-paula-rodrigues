let n1 = 6
let n2 = 10

//nunca concatene com + pois o mesmo pode servir de operação matematematica e pode te dar dor de cabeça em casos onde utilize números.
//Math.pow -> para utilizar a operação matematica de potencia além do ^ colocar Math que é um método baseado na orientação de objetos.
//console chama o .log(parametro)

console.log(n1)
console.log(n1,n2)
console.log(n1 + n2)

let soma = n1 + n2 
console.log(`${n1} + ${n2} = ${soma}`)

let subtracao = n1 - n2 
console.log(`${n1} - ${n2} = ${subtracao}`)

let multiplicacao = n1 * n2 
console.log(`${n1} * ${n2} = ${multiplicacao}`)

let divisao = n1 / n2 
console.log(`${n1} / ${n2} = ${divisao}`)

let potencia = Math.pow(n1, n2)  
console.log(`${n1} ^ ${n2} = ${potencia}`)

console.log(Math.max(n1, n2))
console.log(Math.round(9,6))
