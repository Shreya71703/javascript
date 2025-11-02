const user = {
    username: "shreya",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        // console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
    }

}

console.log(user.username); 
console.log(user.getUserDetails()); // Got user details from database
console.log(this);


function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}

const user1 = new User("shreya", 8, true);
const user2 = new User("rahul", 5, false);
console.log(user1);
console.log(user2);