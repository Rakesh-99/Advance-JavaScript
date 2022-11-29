// Synchrounus Programming

// Synchronous codes executes line by line. Each line of code has to wait for the previous line of code until complete its execution.

// ex:-
console.log('One');
console.log('Two');
console.log('Three');



// Asyncrounous Programming :

// Asynchronous code runs in parallel, this means operation can occure while another one is still being executed.



// ex :- 
console.log('One');

function displayName() {
    setTimeout(function () {
        console.log('Two');
    }, 2000);
};
displayName();

console.log('Three');



// Callback can be Synchronous as well 

console.log('First statement');

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.forEach(function (val) {
    console.log(val);
});

console.log('Third Statement ')



