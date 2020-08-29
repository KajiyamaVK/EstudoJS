const { default: Axios } = require("axios");

let Clientes = {}
function ColetarClientes(){
Axios.get("http://rafaeldeveloper.somee.com/api/Client")
    .then(function(response){
        console.log(response.data)
        Clientes = response.data
        console.log("Lista de clientes",Clientes[0].Name)
    })
    .catch(function(error){
        console.log(error)
    })
}

function CadastrarCliente (id,nome, sobrenome, idade, telefone){
    Axios.post("http://rafaeldeveloper.somee.com/api/Client",{
        ClientId: id,
        Name: nome,
        Sobrenome: sobrenome,
        Idade:idade,
        Telefone: telefone

    })
        .then((response)=>{
            console.log(response)
        })
}



ColetarClientes()