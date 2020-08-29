/*
As variáveis booleanas são do tipo que retornam verdadeiro ou falso. Toda vez que vemos TRUE ou FALSE, aí estão as variáveis booleanas. 

Casos onde o retorno é false

Listas (arrays) vazias, 
Strings sem conteúdo
valores null ou undefined
0(zero)
false
NaN (not a number)

Casos onde o retorno é True

true
Qualquer número, seja ele negativo, positivo, fracionado, decimal...etc...
variaveis com valor que não sejam vazios, null ou undefined
*/

//Exemplos

console.log("Strings sem textos")
let variavel ="" 
console.log(!!(variavel))

console.log("variaveis null ou undefined")
let variavel2
console.log(!!(variavel2))

console.log("Arrays sem valores")
variavel = []
console.log(!!(variavel))

console.log("numeros")
variavel3 = 1
variavel4= 0.2
variavel5= -2
variavel6=0 //Prestar atenção aqui, pois zero é falso
variavel7="0" //aqui o zero não representa o NUMERO zero. Aqui ele é um texto, porém, vai ser true.
console.log(!!(variavel3, variavel4, variavel5, variavel6))
console.log(!!(variavel3))
console.log(!!(variavel4))
console.log(!!(variavel5))
console.log(!!(variavel6))
console.log(!!(variavel7))