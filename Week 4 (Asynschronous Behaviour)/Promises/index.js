

// This is how we create an instance of Promise
// Here we are resolving it, which means the response was fulfilled
let promise = new Promise(function(resolve, reject) {
    resolve('Transaction Approved!'); // That the promise resolved succesfully!
})

// This is how we create an instance of Promise
// Here we are rejecting it, which means the response was rejected
let promise2 = new Promise(function(resolve, reject) {
    reject('Transaction Denied!'); // That the promise got rejected!
})



// ************************************************************************
// Promise Resolve and Rejecting working together! 
// ************************************************************************


let balance = 10000;
let promise3 = new Promise(function(resolve, reject) {
    let burberrySuitPrice = 1200;
    console.log('Trying to do a transaction more than $1000, buy a burberry Suit ');

    balance = balance - burberrySuitPrice; // -200

    if (balance > 0) {
        resolve('Transaction Succesful, Good luck you are broke anyway!');
    } else {
        reject('Partial Transaction Completed, Use another Credit card to complete the transaction');
    }
})

// Here we are waiting for the response or the error from the promise we made
promise3.then(function(response) {
    console.log(response); // This will execute if the promise was fulfilled
}).catch(function(error) {
    console.log(error);  // This willm execute if the promise was rejected
})

// ANOTHER EXAMPLE

let evenPromise = new Promise(function(resolve, reject) {
    if (number % 2 === 0) {

        let successResponse = {
            message: "Succesfully divisible by 2",
            isEven: true
        }
        
        resolve(successResponse);
    } else {
       let errorResponse = {
            message: "Not divisible by 2",
            isEven: false
        }

        reject(errorResponse);

    }
})



evenPromise.then(function(response) {
    console.log(response); // This will execute if the promise was fulfilled
}).catch(function(error) {
    console.log(error); // This willm execute if the promise was rejected
})


// If you are resolving and rejecting at the same time then the preference is given to resolve

let num = 4;
let newPromise = new Promise(function(resolve, reject) {
    resolve(num);
    reject(num);
})


newPromise.then(function(response) {
    console.log(response); // this will be executed
}) .catch(function(error) {
    console.log(error);
})



// PROMISE CHAINING ********************


let num2 = 4;
let newPromise1 = new Promise(function(resolve, reject) {
    resolve(num2);
});


newPromise1.then(function(response) {
    console.log(response, "First");

    return response * 4;
    
}).then(function(response) {
    console.log(response, "Second");

    return response - 100;
}).then(function(response3) {
    console.log(response3);
})
.catch(function(error) {
    console.log(error);
})




// ************************************************************************
// ASYNC AWAIT, another way to wait for the promise
// ************************************************************************


// evenPromise

async function checkEvenNumbers() {
   
// FIRST WAY ******************
// evenPromise.then(function(response) {
//     console.log(response); // This will execute if the promise was fulfilled
// }).catch(function(error) {
//     console.log(error); // This willm execute if the promise was rejected
// })

// SECOND WAY ***********************

let response  = await evenPromise;

return response;
 
}
let finalResponse;

try {
    finalResponse = await checkEvenNumbers(); // This will be like then block
} catch (error) {
    console.log(error, "hey there was an error instead!"); // this will be catch block
}

console.log(finalResponse); 





// SIDE NOTE WHAT ARE CLASSES OR CONSTRUCTORS, lets understand using example

class Car {
    
    constructor(model, make, year) {
        this.model = model;
        this.make = make;
        this.year = year;
    }
}

// Here we are making an object from Car Class
let ferrari = new Car('ferrari1', 'Ferarri', 2022);




