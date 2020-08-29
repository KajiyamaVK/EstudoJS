/*

Uma coisa que podemos fazer quando trabalharmos com o terminal, é ficar questionando os valores para o usuário. 

*/

const readLine = require('readline')
const terminal = readLine.createInterface({
    input: process.stdin,
    output:process.stdout
})

terminal.question('Insira um valor', valor1=>{
    console.log(valor1)
    terminal.question('Insira um valor', valor2=>{
        console.log(valor1 + valor2) // Não é soma... é concatenação
        terminal.close()
    })
})

//Ok, aí com certeza vem a dúvida - pq colocar um terminal.question um dentro do outro. Bom, se dizermos separados, o terminal.question 1 terá que ter um terminal.close, senão, ele ficará travado lá dentro. Dando um terminal.close, ele fecha tudo e não vai no 2. Portanto, por isso devemos colocar um dentro do outro. Mais um motivo é de que a variável do primeiro questionamento não iria funcionar já que a variável foi criada dentro daquele contexto apenas (dentro dos {} do primeiro questionamento.)



