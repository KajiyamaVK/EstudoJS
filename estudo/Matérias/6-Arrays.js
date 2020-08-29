/*
Arrays

Arrys (matrizes, listas ou vetores) são uma lista de objetos. Ela é declarada de maneira normal, porém com colchetes. 
*/

let lista = ["item1", "item2", "item3"]

/*
As arrays são controladas por posições. Por exemplo, se eu quiser ver o item da posição 1, eu teria que usar NomeDaLista[0]. Sim, todos os arrays se iniciam da posição 0
*/

console.log(`O primeiro item da lista é ${lista[0]}`)

//Verificando quantos objetos existem dentro do array

console.log(`A quantidade de objetos nesta lista é ${lista.length}`)

//Adicionando item dentro da lista na útima posição

lista.push("item4")
console.log(lista)

//Removendo o último item da lista

lista.pop()
console.log(lista)

//Podemos retirar o último item da lista, mas guarda-lo em uma variáve. 

const ultimo = lista.pop()
console.log(lista)
console.log(`O valor da variável ultimo é ${ultimo}`)

//Retirando o PRIMEIRO item da lista

const primeiro = lista.shift()
console.log(lista)
console.log(`O valor da variável primeiro é ${primeiro}`)

//como retirar da posiçào que eu quiser. 

lista.splice(0,1) //retirando a partir da posição 0 e só vai retirar UM registro. 

lista = ["item1", "item2", "item3"]
console.log(lista)
const spl = lista.splice(0,1)
console.log(`A variável SPL contém o valor ${spl}`)

console.log(lista)

//Para verificar se a variável é um array, pois typeof retorna como objeto.

console.log(Array.isArray(lista))

//Posso ordenar usando o sort

lista = [21,2,44,23,12,1]
lista.sort()

console.log(lista)

//Como concatenar 2 listas

const lista2 = lista.concat(111,222,333)

console.log(' Utilizando o CONCAT - ',lista2)

//Modificando visual para aparecer ao rodar o script

console.log('Utilizando o JOIN -',lista2.join(`,`))

//Descobrindo o index de algum dos itens da lista

console.log(lista2.indexOf(12))

//Podemos efetuar operações de uma array e colocar o resultado em outra. 

const arr1 = [1,2,3,4]
let arr2 = arr1.map((item)=>{return item *2})
console.log(arr2)

// Com o MAP podemos também trabalhar com outras informações de outro array

arr2 = arr1.map((item, index)=>{return item *2, index *2})
console.log(arr2)

//Podemos também efetuar operações com todos os itens dentro de um array. Por exemplo, digamos que queremos que seja calculada a soma de uma array inteira. 

let SomaArray = [ 1,2,3,4,5]

let SomaArrayResultado = SomaArray.reduce((total, next) =>{return total+next})

console.log(SomaArrayResultado)

//Podemos retornar apenas os valores que condizerem com uma condição

let CondArray = [1,2,3,4,5,6,7,8]
let CondArrayResultado = CondArray.filter((item)=>{return item % 2 === 0})
console.log(CondArrayResultado)

//Pode usar a DESESTRUTURAÇÃO para atribuir variáveis de arrays

let desesarr = [1,2,3,4]
let [a,b,...c] =desesarr // Ele atribui dessa forma uatomaticamente dependendo das posições nos arrays. O REST (...) faz todo o restante cair para outra variável.)

console.log(a,b,c)

//Usando a ideia do REST (...) podemos efetuar operações de maneiras mais fáceis. 

let varReduce = c.reduce((total,next)=>{return total + next}) // Usando a variável C criada lá em cima.
console.log(varReduce)

// Com a ideia do REST ainda podemos fazer o SPREAD que é pegar todos os valores. Caso você declara uma variável apenas com o RESTO (...), você simplesmente pega TODOS os valores do array. 

const varSpread1 = [1,2,3,4,5,6]
const varSpread2 = [7,8,9,10]
const varSpread3 = [...varSpread1, ...varSpread2]

//Claro que podemos usar o CONCAT. 

const varSpread4 = varSpread1.concat(...varSpread2)

console.log("Spread sem concat - ", varSpread3)
console.log("Spread COM concat - ", varSpread4)

//Digamos que queremos modificar apenas UMA propriedade de um objeto utilizando o SPREAD. 

const varObjetoSpread = {
    nome:"Fulano DeTal",
    idade: 33,
    endereço: "Rua das Oliveiras, 166"
}
const varSpread5 = {...varObjetoSpread, nome:"Ciclano de tal" }
console.log("Utilizando o SPREAD com objetos e modificando apenas um valor - ",varSpread5)
console.log("Endereço ",varSpread5.endereço)



