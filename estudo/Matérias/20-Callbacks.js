//Use Promisses. Forget callbacks!


let var1 = 1
function fn(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{var1 = 3; resolve()},2000)
    
  })
  
}

fn()
  .then((resolve)=>{
    console.log(var1+1)
  })
  .catch((reject)=>{
    console.log("Deu certo, não")
  })
  
