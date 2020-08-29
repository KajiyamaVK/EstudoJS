//IF e ELSE são cláusulas SE. SE alguma condição ocorrer, faça tal coisa. Se o carro quebrar, conserte o carro. Se a porta estiver aberta, a feche. Se eu for sair, vista uma blusa, caso contrário, vista o pijama. 

// Lembra-se da necessidade de usarmos 1,2 ou 3 sinais de iguais? Se não, verifique no arquivo referente aos operadores. 

const sexo = 'M'
if (sexo==='M'){
    console.log("Masculino")
} else if (sexo==="F"){
    console.log("Feminino")
} else {
    console.log("Outro")
}

//Neste caso usamos um IF.
/*

IF = SE

Dentro dos parênteses colocamos a condição que gostaríamos de validar. No caso, estamos verificando se o valor da variável é M. 

Else if - Senão se 

Caso a primeira condição não for atendida, temos uma outra condição. Verificamos se o valor é F

Else - senão

Note que este caso é semelhante com o caso acima. Neste caso utilizamos o else como se for o "resto". Caso nenhuma das condições anteriores for atendida, faça isso - simples assim, sem outra condição. 

IMPORTANTE: Todos os valores são case sensitives. Um "f" é diferente de "F" - caso quisermos que os dois casos sejam verificados dentro da condição, temos os operadores && e ||. 

*/

if (sexo === "M" || sexo ==="m"){
    console.log("Masculino")
} else if (sexo ==="f" || sexo ==="F"){
    console.log("Feminino")
} else {
    console.log("Outros")
}

/*

Operador && = E. Se "condição 1" e "Condição 2" forem atendidas, faça isso. Ou seja, se alguma das condições não for atendida, ele não irá efetuar a ação. 

Operador || = Ou. Se "condição 1" ou "condição 2" forem atendidas, faça isso. Ou seja, se algumas das condições for atendida, ele irá efetuar a ação. 

*/

// Caso sua condição for simples, onde for apenas um IF e um else, você pode uatilizar o formato ternário. 

const retorno=(1===2)?"Mas hein":"Huh?!"
console.log(retorno) //Bem mais curto que a montagem do if e else, não?