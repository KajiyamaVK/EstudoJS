'use strict'

class SomeClass {
    constructor(msg) {
        this.msg = msg
    }

    MostrarMsg() {
        console.log(this.msg)
    }
}

const classe = new SomeClass('deu certo')
classe.MostrarMsg()

//////////////////////////////////////////

new SomeClass("2 deu certo 2").MostrarMsg()
const resultado = 1 ? (null || ((1 != '1')
            ? "Hello world!"
            : "Hackerzao"
    ))
    : "não zero";

/*

Dúvida referente à classe e Functions - essa dúvida foi postada nos comentários das aulas do Erick Wendell. 

Eu tava vendo a diferença de um caso para o outro e gostaria de pedir para você confirmar para ver se estou correto. 

Eu estava efetuando uma pesquisa para saber qual era a diferença entre functions e classes no escopo dentro do JS. 
Criando variáveis que são instanciadas a partir de uma function ou de uma class, o typeof retorna as duas iguais - como functions. 

Aí ví que existe uma diferença. 

Você pode instanciar uma function e na linha de baixo declarar ela. Na classe ele vai dar erro, pois, ela não foi criada ainda. Fica parecendo que a Classe precisa estar ocupando espaço em memória. Mas aí não seria melhor trabalhar sempre com funções já que elas não ocupam espaço em memória?
Bom, mas em contra-partida, toda vez o algoritmo vai ter que procurar a function e consultar, né.... diferente da classe que já vai estar em memória. 

Então acho que vai depender de quantas vezes eu vou ter que instanciar, né? 
Mas também dependendo do tamanho da aplicação, nem vale a pena eu pensar nisso, correto? 

Nossa...ficou confuso? Eu escrevi muito. Pode confirmar se é isso mesmo?

*/