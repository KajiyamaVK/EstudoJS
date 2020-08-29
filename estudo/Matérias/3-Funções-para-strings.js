////////////////////////////////////CONCATENAÇÃO///////////////////


/*
O que é concatenação

Concatenar é o ato de juntar pedaços de textos para aparecer em uma única frase. 
Ela pode vir juntando textos com variáveis, texto com texto, variáveis com variáveis.
*/

//Exemplo Texto + Texto

console.log("Juntando duas "+"frases")

// Juntando variáveis com texto

const texto = "frases"
const numero = 2

console.log(`Juntando ${numero} ${texto}` )

/*Aqui podemos perceber 3 fatores

1 - As variáveis estão dentro de ${}

Precisamos fazer isso para diferenciar variável de texto. 

2- Trocadas as aspas duplas por crases 

Essa é uma forma criada para facilitar a concatenação de textos com variáveis. Podemos, sim, fazer isso com aspas duplas, mas sua sintaxe ficaria assim:
*/

console.log("Juntando "+numero+" "+texto)

/*O resultado acaba sendo o mesmo, porém, você precisa manter um controle de quando abrir ou fechar as aspas duplas uma vez que ele não entende ${} - ele transformará esse conjunto de caracteres em texto*/

console.log("Juntando ${numero} ${texto}" )

//Concatenando apenas variáveis

console.log(texto+texto) //Isso funciona

//porém

console.log(numero+numero) // Isso não irá funcionar para concatenação. Como a variável é do tipo numer - vide tipos-dados.txt - o sistema achará que você está tentando fazer uma conta matemática uma vez que você juntou 2 delas. Para isso você terá que convertera variável para string com a função String(). Não existe a necessidade de fazer isso para ambas, uma vez que juntando texto com número o sistema já entende que você não gostaria de fazer uma conta. 

console.log(String(numero)+numero)

//Mas se quisermos, podemos converter as duas variáveis para string

console.log(String(numero)+String(numero))

////////////// SPLIT /////////////////////////////////

/*
Aqui esta uma maneira de colocarmos as informações dentro de um array. (Vide arquivo sobre arrays para mais informações)

Desta forma, dividimos uma certa variável string e colocamos em uma lista. 
*/

str = "teste1 teste2 teste3"
console.log(str)

str = str.split(" ")

console.log(str)




