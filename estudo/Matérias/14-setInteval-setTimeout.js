// COm setInterval e setTimeout podemos chamar functions com um certo intervalo de tempo. 

//setInterval - chama uma function e só vai chama-la depois de um tempo pré-definido

//setTimeout - chama uma function UMA vez após um tempo definido. 

function mostraMensagem(){
    console.log("Supresa!!!!")
}
function mostraMensagem2(){
    console.log("10 segundo se passaram!!!!")
}

setInterval(mostraMensagem,1000) // a Function vai sem os parênteses, senão ele vai rodar apenas 1x. 

//No caso setTimeout, ele vai rodar apenas uma vez depois de um certo tempo. Vamos configurar aqui que ele só vai mostrar a mensagem daqui  a 10 segundos. Criamos uma mensagem nova para que você pudesse identifica-la ao meio da primeira mensagem. 

setTimeout(mostraMensagem2,10000)

