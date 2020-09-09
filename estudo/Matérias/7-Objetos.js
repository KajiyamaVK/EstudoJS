/*
Objetos

Variáveis do tipo OBJETO são aquelas que guardam vários atributos dentro dela. Em sua criação utilizamos o formato JSON. 

Imagine um site de e-commerce onde estamos cadastrando um certo produto. Quando o inserimos em nosso banco de dados, existem algumas informações que não podem faltar. Vamos utilizar o exemplo de um tênis onde temos que guardar algumas informações como:

1. Tamanho
2. Modelo
3. Cor
4. Marca

Existem outras informações que podemos ter nessa lista, mas por enquanto trabalharemos apenas com essas. 

Para criarmos uma variável do tipo objeto, iremos criar uma variável de maneira comum, porém, com diversas informações


*/

const objeto1 = {

    tamanho: 40,
    modelo: "sapatilha",
    cor:"Branco",
    marca:"Nike"
}

/*
Para visualizarmos uma informação, faremos da seguinte forma...
*/

console.log(objeto1.cor)

//Para adicionarmos um atributo novo a esta informação, devemos fazer desta forma... 

objeto1['preco'] = 100.00

//Percebe-se que ao criar um objeto, ele funciona como se tivéssemos criado várias variáveis e colocado todas elas dentro de uma outra variável formando um conjunto de informações. 

console.log(objeto1.preco)

/*
Uma dúvida que pode surgir é porque eu consigo adicionar chaves para uma variável const. Bom neste caso o que não poderá ser modificado é a variável objeto1 em sí

Abaixo haverá um comentário que irá conter um código modificando o valor de alguma dessas chaves e você verá que gerará um erro....
*/

// objeto1 = {

//     chave1:1,
//     chave2 : 2
// }

// Se você rodar o comando acima, verá que irá gerar um erro. Podemos modificar o valor das chaves, porém, a variável objeto1 não pode ser modificada. 


console.log(objeto1.tamanho)

// Para visualizarmos o conteúdo de objeto1, podemos utilizar o modo tradicional.... 
console.log(objeto1)

//.. porém, como pode ver, ele mostra em formato de código - da mesma maneira que ele foi declarado. Agora, se fizermos da maneira abaixo, 

console.log(Object.values(objeto1)) // desta forma ele colocará em formato de lista

console.log(Object.keys(objeto1), ` - Object.keys`) //Aqui visualizamos apenas as chaves. 
console.log(Object.keys(objeto1)[0], ` - Pegando apenas um dos valores por index.`)

//caso formos visualizar informação referente a um campo apenas, utilizamos o objeto1.tamanho objeto1.preco etc.... 

//Podemos também juntar informações de dois objetos. 

const objeto2 = {
    desconto: 10,
    descricao: "Tenis sapatilha Nike feminino"
}

const objeto3 = Object.assign(objeto2,objeto1) 
console.log(objeto3)

//Para remover uma chave, podemos fazer da maneira abaixo. 

delete objeto3.desconto
console.log(objeto3)

//Desestruturação

//Criando outro bobjeto

const DesesExemplo = {
    Nome: "Fulano",
    Sobrenome: "DeTal",
    Endereco:{
        Rua:"Primeiro de Dezembro, 166",
        Bairro: "Vila das Vilas"
    }
}
{
let {Nome, Sobrenome, Endereco:{Rua} } = DesesExemplo
console.log(Nome)
console.log(Sobrenome)
console.log(Rua)

//Podemos também utilizar isso em uma função

function DesesFnc({Nome,Sobrenome}){
    console.log(`Meu nome é ${Nome} ${Sobrenome}`)
}

DesesFnc(DesesExemplo)
}

//************Importante * - ao trabalhar desta forma, o argumento estará fixo como receber nomes de objetos. Se quiser passar Nome e Sobrenome separados, não irá funcionar./


//E como se essa encheção de linguiça não fosse o suficiente, inventaram uma maneira de colocar o RESTO em outra variável. 

const DesesExemplo2 = {
    Nome: "James",
    Sobrenome: "Bond",
    Endereco:{
        Rua:"Primeiro de Janeiro, 166",
        Bairro: "Vila das Vilas 2"
    }
}

function DesesFnc2({Nome,Sobrenome, ...Resto}){
    console.log(`Meu nome é ${Nome} ${Sobrenome}`)
    console.log(Resto)
}

DesesFnc2(DesesExemplo2)

// Criando objetos com parametros com o nome igual da variável que contem o valor. Ficou complciado entender, né.... então veja o exemplo abaixo. 

const Nome = "Fulano de Tal"
const Idade = 33

//E digamos que queremos criar um objeto com esses doias valores. Normalmente faríamos assim. 

// const PessoaObj = {
//     Nome: Nome,
//     Idade:Idade,
//     Cidade: "São Paulo"
// }

//Mas não tem essa necessidade a partir do ES6. 

const PessoaObj = {
    Nome,
    Idade,
    Cidade: "São Paulo"
}

console.log(PessoaObj)


