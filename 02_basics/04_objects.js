// const tinderUser = new Object(); //singleton object syntax
const tinderUser = {}; // non singleton object syntax

tinderUser.id = "123abc";
tinderUser.name = "Shreya";
tinderUser.isLoggedIn = false;
console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullname: {
            firstName: "Shreya",
            lastName: "Shukla"
        }
    }
}

console.log(regularUser.fullname.userFullname.firstName);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "a", 6: "b"};

const obj3 = {...obj1, ...obj2 } //spread operator
console.log(obj3);

const users = [
    {
    },
    {
    },
    {
    },
]
       
users[1].email 
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(regularUser));
console.log(Object.entries(regularUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));


const course = {
  coursename: "React JS",
  price: "999",
  courseInstructor: "Shreya"
}

// course.courseInstructor

const { courseInstructor: instructor } = course; // destructuring
console.log(instructor);

// {
//     name: "Shreya",
//     price: "free",
//     coursename: "js in hindi"
// }

[
    {},
    {},
    {}
]