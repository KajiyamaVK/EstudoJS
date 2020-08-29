const ChecaIdade = function(idade){
    return new Promise (function(resolve, reject){
        
        
        idade>=18?resolve(idade):reject(idade) 
    })
}

ChecaIdade(14)
    .then((response)=>{
        function Caller(){
            console.log("Esperei 3 seg - maior")
            console.log("Idade")
        }
        setTimeout(Caller,3000)
    })
    .catch((error)=>{
        function Caller(){
            console.log("Esperei 3 seg - menor")
            console.log("Idade")
        }
        setTimeout(Caller,3000)
    })