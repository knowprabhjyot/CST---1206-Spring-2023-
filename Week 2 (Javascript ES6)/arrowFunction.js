
function greeting() {
    console.log("Hi How are you?");
}

greeting();


const sum = () => {
    console.log(2 + 1);
}

sum();


// Hoisting 

console.log(movieName); // undefined

var movieName = "Pirates of the Carrabean";


multiply(); // 4

function multiply() {
    console.log(2 * 2);
}


sumify(); // Referential Error

// let sumify = (a, b) => {
//     return a + b;
// }


// shorthand of writing arrow functions
let sumify=  (a, b) => a + b;