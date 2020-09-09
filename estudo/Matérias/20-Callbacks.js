

// let var1

// function fnAfter(){
//   console.log(1 + var1)
// }

// function fn1(callback){
//   try{
//     setTimeout(()=>{var1 = 3},5000)
//   }catch(error){
//     console.log(error)
//   }finally{
  
//   }
//   callback()
// }

// fn1(fnAfter)
let var1
function fn(){
  setTimeout(()=>{var1 = 3},5000)
  .then(
    console.log(1 + var1)
  )
}

fn()