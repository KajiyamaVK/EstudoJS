function fn1(callback, errorCallback) {
    console.log("Starting 3 sec counting now...")
    setTimeout(function() {
      try {
        callback();
      } catch (error) {
        errorCallback();
      }
    }, 3000);
  }

function fn2(){
    console.log("fn2")
}

  function fn3() {
    fn1(function() { console.log('It works!'); }, fn2);
  }

  fn3()