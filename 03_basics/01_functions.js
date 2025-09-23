//const { use } = require("react");

function sayMyName() {
    console.log("S");
    console.log("H");
    console.log("R");
    console.log("E");
    console.log("Y");
    console.log("A");
}

// sayMyName()

function addTwoNumbers(number1, number2) {
    return number1 + number2;
}

const result = addTwoNumbers(4, 6);

console.log("Result: ", result);

function LoginUserMessage(username = "virat") {
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(LoginUserMessage("shreya"))
console.log(LoginUserMessage())

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 300, 400, 500))


const user = {
    username: "shreya",
    price: 5000
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

//handleObject(user)
handleObject({
    username: "virat",
    price: 10000
})

const myNewArray = [1, 2, 3, 4, 5]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([1, 2, 3, 4, 5]));
