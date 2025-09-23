const user = {
    username: "shreya",
    price: 5000,

    welcomeMessage: function() {
        console.log(`${this.username} welcome to the website`);
        console.log(this);
    }
}

user.welcomeMessage()
user.username = "virat"
user.welcomeMessage()

console.log(this);

function chai() {
    console.log(this);
}

const coffee = () => {
    let username = "shreya";
    console.log(this);
}

// chai()

//const addTwo = (num1, num2) => { // curly me return hota
   // return num1 + num2;


//const addTwo = (num1, num2) => num1 + num2; // paranthesis me no return

const addTwo = (num1, num2) => ({ username: "shreya" })

console.log(addTwo(5, 6))

// const myArray = [1, 2, 3, 4, 5]

// myArray.forEach()