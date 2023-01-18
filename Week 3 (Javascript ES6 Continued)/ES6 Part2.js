// REST OPERATORS**********

function multiply(num1, num2, num3) {
    return num1 * num2 * num3;
}

console.log(multiply(2,3,4));

// so ... here means this function might recieve multiple parameters
function multiplyWithRest(...nums) {
    let total = 1;
    for (let i = 0 ; i < nums.length; i++ ) {
        total *= nums[i];
    }

    return total;
}

console.log(multiplyWithRest(1))


console.log(multiplyWithRest(1,2))


console.log(multiplyWithRest(1,2,3))


console.log(multiplyWithRest(10, 20, 30 , 40, 50));



// Example avaerage

function average(type, ...nums) {
   
    let sum = nums.reduce((acc, cV) => acc + cV, 0);

    let average = sum / nums.length;

    console.log(`The average of ${type} is ${average}`);

}
 

average("marks", 1,2,3,4);



// SPREAD OPERATORS WITH ARRAYS!

let array1 = [1,2,3];
let array2 = [4,5,6];

// let finalArray = [1,2,3,4,5,6]

let finalArray = [...array1, ...array2];

console.log(finalArray);



// SPREAD OPERATORS WITH OBJECTS!
let student = {
    name : 'Daniel',
    email: 'daniel@gmail.com'
}


let studentWithVCC = {
    ...student,
    college: 'VCC',
    address: 'Vancouver'
}

console.log(studentWithVCC);


let arrayItems =  [1,2,3,4,5,6];

console.log(Math.max(...arrayItems));



// DESTRUCTURING IN OBJECTS


let { college, address } = studentWithVCC;
let { myAddress = "Burnaby" } = studentWithVCC;

console.log(college);
console.log(address);
console.log(myAddress); // It will take default value of Burnaby because this key doesn't exist inside the object, 



// DESTRUCTURING IN ARRAYS

let fruitsList = ['Mangoes', 'Oranges', 'Apples', 'Grapes'];

let [ firstValue , secondValue, thirdValue, fourthValues, fifthValue = "Bananas" ] = fruitsList;

console.log(firstValue); // Mangoes
console.log(secondValue); // Oranges

console.log(fifthValue); // This will take default value since the array doesn't have fifth value



// TEMPLATE LITERAL

let age = 28;
let firstName = 'Prabh';

function lastName() {
    return 'Gambhir';
}

console.log(`Age of ${firstName} ${lastName()} is ${age}`);