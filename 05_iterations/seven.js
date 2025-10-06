const myNumers = [1, 2, 3, 4, 5]

//const newNums = myNumers.map( (num) =>{ return num + 10} )

const newNums = myNumers
                 .map( (num) => num * 10 )
                 .map( (num) => num + 1 )
                 .filter( (num) => num >= 10)  // chaining

console.log(newNums);