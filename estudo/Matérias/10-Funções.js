//Funções existem para que possamos automatizar blocos de códigos. Vamos pegar um exemplo um código que usamos constantemente em uma aplicação X que pega dois valores e divide por 3. 

function funcaox (valor1,valor2){
    const resultado = valor1+valor2/3
    console.log(`O resultado é ${resultado}`)
}

funcaox(1,2)

// Pode retornar valores sem que essas sejam impressas na tela. Para isso utilizamos o RETURN

function funcaoy(valor1,valor2){
    const resultado = valor1+valor2/3
    return resultado
}

//A diferença entre a funcaox e a funcaoy é que a primeira automaticamente imprimia o resultado, finalizando o processo por aí. Porém, já na funcaoy apenas retornamos o valor e fazemos o que quiser dele. 

console.log("Utilizando a função Y - "+funcaoy(3,4))

// Podemos criar objetos com funções. Isso acontece muito quando, por exemplo, vamos efetuar uma compra e precisamos criar uma cesta com vários produtos, então, por exemplo, vamos comprar um pão e uma manteiga

// Primeiramente criamos a function . 

function Produto(_nome,_codigo,_preco){
    
        this.Nome=_nome
        this.codigo=_codigo 
        this.preco=_preco

        this.teste =function(x) {
            console.log("teste efetuado com sucesso",x)
        }
        
    
}

// Isso criará um objeto chamado produto com essas informações. Mesmo tendo criado uma function com atributos iguais aos das varíaveis passadas, temos que efetuar a criação do produto para criar O PRODUTO em sí... e não simplesmente trabalhar com as varíaveis individualmente. 

//Para trabalharmos com criação de objetos, temos que instanciar a function. Não podemos apenas chama-la dessa forma.... 

let produto1 = Produto('pao',001,12.00)
console.log(produto1) // ele retornará como undefined. 

//Para trabalharmos como objeto, temos que instânciar a classe da function com o NEW
let lista =[]
let produto = new Produto('pao', 001,12.00)
lista.push(produto)

produto = new Produto("Manteiga", 021,30)
lista.push(produto)

produto.teste('teste')

//////////Arrow functions

/**Serve para reduzir a quantidade de códigos dentro de uma criação de uma function. */

//Declarando Arrow function

const functionTest = function (x){return x*2}
const functiontestArrow = (x) => {return x*2}
const functiontestArrow2 = x => {return x*2}
const functionArrow3 = x=> x*2 

console.log("Todos eles retornam os mesmos valores") 
console.log(functionTest(2)) 
console.log(functiontestArrow(2))
console.log(functiontestArrow2(2))
console.log(functionArrow3(2))





