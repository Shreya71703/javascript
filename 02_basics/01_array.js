// array

const myArray = [1, 2, 3, 4, 5]
const myHeroes = ['thor', 'ironman', 'spiderman']

const myArray2 = new Array(1, 2, 3, 4)
console.log(myArray1);

// Array Methods

myArray.push(6)
console.log(myArray);

myArray.pop()
console.log(myArray);

myArray.unshift(0)
console.log(myArray);

myArray.shift()
console.log(myArray);

console.log(myArray.indexOf(3));
console.log(myArray.includes(3));

const newArray = myArray.join() // join use to convert array into string
console.log(myArray);
console.log(newArray);

//slice, splice

console.log("A", myArray);

const myn1 = myArray.slice(1, 3)

console.log(myn1);
console.log("B", myArray);

const myn2 = myArray.splice(1, 3)
console.log("C", myArray);
console.log(myn2);