    // What is async in JavaScript ?

/*
    - An async function is a function that is declared with the 'async' keyword and allows the await keyword inside it.
    - The async and await keyword allows asynchronous, promise based behaviour to be written more easily and avoid the promise chains.

*/


    // await 

/*
    - JavaScript await function is used to wait for the promise, it could only be used inside async block.
    - It instruct the code to wait unitl the promise returns a response.
*/


        //A mini Project based on async & await 

/*
1. User Registartion 


2. Send Welcome Email


3. Login 


4. Get user data


5. Display user data 

*/




function register() {
    return new Promise((resolve, reject) => {
        
        setTimeout(function () {
            console.log('Registration Successfull');
            resolve('Hello , The program is all set !');
        }, 3000);
        
    });
};
function sendEmail() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Email has recived ');
            resolve();
        }, 2000);
        
    });
};
function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Login end ');
            resolve();
        }, 1000);
        
    })
};
function getUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Got user data');
            resolve();

        }, 1000);
    });
}
function displayUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Displayed user data");
            resolve();

        }, 1000); 
    });
};

async function authenticate() {

    await register();

    await sendEmail();

    await login();

    await getUserData();

    await displayUserData();

};

authenticate();
