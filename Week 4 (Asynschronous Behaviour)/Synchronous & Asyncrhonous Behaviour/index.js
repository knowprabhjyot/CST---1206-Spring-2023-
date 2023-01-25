// Syncrhonous Behaviour

// console.log('1');
// console.log('2');
// console.log('3');
// console.log('4');
// console.log('5');
// console.log('6');
// console.log('7');


// Asynchronous Behaviour

// ************************************************************************
// SETTIMEOUT 
// ************************************************************************

// But before lets talk about a concept called as setTimeout
// setTimeout is a functionality of a browser not Javascript.
// setTimeout is also Asynchronous in nature
// setTimeout is a functionality of the browser which will allow you to execute a task after the given delay

setTimeout(function() {
    console.log("HEY I am printing after 5 seconds...");
}, 5000); // The above statement will print after 5 seconds, 5000miliseconds = 5 Seconds


setTimeout(function() {
    console.log("HEY I am printing after 10 seconds...");
}, 10000);  // The above statement will print after 1 seconds, 10000miliseconds = 10 Seconds


console.log(1);


console.log(2);



// Asynchronous Behaviour using setTimeout

console.log(1);

console.log(2);

setTimeout(function() {
    console.log(3);
}, 2000);

console.log(4);

setTimeout(function() {
console.log(5);
}, 1000);

setTimeout(function() {
    console.log(6);
}, 0);

console.log(7);

// The order of execution of this is


// 1 2 4 7 6 5 3

// timerfunction(2), timerfunction(1), timerFunction(0)



// ************************************************************************
// SETINTERVAL 
// ************************************************************************

// setInterval is a functionality of a browser not Javascript.
// setInterval is also Asynchronous in nature
// setInterval is a functionality of the browser which will allow you to execute the task multiple times after the given delay



let timer = setInterval(function() {
    console.log('Say hi after every 2 seconds')
}, 2000);

// This timer is a variable/ID which you can use to clear the interval, which means the above functionality will stop executing as soon as you call the below

clearInterval(timer);


// ************************************************************************
// SETINTERVAL & SET TIMEOUT TOGETHER 
// ************************************************************************


let timer2 = setInterval(() => {
    console.log('Hey How is it going'); 
}, 1000); // This will keep on executing after every 1 second

setTimeout(function() {
    clearInterval(timer2);
}, 5000); // This will stop the interval after 5 seconds.
