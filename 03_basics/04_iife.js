// Immediately Invoked Function Expression (IIFE)

(function chai(){
    console.log("DB Connected");
})(); // IIFE  

// Global Scope ke pollution se problem hoti hai kyi baar to us global scope ke jo bhi declarations hai uske pollution ko htane ke liye iife ka use krte hai

(function chai(){
    // named iife
    console.log("DB Connected");
})();

( (name) => {
    console.log(`DB connected Two ${name}`);
} )("shreya");