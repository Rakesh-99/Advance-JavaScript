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

