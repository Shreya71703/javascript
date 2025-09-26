// if

const isUserLoggedIn = true
const temperature = 41

if (temperature === 40) {
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}

console.log("Execute");
// <=, >=, <, >, ==, ===, !=, !==

const score = 100

if (score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`);
}

console.log(`User power: ${power}`); // error power is not defined

const balance = 1000

// if (balance > 500) console.log("test"), console.log("test2")); // single line if

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log ("less than 750");

} else if (balance < 900) {
    console.log("less than 750");

} else {
    console.log("less than 1200");

}

const UserLoggedIn = true
const debitCard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true

if (UserLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (LoggedInFromGoogle || LoggedInFromEmail) {
    console.log("User logged in" );
}

