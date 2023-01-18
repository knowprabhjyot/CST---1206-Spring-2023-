// First class Functions

let sum  = function () {
    return 3 + 4;
}

console.log(sum());


let multiply = () => {
    return 2 * 3;
}

console.log(multiply());

let divide = (a, b) => {
    return a / b;
}

console.log(divide(10, 2));



// Higher Order Function (HOF's) 

    // Passing function as an argument  

function callMe(dial) {
    dial(); // Callback
}

function dialing() {
    console.log('Dialing.....');
}

callMe(dialing);

    // Function return another Function

// CLosure - Advance Concept Of Javascript
function A(num1) {
    return function B(num2) {
        console.log(num1 + num2);
    }
}

let val1 = A(4); // This returns the function B to val1
val1(10); // Here 10 is parameter num2, and val1 is function B


// ForEach Function

let array = [1,2,3,4,5];

// for (let i = 0 ; i < array.length ; i++) {
//     console.log(array[i]);
// }

// FOR EACH FUNCTION - Iterates just like the above function

array.forEach((item, index) => {
    console.log(item, index);
})



// MAP FUNCTION - This Function is used to manipulate items inside an array, remember it doesn't change the orignal array.
//  Another Fact , the length of the modified/manipulated array will be same as orignal array


let newArray = [];

// Traditional Way using For Loop
// for (let i = 0 ; i < array.length; i++) {
//     let newvalue = array[i] * 2;
//     newArray.push(newvalue);
// }

// console.log(newArray);

let modifiedArray = array.map((item, index) => {
    return item * 2;
})

console.log(modifiedArray, "Modified");


let employeesIdList = [100, 101, 102, 103];

// [S100, E101, S102, E103]; // We want to add S in front of Even Employee ID's and E in front of Odd Employee Numbers

let modifiedEmployeeList = employeesIdList.map(function(employeeId) {
    if (employeeId % 2 === 0) { // This checks if it is an even number
        employeeId = "S" + employeeId; 
    } else {
        employeeId = "E" + employeeId; 
    }

    return employeeId;
})

console.log(modifiedEmployeeList, "Modified Employee List");



let employeeList = [
    {
        id : 1,
        name: "Mike",
        email: "mike@company.com",
        age: 28
    },
    {
        id : 2,
        name: "Daniel",
        email: "Daniel@company.com",
        age: 65
    },
    {
        id : 3,
        name: "Stacy",
        email: "Stacy@company.com",
        age: 28
    },
    {
        id : 4,
        name: "Roy",
        email: "Roy@company.com",
        age: 61
    }, 
    {
        id : 5,
        name: "Charles",
        email: "Charles@company.com",
        age: 60
    }
]


let modifiedEmployeeListWithPensions = employeeList.map((employee) => {
    if (employee.age > 60) { // if employe above 60, then he/she is eligible for Pension
        employee.willGetPension  = true;
    } else {
        employee.willGetPension  = false;
    }

    // If you don't return employee(parameter) your array will be made of undefined
    return employee;
})

console.log(modifiedEmployeeListWithPensions);





// FILTER FUNCTION - This Function is used to filter items inside an array, remember it does change the orignal array.

let list = [100, 101, 102, 104, 105, 106];

// Filter Out Even Numbers

let evenNumberList = list.filter((val) => {
    if (val % 2 === 0) { // Checks if it is an even Number
        return true;
    }
})

let odderNumberList = list.filter(function(item) {
    if (item % 2 !== 0) {
        return true;
    }
})
console.log(evenNumberList); //[ 100, 102, 104, 106 ]
console.log(odderNumberList); // [101, 105]


let studentList = [
    {
        name: "Mike",
        email: "mike@gmail.com",
        age: 18
    },
    {
        name: "Stacy",
        email: "Stacy@gmail.com",
        age: 17
    },
    {
        name: "Daniel",
        email: "daniel@gmail.com",
        age: 19
    },
    {
        name: "George",
        email: "George@gmail.com",
        age: 30
    },
    {
        name: "Luna",
        email: "Luna@gmail.com",
        age: 25
    }
]


// let studentsEligibleForParty = studentList.filter((student) => {
//     if (student.age >= 19) {
//         return true;
//     }
// })

// Short hand way of writing HOF's if your logic is not that complex
let studentsEligibleForParty = studentList.filter(student => student.age >= 19 ? true : false);

console.log(studentsEligibleForParty);



// REDUCE FUNCTION ****
let numList = [1,2,3,4,5,7];

// Traditional Way of using For loops

let sumOfNumbers = 0;

for (let i = 0 ; i < numList.length ; i++) {
    sumOfNumbers = sumOfNumbers + numList[i];
}

console.log(sumOfNumbers);

let finalSum = numList.reduce((accumulator, currentValue) => { // accumulator is the final output, i.e = sumOfNumbers, currentValue = numList[i]
    return accumulator + currentValue;
}, 0) // 0 is the initial Value

console.log(finalSum);



// Another Example for reduce

// Maximum Value Calculationm

let listOfNum = [20, -20, 10, 560, 0, 30];

let maximumValue = listOfNum.reduce(function(acc, cV) {
    return acc > cV ? acc : cV;
}, -Infinity);

console.log(maximumValue, "Max Value");



// let max = -Infinity;


// for (let i = 0 ; i < listOfNum.length ; i++) {
//     if (max < listOfNum[i]) {
//         max = listOfNum[i]; // max --> 20 --> 560
//     }
// }



// Minimum Value Calculationm

let minimumValue = listOfNum.reduce(function(acc, cV) {
    return acc < cV ? acc : cV;
}, Infinity);

console.log(minimumValue, "Min Value");




// For In Loop 

let studentObject = {
    name : "Mike",
    email : "mike@gmail.com",
    college: "VCC"
}

// studentObject.name
// studentOnject["name"]

for (let key in studentObject) {
    // console.log(key, "KEY", studentObject.key, "VALUE"); // So this Won't work, because there is no key value inside the object
    console.log(key, "KEY", studentObject[key], "VALUE"); // So this will work , because you are passing key as a variable 

}



// FIND Function 

let foundStudent = studentList.find((student) => {
    if (student.age === 19) {
        return student;
    }
})


console.log(foundStudent);



// FIND INDEX Function 
let foundStudentIndex = studentList.findIndex((student) => {
    if (student.age === 19) {
        return student;
    }
})


console.log(foundStudentIndex);



// SPLICE FUNCTION - Its used for ADding an item to the array, removing an item from the array. Remember this is an inplace method, it changes the orignal array

let newList = [20, -20, 10, 560, 0, 30];

//  newList.splice(0,3);


// newList.splice(0, 0, 25, 30, 40);

// newList.splice(2, 2, 200);

//  console.log(newList);

// SLICE FUNCTION




let slicedValue = newList.slice(0, 4);

console.log(slicedValue);