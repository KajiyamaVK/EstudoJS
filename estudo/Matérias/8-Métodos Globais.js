/*
Função

Função é um bloco de código que pode ser acessado apenas utilizando o seu nome e passando alguns parâmetros. 

Imagine uma função onde passamos um número e ele retorna se o mesmo é par ou ímpar. É importante salientar que este retorno é opcional, porém, para que este bloco de código seja considerado uma função, ele obrigatóriamente deve ser passado com parâmetros. 

abaixo seguem exemplos de funções -- APENAS ALGUNS
*/

///// Math.floor  - É utilizado para transformar qualquer número em um inteiro (arredondando para baixo)

console.log(Math.floor(0.11231231))
console.log(Math.floor(1.2))
console.log(Math.floor(-1.234))

//Digamos que você deseja um número aleatório, você pode usar a função Math.random(), porém, essa função traz números menos que 1. 

console.log(Math.random())

//Se você deseja um número aleatório inteiro de 0 a 9, você pode usar:
console.log(Math.floor(Math.random()*10)) // Aleatório de 0 a 9
console.log(Math.floor(Math.random()*11)) // Aleatório de 0 a 10
console.log(Math.floor(Math.random()*21)) // Aleatório de 0 a 20

console.log(Date.now()) // Verificar o arquivo referente a datas. 

const str = "teste"
console.log(str.toUpperCase())// Deixa tudo maiúsculo
console.log("teste".toUpperCase())

