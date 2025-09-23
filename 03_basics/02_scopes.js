let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("Inner: ", a);
}

console.log(a);


function one() {
    const username = "shreya"

    function two() { 
        const website = "learncodeonline.in"    
        console.log(username);
    }
    // console.log(website);

    two()   

}

// one()

if (true) {
    const username = "shreya"
    if (username === "shreya") {
        const website = "learncodeonline.in"
        console.log(username + website);
      
    }
}


//+++++++++++++interesting+++++++++++++++++

function addone(num) {
    return num + 1
}

console.log(addone(5))

function addOne(num) {
        return num + 1 
}


const addTwo = function (num) {   
    return num + 2
}
