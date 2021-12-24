function Test(a, b){
    this.a = a;
    this.b = b;
}

class Test2 {
    constructor(a,b){
        this.a = a;
        this.b = b;
    }
}

function add( a, b){
   return a + b;
}
  
  
//   const testInstance = new Test(1, 2)
//   console.log(testInstance.a)

const test = Test2(1,2);
console.log(test)
