//No português WHILE significa ENQUANTO. 

// O While é utilizado no caso de se querer fazer uma ação diversas vezes enquanto uma condição não é alcançada. 

let contador = 1
while  (contador <= 200) {
    contador *= 1.654
    console.log(contador)
}

//No FOR

for (let contadorFor=1;contadorFor<=10;contadorFor++){
    console.log(contadorFor)
}

// Como pode perceber, ambos os casos podem ser utilizadas em amabas ocasiões, mas conforme o caso do IF/ELSE - Switch/Case, existem algumas boas práticas. Quando se sabe o número exato de vezes no qual um looping vai rodar, usamos o for. Caso contrário, usamos o while. Veja que no exemplo citado, o while não é muuuuito bem explícito quantas vezes irá rodar. Já no for, por ser um contador bem simples, já sabemos que ele erá rodar 10x. 

//Vetores

//Aqui trabalharemos com um vetor. A cada item do vetor, o sistema irá efetuar uma ação. 

//Utilizando o FOR comum, temos... 

const list = ['hamburguer', 'hotdog', 'misto quente','coxinha']

for (let counter=0;counter<=list.length-1;counter++){
    console.log(`Com o for pode ter mais liberdade de escolha do que retornar.Item da lista -${list[counter]}`)
}

//Com o For IN retornamos os valores do index sem termos que escrever tudo isso do for

for (item in list){
    console.log(`Aqui ele retorna as posições do index. Ele é o ${item}`)
} // Note que não precisamos criar um contador. 

//Com o For OF retornamos os valores


for(item of list){
    console.log(`Retornando os valores de dentro do array - ${item}`)
}
