const promiseOne = new Promise(function(resolve, reject) {
    // Do an async task
    // DB calls , cryptography, network
    setTimeout(function() {
        console.log('Async task is completed');
        resolve();
    }, 1000);
})

const promiseThree= new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({username: 'chai', email: "chai@example.com"})
    }, 1000);
})

promiseThree.then(function(user) {
    console.log(user);
})

const promiseFour= new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if(!error) {
            resolve({username: "shreya", password: "abcd"})
        } else {
            reject('Error: Something went wrong')
        }
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("the promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if(!error) {
            resolve({username: "javascript", password: "abcd"})
        } else {
            reject('Error: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

 getAllUsers()

 fetch('https://api.github.com/users/Shreya71703')
 .then((response) => {
     return response.json()
 })
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// response = fetch("something") => in two parts
// 1- data:) - onfulfilled[] , on Rejection[]     ------------------ global memory
// 2- web browser/ node - network request
