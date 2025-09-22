// Singleton
// Object.create

// Object literals

const mySym = Symbol('key1');
const JsUser = {
    name: "Shreya",
    "full name": "Shreya Shukla",
    [mySym]: "mykey1",
    age: 20,
    email: "shreya@gmail.com",
    location: "India",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "shreya@gmail.com"
//Object.freeze(JsUser) // will not allow to change any value of object
JsUser.email = "shreya@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JsUser");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JsUser, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());