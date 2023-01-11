// Callbacks

function greet(fn) {
    fn();
}

greet(function() { console.log( "Hey !")});


// ForEach Function

let array = [1,2,3,4,5];

// for (let i = 0 ; i < array.length ; i++) {
//     console.log(array[i]);
// }

// FOR EACH FUNCTION - Iterates just like the above function

array.forEach((item, index) => {
    console.log(item + " " + index); // array[i]
})


// MAP FUNCTION 

let modifiedArray = array.map((item) => {
    return item * 2
})

console.log(modifiedArray);

let employeesIdList = [100, 101, 102, 103];

// [S100, E101, S102, E103]; // We want to add S in front of Even Employee ID's and E in front of Odd Employee Numbers

let modifiedEmployeeList = employeesIdList.map(function(employeeId) {
    if (employeeId % 2 === 0) {
        employeeId = "S" + employeeId; 
    } else {
        employeeId = "E" + employeeId; 
    }

    return employeeId;
})

console.log(modifiedEmployeeList);



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


let modifiedEmployeeListWithPensions = employeeList.map(function(employee) {
    if (employee.age > 60) {
        employee.willGetPension  = true;
    } else {
        employee.willGetPension  = false;
    }

    // If you don't return employee(parameter) your array will be made of undefined
    return employee;
})

console.log(employeeList);

// NOTE : Map functions in array don't change the orignal array (CHECK THIS AGAIN)