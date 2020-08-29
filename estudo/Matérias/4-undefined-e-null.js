/*
Declarando uma variável, podemos fazer isso sem atribuir um valor a ela. Neste caso ela vira undefined (sem definição). 
*/

/*
Como não iremos atribuir um valor, não poderemos definir a variável como CONST uma vez que esse tipo não permite que modifiquemos seu valor posteriormente. 
*/

let variavel

console.log(`variavel`, typeof(variavel))

/*
Por boas práticas, sempre que criamos uma variável, devemos atribuir um valor. No caso de não termos o valor no momento da criação da variável, devemos atribuir o valor NULL. 
*/

let variavel2 = null
console.log(`variavel2: ${typeof(variavel2)}`)
