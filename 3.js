let array1=["hello","hi",1,3,4,5]
let array2=[0,10]
let array3=[1]

// array1.push(array2)
// console.log(array1)

// let concat=array1.concat(array2)
// console.log(concat)

let spreadoperator= [...array1,...array2,...array3]
console.log(array1)

let array4=[1,2,4,[4,5,6],0,5,[0,5,6]]
let flat= array4.flat(Infinity)
console.log(flat)