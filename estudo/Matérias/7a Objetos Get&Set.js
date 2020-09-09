// Dentro de um objeto temos 2 métodos - o GET e o SET que fazem a gente manipular valores. No exemplo abaixo temos um objeto chamado PESSOA.Nela definimos a idade de uma pessoa. Dentro dela, no método SET podemos verificar se uma pessoa pode ou não dirigir fazendo a verificação se a pessoa tem mais de 20 anos. 


//get é um método apenas para pegar um valor e retornar para a tela ou para que o método SET possa usar a informação para setar um outro elemento (normalmente uma variável). Caso não haja necessidade de setar uma nova variável, o GET pode mostrar a informação via return mesmo. No caso abaixo podíamos apenas usar o get e o return, mas para efeito de aprendizado, foi usado o set. 

const person = {
    age:20, //Criando a variável que servirá de base

    //Criando o GET para definir de onde ele pegará o valor. 
    get age1() { 
        return this.age
        
    },
    //Criando o método set AGE1. Ele está sendo criado passando o value coletado com o get
    set age1(value){
        this._age=value+1
    },
    //criando o método drive. Ele será chamado no final do código . 
    get drive(){
        return this._age>=21
    }

}
person.age=26

console.log(person.age1 +" "+person.drive)
console.log(person.age +" "+person.drive)
