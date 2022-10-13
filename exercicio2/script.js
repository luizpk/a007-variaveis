// # Exercício 2
// Escreva um programa que faça 3 perguntas de Sim ou Não, e guarde cada resposta em uma variável. Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:

// let pergunta1 = prompt("Você tomou café hoje?")

// let pergunta2 = prompt("Você vai trabalhar hoje?")

// let pergunta3 = prompt("Você tomou banho?")

 //a) Crie três novas variáveis, contendo as respostas;

// let resposta1 = (pergunta1)
// let resposta2 = (pergunta2)
// let resposta3 = (pergunta3)

 // b) Imprima na tela todas as respostas. Por exemplo:

// ```
 // SIM
// SIM
 // NÃO
 // ```

// console.log(resposta1,resposta2,resposta3)

// c) Altere seu programa, para que o texto das perguntas também sejam guardadas em variáveis. Seu comando de **prompt** deve mudar um pouco, como mostrado abaixo:

// ```jsx
//mandando a pergunta como texto direto
// const respostaA = prompt("Você está usando uma roupa azul hoje?");

//mandando a pergunta como variável
// const perguntaA = "Você está usando uma roupa azul hoje?";
// const respostaA = prompt(perguntaA);
// ```

let pergunta1 = "Você tomou café hoje?"
let resposta1 = (prompt(pergunta1))

let pergunta2 = ("Você vai trabalhar hoje?")
let resposta2 = (prompt(pergunta2))

let pergunta3 = ("Você tomou banho?")
let resposta3 = (prompt(pergunta3))


console.log(pergunta1,resposta1)
console.log(pergunta2,resposta2)
console.log(pergunta3,resposta3)




// d) Altere seu programa, para que a impressão das respostas também tenha as **perguntas**. Por exemplo:

// ```
// Você está usando uma roupa azul hoje? - SIM