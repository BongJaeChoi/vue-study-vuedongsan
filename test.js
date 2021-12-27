function Test(a, b) {
  this.a = a
  this.b = b
}

class Test2 {
  constructor(a, b) {
    this.a = a
    this.b = b
  }
}

function add(a, b) {
  return a + b
}

//   const testInstance = new Test(1, 2)
//   console.log(testInstance.a)

// const test = Test2(1,2);
// console.log(test)

// console.log(typeof '11ㅇㅇ' === 'string')
const a = 1
const b = '1'
const c = 'a'
const d = '1a'
const e = ' 1'
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
console.log(typeof d)
console.log(`\n\n\n\n\n ${isNaN('1a')}`)
console.log(`${e.indexOf(' ') > 0}`)
/** result
 a : number / parseInt = 1/ false
 b : string / parseInt = 1 / false
 c : string / parseInt = NaN / false
 d : string / parseInt = 1 / false
*/
const obj = [
  { name: 'david' },
  { age: '20' },
  { name: 'sara' },
  { name: 'david' },
]

const result = obj.flatMap(Object.keys)
const set = new Set()
for (const  of obj) {
  set.add(key)
}
const result1 = Array.from(set)

console.log(result1)
// [david,sara, david]
