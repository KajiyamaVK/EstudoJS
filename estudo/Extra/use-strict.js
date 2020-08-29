//O use strict faz com que o sistema faça mais validações ao rodar um código. Por exemplo, digamos que eu crie uma function e dentro dela eu atribuo o valor a uma variável que não foi instanciada (criada). Sem o use strict, o sistema irá criar uma variável global (o que pode gerar inúmeras inconsistencias ao sistema). Com o use strict, ele gerará um erro.

// "use strict"

const BoraSomar = (a,b)=>{
    resultado = a+b
    return resultado
}

console.log(BoraSomar(1,2))// Verifique que ele não acarretará em erro caso o USE STRICT acima esteja comentado. Caso quiser verificar o erro, descomente a linha de código USE STRICT e verifique. 

//Outro caso é no quesito de setters
// Imagine que chamamos uma função que só possui um getter, sem setter. Vamos lá e tentamos setar um valor. Ele não vai funcionar, porém, sem o USE STRICT, ele não apresentará erro também. 

const objetox = {
    get calculo() {
        return 10
    }
}

objetox.calculo = 2 // Perceba que está tentando mudar o valor do getter - o que não deveria dar para fazer. No resultado abaix, realmente ele ignorará a ação e irá retornar o esperado, porém, ele não irá apresentar erro também. Isso muitas vezes pode causar confusão, pois, erroneamente estamos tentando mudar o valor do getter, e , o sistema não está apresentando erros para estarmos identificando o erro mais facilmente. 
console.log(objetox.calculo)