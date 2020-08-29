//Operadores para cálculos
console.log("Sempre consulte o código para verificar comentários e os códigos")

const A = 1
const B = 2

console.log(`Soma : A + B = ` + (A + B))
console.log(`Subtração : A - B = ` + (A - B))
console.log(`Multiplicação : A * B = ` + A * B)
console.log(`Divisão : A / B = ` + A / B)
console.log(`Resto da divisáo : A % B = ` + A % B)
console.log(`Exponenciação : 1² = ` + A ** B)

//Operadores de comparação

const maior = 1>2
const menor = 1<2
const menorigual = 1<=2
const igual = 1===2
const diferente = 1!==2
const ou = (maior===true)||(menor!==false)
const e = (maior===false)&&(menor!==true)


console.log(`
Maior e menor

1>2 = ${maior}
1<2 = ${menor}
1<=2 = ${menorigual}
1===2 = ${igual}
1!==2 = ${diferente}
1===2 = ${igual}
(maior===true)||(menor!==false) = ${ou}
(maior===false)&&(menor!==true) = ${e}
`)

/*
Referente aos 3 iguais

Quando você utiliza 3 operadores de igual, você esta comparando valor e tipo de variável. Por boa prática, sempre utilizamos com 3. Com 2 ele compararia apenas os valores, portanto, se temos um número 2 string e um número 2 number, ele daria true. Apenas UM IGUAL serve apenas para atribuição de valores às variáveis. 
*/
const x = 1
const y = "1"
console.log(`1==1: ${x==y}, ${x===y} `)

