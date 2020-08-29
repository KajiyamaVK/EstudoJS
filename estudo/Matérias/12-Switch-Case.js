"use strict"

const numero =12

switch(numero){
    case 1: console.log("Você digitou número 1") 
    break
    case 2: console.log("Você digitou o número 2")
    break
    case 3: console.log("Você digitou o número 3")
    break
    default: console.log("Você digitou um número que não é 1,2 ou 3.")
    break
}// Este é um exemplo utilizando o console.log, porém, se apenas precisarmos de um retorno de valor, retiramos o break

function retornaNumero(){
switch(numero){
    case 1: return "Você digitou o número 1"
    case 2: return "Você digitou o número 2"
    case 3: return "Você digitou o número 3"
    default: return "Você digitou um número que não é 1,2 ou 3."
}
}

const str=retornaNumero()
console.log(str)