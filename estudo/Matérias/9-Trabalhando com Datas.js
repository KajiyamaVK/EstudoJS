//As datas no JS são contabilizadas em milisegundos

//IMPORTANTE*************** MESES COMEÇAM DO ZERO NO JS



console.log("Maneira incorreta de se mostrar a data uma vez que ela não está sendo instanciada " + Date(2020,0,15))// Não irá retornar o valor correto, pois não está instanciado. Estaremos falando mais sobre instâncias posteriormente. 

data = Date(2020,0,12) // Não irá retornar o valor correto conforme o exemplo acima. 
console.log(`Maneira errada de coletar uma data. Está sem instanciamento - ${data}`)

data2 = new Date(2020,0,12) // Aqui estamos isntanciando a função Date com o NEW, mas não se atente a esse fator, pois ele estará sendo explicado posteriormente. Aqui temos o valor correto. 
console.log(`Maneira correta de coletar uma data. Está com instanciamento`)


console.log(`Essa é a maneira LEGIVEL - ${data2.toString()}`)
console.log(`Essa é a maneira ISO para quando formos trabalhar com outras linguagens - ${data2.toISOString()}`)
console.log(`Essa é a maneira ISO - ${data2.toLocaleDateString()}`)