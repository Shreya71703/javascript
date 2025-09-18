// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid);

const bigNumber = 6373838373663n


// Reference (Non Primitive)

// Array, Objects, Functions

const heroes = ["shaktiman, naagraj, doga"];
let myObj = {
    name: "shreya",
    age: 21,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);




//+++++++++++++++++++++++++++++++++++++

// Stack(Primitive) , Heap(Non Primitive)

let myYoutubename = "shreyadotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "shreya@google.com"

console.log(userOne.email);
console.log(userTwo.email);

