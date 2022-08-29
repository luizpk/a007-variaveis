let nome = ""
let idade = ""

console.log(typeof nome, typeof idade)

// As duas variáveis constaram como string

let nome1 = prompt("Qual é o seu nome?")
let idade1 = prompt("Qual a sua idade?")

console.log(typeof nome1, typeof idade1)

// No primeiro momento apareceu um erro dizendo que "nome" não estava definido
//Após trocar o nome das variáveis para "nome1" e "idade1" o código rodou perfeitamente.
//As o tipo de "nome1" e "idade1" continuam como string, tendo em vista que o retorno do prompt
//sempre será no tipo string
//Para que isso não ocorra devemos mudar o tipo declarando-o antes do prompt

let nome2 = prompt("Qual é o seu nome?")
let idade2 = Number(prompt("QUal a sua idade?"))

console.log(typeof nome2, typeof idade2)
console.log(`Olá, ${nome2}! Você tem ${idade2} anos.`)
