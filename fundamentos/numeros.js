const peso1 = 1.0 //1.1
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

//console.log(media)
console.log(media.toFixed(2)) //limitar numero de casas decimais
console.log(media.toString()) //converte p/ string
console.log(media.toString(2)) //exibe o valor em binario
console.log(typeof media) //exibir o tipo
console.log(typeof Number)

