// # Exercício 1
// Construa um programa, seguindo os seguintes passos:

// **a)** Declare uma variável para armazenar um **nome**, sem atribuir um valor.

let nome = ""

// **b)** Declare uma variável para armazenar uma **idade**, sem atribuir um valor.

let idade = ""

// **c)** Imprima na tela o **tipo** dessas variáveis que acabou de criar, usando o comando `typeof`.

console.log(typeof nome)
console.log(typeof idade)

// **d)** Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.

// NOS DOIS CASOS O TIPO RETORNADO NO CONSOLE FOI STRING

// **e)** Depois, disso, atualize o código para **perguntar** ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.
    
nome = prompt("Qual é o seu nome?")
idade = Number(prompt("Qual a sua idade?"))

// >💡Se você receber um erro de código nessa etapa, reflita sobre o tipo de declaração que utilizou.

// FOI RECEBIDO UM ERRO DIZENDO QUE "NOME" JÁ HAVIA SIDO DECLARADO
//UTILIZEI A DECLARAÇÃO CONST, ESSE TIPO DE DECLARAÇÃO NÃO PERMITE MUDAR O VALOR DA VARIÁVEL
//DEPOIS UTILIZEI O "LET", QUE PERMITE MODIFICAR O VALOR DA DECLARAÇÃO POSTERIORMENTE
//DEFINI O TIPO QUE QUERO QUE RETORNE NA LET IDADE, QUE NO CASO SERIA UM NÚMERO
    

// **f)** Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.

console.log(nome, typeof nome)
console.log(idade,typeof idade)



// **g)** Para finalizar, imprima na tela a mensagem: "Olá `nome`,  você tem `idade` anos". Onde `nome` e `idade` são os valores que o usuário inseriu

alert(`Olá, ${nome}! Você tem ${idade} anos de idade.`)

// >💡  Dica: para imprimir mais de um valor na mesma linha, você pode usar essa sintaxe:
// ```jsx
// console.log(valor1, valor2)